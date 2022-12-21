import { QuantityOrder } from '@application/entities/value-objects/quantity-order';
import { VipCard } from '@application/entities/vip-card';
import { VipCardsRepository } from '@application/repositories/vip-cards-repository';
import { VipCardNotFound } from './errors/vip-card-not-found';

export interface CancelVipCardRequest {
  id: string;
}

export type CancelVipCardResponse = void;

export class CancelVipCard {
  constructor(private vipCardsRepository: VipCardsRepository) {}

  async execute(request: CancelVipCardRequest) {
    const { id } = request;

    const vipCard = await this.vipCardsRepository.findById(id);

    if (!vipCard) {
      throw new VipCardNotFound();
    }

    vipCard.cancel();
    await this.vipCardsRepository.update(vipCard);
  }
}
