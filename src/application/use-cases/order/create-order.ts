import { Order } from '@application/entities/order';
import { Status } from '@application/entities/value-objects/status';
import { OrdersRepository } from '@application/repositories/orders-repository';
import { VipCardsRepository } from '@application/repositories/vip-cards-repository';
import { Injectable } from '@nestjs/common';
import { VipCardNotFound } from '../vip-card/errors/vip-card-not-found';
@Injectable()
export class CreateOrder {
  constructor(
    private orderRepository: OrdersRepository,
    private vipCardsRepository: VipCardsRepository,
  ) {}

  async execute(vipCardId: string): Promise<void> {
    const findVipCardId = await this.vipCardsRepository.findById(vipCardId);

    if (!findVipCardId) {
      throw new VipCardNotFound();
    }

    if (!findVipCardId.status) {
      throw new Error('Card is not valid');
    }

    const vipCard = new Order({ vipCardId, status: 'pending' });
    await this.orderRepository.create(vipCard);
  }
}
