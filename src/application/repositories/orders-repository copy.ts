import { Order } from '../entities/order';

export abstract class OrdersRepository {
  abstract create(order: Order): Promise<void>;
  abstract update(order: Order): Promise<void>;
  abstract findById(orderId: string): Promise<Order | null>;
}
