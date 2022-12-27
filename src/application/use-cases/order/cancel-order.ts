import { OrdersRepository } from '@application/repositories/orders-repository';
import { Injectable } from '@nestjs/common';
import { OrderNotFound } from './errors/vip-card-not-found';

export interface CancelOrderRequest {
  id: string;
}

export type CancelOrderResponse = void;

@Injectable()
export class CancelOrder {
  constructor(private ordersRepository: OrdersRepository) {}

  async execute(request: CancelOrderRequest): Promise<CancelOrderResponse> {
    const { id } = request;

    const order = await this.ordersRepository.findById(id);
    console.log('order');
    console.log(order);
    if (!order) {
      throw new OrderNotFound();
    }

    order.reject();

    await this.ordersRepository.update(order);
  }
}
