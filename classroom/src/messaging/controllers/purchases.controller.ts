import { Controller } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';
import { CoursesService } from '../../services/courses.service';
import { EnrollmentsService } from '../../services/enrollments.service';
import { StudentsService } from '../../services/students.service';

export interface Customer {
  authUserId: string;
}

export interface Product {
  id: string;
  title: string;
  slug: string;
}

export interface PurchaseCreatedPayload {
  customer: Customer;
  product: Product;
}

@Controller()
export class PurchaseController {
  constructor(
    private studentsService: StudentsService,
    private coursesService: CoursesService,
    private enrollmentsService: EnrollmentsService,
  ) {}
  @EventPattern('purchases.new-purchase')
  async purchaseCreated(@Payload() payload: PurchaseCreatedPayload) {
    console.log(payload);
    const { authUserId } = payload.customer;
    const { title, slug } = payload.product;
    let student = await this.studentsService.getStudentByAuthId(authUserId);
    if (!student) {
      student = await this.studentsService.create({ authUserId });
    }
    let course = await this.coursesService.getCourseBySlug(slug);

    if (!course) {
      course = await this.coursesService.createCourse({ title });
    }

    await this.enrollmentsService.create({
      courseId: course.id,
      studentId: student.id,
    });
  }
}
