import { VipCard as RawVipCard } from '@prisma/client';
import { VipCard } from '@application/entities/vip-card';
import { QuantityOrder } from '@application/entities/value-objects/quantity-order';

export class PrismaVipCardMapper {
  static toPrisma(vipCard: VipCard) {
    return {
      quantityOrder: vipCard.quantityOrder.value,
      status: vipCard.status,
      id: vipCard.id,
      createdAt: vipCard.createdAt,
      expirationAt: vipCard.expirationAt,
    };
  }

  static toDomain(raw: RawVipCard): VipCard {
    return new VipCard(
      {
        quantityOrder: new QuantityOrder(raw.quantityOrder),
        status: raw.status,
        createdAt: raw.createdAt,
      },
      raw.id,
    );
  }
}
