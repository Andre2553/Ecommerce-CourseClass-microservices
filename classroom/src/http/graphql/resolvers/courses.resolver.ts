/* eslint-disable prettier/prettier */
import { UseGuards } from '@nestjs/common';
import { UnauthorizedException } from '@nestjs/common/exceptions';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { AuthorizationGuard } from '../../../http/auth/authorization.guard';
import { CoursesService } from '../../../services/courses.service';
import { EnrollmentsService } from '../../../services/enrollments.service';
import { StudentsService } from '../../../services/students.service';
import { AuthUser, CurrentUser } from '../../auth/currentUser';
import { CreateCourseInput } from '../inputs/create-course-input';
import { Course } from '../models/course';


@Resolver(() => Course)
export class CoursesResolver {
  constructor(private coursesService: CoursesService, private studentsService: StudentsService, private enrollmentsService: EnrollmentsService) {}

  @Query(() => [Course])
  @UseGuards(AuthorizationGuard)
  courses() {
    return this.coursesService.listAllCourses();
  }

  @Query(() => Course)
  @UseGuards(AuthorizationGuard)
  async course(@Args('id') id: string, @CurrentUser() user: AuthUser) {
    const student = await this.studentsService.getStudentByAuthId(user.sub);

    if(!student){
      throw new Error('Student not found');
    }

    const enrollment = this.enrollmentsService.getByCourseAndStudentId({courseId: id, studentId: student.id});

    if(!enrollment){
      throw new UnauthorizedException('You are not enrolled in this course');
    }

    return this.coursesService.getCourseById(id);
  }

  @Mutation(() => Course)
  @UseGuards(AuthorizationGuard)
  createCourse(@Args('data') data: CreateCourseInput) {
    return this.coursesService.createCourse(data);
  }


}