import { VipCard } from '@application/entities/vip-card';
import { VipCardsRepository } from '@application/repositories/vip-cards-repository';
import { Injectable } from '@nestjs/common';

export type CreateVipCardResponse = void;

@Injectable()
export class CreateVipCard {
  constructor(private vipCardsRepository: VipCardsRepository) {}

  async execute(): Promise<CreateVipCardResponse> {
    const vipCard = new VipCard();

    if (!vipCard.status) {
      throw new Error(
        'it is not possible to create a vip card with canceled status',
      );
    }

    await this.vipCardsRepository.create(vipCard);
  }
}
