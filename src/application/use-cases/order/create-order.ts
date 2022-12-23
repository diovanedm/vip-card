import { Order } from '@application/entities/order';
import { Status } from '@application/entities/value-objects/status';
import { OrdersRepository } from '@application/repositories/orders-repository';
import { VipCardsRepository } from '@application/repositories/vip-cards-repository';
import { Injectable } from '@nestjs/common';
import { VipCardNotFound } from '../vip-card/errors/vip-card-not-found';
export interface CreateOrderRequest {
  vipCardId: string;
  status: Status;
}

export type CreateOrderResponse = void;
@Injectable()
export class CreateOrder {
  constructor(
    private orderRepository: OrdersRepository,
    private vipCardsRepository: VipCardsRepository,
  ) {}

  async execute(request: CreateOrderRequest): Promise<CreateOrderResponse> {
    const { vipCardId, status } = request;

    const findVipCardId = await this.vipCardsRepository.findById(vipCardId);

    if (!findVipCardId) {
      throw new VipCardNotFound();
    }

    const vipCard = new Order({ vipCardId, status: status });
    await this.orderRepository.create(vipCard);
  }
}
