import { Injectable } from '@nestjs/common';
import { PrismaService } from '../database/prisma/prisma.service';

@Injectable()
export class EnrollmentsService {
  constructor(private prisma: PrismaService) {}

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
