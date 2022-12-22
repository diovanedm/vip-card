import { Order } from '@application/entities/order';
import { OrdersRepository } from '@application/repositories/orders-repository';

export class InMemoryOrdersRepository implements OrdersRepository {
  public orders: Order[] = [];

  async create(order: Order): Promise<void> {
    this.orders.push(order);
  }

  async update(order: Order): Promise<void> {
    const orderIndex = this.orders.findIndex((item) => item.id === order.id);

    this.orders[orderIndex] = order;
  }

  async findById(orderId: string): Promise<Order | null> {
    const order = await this.orders.find((order) => order.id === orderId);

    if (!order) {
      return null;
    }

    return order;
  }
}
