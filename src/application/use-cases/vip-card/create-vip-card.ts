import { QuantityOrder } from '@application/entities/value-objects/quantity-order';
import { VipCard } from '@application/entities/vip-card';
import { VipCardsRepository } from '@application/repositories/vip-cards-repository';

export interface CreateVipCardRequest {
  quantityOrder: number;
  status: boolean;
}

export type CreateVipCardResponse = void;

export class CreateVipCard {
  constructor(private vipCardsRepository: VipCardsRepository) {}

  async execute(request: CreateVipCardRequest): Promise<CreateVipCardResponse> {
    const { quantityOrder, status } = request;

    const vipCard = new VipCard({
      quantityOrder: new QuantityOrder(quantityOrder),
      status: status,
    });

    if (!vipCard.status) {
      throw new Error(
        'it is not possible to create a vip card with canceled status',
      );
    }

    await this.vipCardsRepository.create(vipCard);
  }
}
