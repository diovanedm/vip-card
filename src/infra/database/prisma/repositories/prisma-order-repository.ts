import { Order } from '@application/entities/order';
import { OrdersRepository } from '@application/repositories/orders-repository';
import { Injectable } from '@nestjs/common';
import { PrismaOrderMapper } from '../mappers/prisma-order-mapper';
import { PrismaService } from './prisma.service';

@Injectable()
export class PrismaOrderRepository implements OrdersRepository {
  constructor(private prisma: PrismaService) {}

  async create(order: Order): Promise<void> {
    const raw = PrismaOrderMapper.toPrisma(order);

    await this.prisma.order.create({
      data: raw,
    });
  }
  update(vipCard: Order): Promise<void> {
    throw new Error('Method not implemented.');
  }
  findById(vipCardId: string): Promise<Order> {
    throw new Error('Method not implemented.');
  }
}
