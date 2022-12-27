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

  async update(order: Order): Promise<void> {
    const raw = PrismaOrderMapper.toPrisma(order);

    await this.prisma.order.update({
      where: {
        id: order.id,
      },
      data: raw,
    });
  }

  async findById(id: string): Promise<Order | null> {
    const order = await this.prisma.order.findUnique({
      where: { id },
    });

    if (!order) return null;

    return PrismaOrderMapper.toDomain(order);
  }
}
