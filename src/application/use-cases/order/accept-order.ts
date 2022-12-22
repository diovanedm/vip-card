import { OrdersRepository } from '@application/repositories/orders-repository';
import { Injectable } from '@nestjs/common';
import { OrderNotFound } from './errors/vip-card-not-found';

export interface AcceptOrderRequest {
  id: string;
}

export type AcceptOrderResponse = void;

@Injectable()
export class AcceptOrder {
  constructor(private ordersRepository: OrdersRepository) {}

  async execute(request: AcceptOrderRequest): Promise<AcceptOrderResponse> {
    const { id } = request;

    const order = await this.ordersRepository.findById(id);

    if (!order) {
      throw new OrderNotFound();
    }

    order.accept();

    await this.ordersRepository.update(order);
  }
}
