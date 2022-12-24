import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { HttpModule } from './http/http.module';
import { PrismaService } from './database/prisma/prisma.service';
import { MessagingModule } from './messaging/messaging.module';

@Module({
  imports: [DatabaseModule, HttpModule, MessagingModule],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
