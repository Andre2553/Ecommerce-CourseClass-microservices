import { Injectable } from '@nestjs/common';
import { PrismaService } from '../database/prisma/prisma.service';

@Injectable()
export class StudentsService {
  constructor(private prisma: PrismaService) {}

  listAllStudents() {
    return this.prisma.student.findMany();
  }

  getStudentByAId(id: string) {
    return this.prisma.student.findUnique({
      where: { id },
    });
  }
}
