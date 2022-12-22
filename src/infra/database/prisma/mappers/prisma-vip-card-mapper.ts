import { VipCard } from '@application/entities/vip-card';

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
}
