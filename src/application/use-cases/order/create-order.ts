import { Order } from '@application/entities/order';
import { Status } from '@application/entities/value-objects/status';
import { OrdersRepository } from '@application/repositories/orders-repository copy';
import { VipCardsRepository } from '@application/repositories/vip-cards-repository';
import { VipCardNotFound } from '../vip-card/errors/vip-card-not-found';

export interface CreateOrderProps {
  orderRepository: OrdersRepository;
  vipCardsRepository: VipCardsRepository;
}

export interface CreateOrderRequest {
  vipCardId: string;
  status: Status;
}

export type CreateOrderResponse = void;

export class CreateOrder {
  constructor(private props: CreateOrderProps) {}

  async execute(request: CreateOrderRequest): Promise<CreateOrderResponse> {
    const { vipCardId, status } = request;

    const findVipCardId = await this.props.vipCardsRepository.findById(
      vipCardId,
    );

    if (!findVipCardId) {
      throw new VipCardNotFound();
    }

    const vipCard = new Order({ vipCardId, status: status });
    await this.props.orderRepository.create(vipCard);
  }
}
