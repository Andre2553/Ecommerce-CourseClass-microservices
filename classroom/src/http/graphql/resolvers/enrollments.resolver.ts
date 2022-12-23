/* eslint-disable prettier/prettier */
import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { AuthorizationGuard } from '../../../http/auth/authorization.guard';
import { CoursesService } from '../../../services/courses.service';
import { EnrollmentsService } from '../../../services/enrollments.service';
import { StudentsService } from '../../../services/students.service';
import { Course } from '../models/course';
import { Enrollment } from '../models/enrollment';
import { Student } from '../models/student';


@Resolver(() => Enrollment)
export class EnrollmentsResolver {
  constructor(private enrollmentsService: EnrollmentsService, private coursesService: CoursesService, private studentsService: StudentsService) {}

  @Query(() => [Enrollment])
  @UseGuards(AuthorizationGuard)
  products() {
    return this.enrollmentsService.listAllEnrollment();
  }
  @ResolveField(() => [Student])
  students(@Parent() enrollment: Enrollment) {
    return this.studentsService.getStudentId(enrollment.studentId);
  }

  @ResolveField(() => [Course])
  courses(@Parent() enrollment: Enrollment) {
    return this.coursesService.getCourseById(enrollment.courseId);
  }


}