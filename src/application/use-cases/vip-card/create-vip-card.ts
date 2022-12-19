import { QuantityOrder } from '@application/entities/value-objects/quantity-order';
import { VipCard } from '@application/entities/vip-card';
import { VipCardsRepository } from '@application/repositories/vip-cards-repository';

export interface CreateVipCardProps {
  quantityOrder: number;
  status: boolean;
}

export class CreateVipCard {
  constructor(private vipCardsRepository: VipCardsRepository) {
    console.log('executou aa');
  }

  async execute(request: CreateVipCardProps) {
    const { quantityOrder, status } = request;

    const vipCard = new VipCard({
      quantityOrder: new QuantityOrder(quantityOrder),
      status: status,
    });

    console.log('executou');

    console.log('status: ' + vipCard.status);

    if (!vipCard.status) {
      console.log('entrou aqui');
      throw new Error(
        'it is not possible to create a vip card with canceled status',
      );
    }

    await this.vipCardsRepository.create(vipCard);

    return vipCard;
  }
}
