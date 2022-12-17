import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { HttpModule } from './http/http.module';
import { PrismaService } from './database/prisma/prisma.service';

@Module({
  imports: [DatabaseModule, HttpModule],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
