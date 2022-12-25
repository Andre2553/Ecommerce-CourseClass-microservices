import { Injectable } from '@nestjs/common';
import { PrismaService } from '../database/prisma/prisma.service';
interface CreateStudentParams {
  authUserId: string;
}
@Injectable()
export class StudentsService {
  constructor(private prisma: PrismaService) {}

  listAllStudents() {
    return this.prisma.student.findMany();
  }

  getStudentByAuthId(id: string) {
    return this.prisma.student.findUnique({
      where: { authUserId: id },
    });
  }

  getStudentId(id: string) {
    return this.prisma.student.findUnique({
      where: { id },
    });
  }
  create({ authUserId }: CreateStudentParams) {
    return this.prisma.student.create({
      data: {
        authUserId,
      },
    });
  }
}
