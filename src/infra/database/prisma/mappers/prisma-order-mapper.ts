import { Order } from '@application/entities/order';
import { toStatus } from '@application/entities/value-objects/status';
import { Order as RawOrder } from '@prisma/client';

export class PrismaOrderMapper {
  static toPrisma(order: Order) {
    return {
      id: order.id,
      vipCardId: order.vipCardId,
      status: order.status,
      createdAt: order.createdAt,
    };
  }

  static toDomain(raw: RawOrder): Order {
    return new Order(
      {
        vipCardId: raw.vipCardId,
        status: toStatus(raw.status),
        createdAt: raw.canceledAt,
      },
      raw.id,
    );
  }
}
