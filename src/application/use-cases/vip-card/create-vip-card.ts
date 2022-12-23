import { QuantityOrder } from '@application/entities/value-objects/quantity-order';
import { VipCard } from '@application/entities/vip-card';
import { VipCardsRepository } from '@application/repositories/vip-cards-repository';
import { Injectable } from '@nestjs/common';

export type CreateVipCardResponse = void;

@Injectable()
export class CreateVipCard {
  constructor(private vipCardsRepository: VipCardsRepository) {}

  async execute(): Promise<CreateVipCardResponse> {
    const vipCard = new VipCard({
      quantityOrder: new QuantityOrder(0),
      status: true,
    });

    if (!vipCard.status) {
      throw new Error(
        'it is not possible to create a vip card with canceled status',
      );
    }

    await this.vipCardsRepository.create(vipCard);
  }
}
