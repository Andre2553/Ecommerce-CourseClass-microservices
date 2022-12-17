/* eslint-disable prettier/prettier */
import { UseGuards } from '@nestjs/common';
import { Query, Resolver } from '@nestjs/graphql';
import { AuthorizationGuard } from 'src/http/auth/authorization.guard';
import { PrismaService } from '../../../database/prisma/prisma.service';
import { Product } from '../models/product';

@Resolver()
export class ProductResolver {
  constructor(private prisma: PrismaService) {}

  @Query(() => [Product])
  @UseGuards(AuthorizationGuard)
  products() {
    return this.prisma.product.findMany();
  }
}