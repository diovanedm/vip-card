import { QuantityOrder } from '@application/entities/value-objects/quantity-order';
import { VipCard } from '@application/entities/vip-card';
import { VipCardsRepository } from '@application/repositories/vip-cards-repository';

export interface RegisterVipCardProps {
  quantityOrder: number;
}
export class RegisterVipCard {
  constructor(private vipCardsRepository: VipCardsRepository) {}

  async execute(request: RegisterVipCardProps) {
    const { quantityOrder } = request;

    const vipCard = new VipCard({
      quantityOrder: new QuantityOrder(quantityOrder),
    });

    await this.vipCardsRepository.create(vipCard);

    return vipCard;
  }
}
