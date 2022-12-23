import { Order } from '@application/entities/order';

export class PrismaOrderMapper {
  static toPrisma(order: Order) {
    return {
      id: order.id,
      vipCardId: order.vipCardId,
      status: order.status,
      createdAt: order.createdAt,
    };
  }
}
