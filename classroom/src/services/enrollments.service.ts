import { Injectable } from '@nestjs/common';
import { PrismaService } from '../database/prisma/prisma.service';

interface GetByCourseAndStudentIdParams {
  courseId: string;
  studentId: string;
}

@Injectable()
export class EnrollmentsService {
  constructor(private prisma: PrismaService) {}

  getByCourseAndStudentId({
    courseId,
    studentId,
  }: GetByCourseAndStudentIdParams) {
    return this.prisma.enrollment.findFirst({
      where: { courseId, studentId, canceledAt: null },
    });
  }

  listAllEnrollment() {
    return this.prisma.enrollment.findMany();
  }

  listEnrollmentByStudentId(id: string) {
    return this.prisma.enrollment.findMany({
      where: { studentId: id, canceledAt: null },
      orderBy: { createdAt: 'desc' },
    });
  }
}
