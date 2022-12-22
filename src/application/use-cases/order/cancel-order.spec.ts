import { InMemoryOrdersRepository } from '@test/repositories/in-memory-orders-repository';
import { InMemoryVipCardsRepository } from '@test/repositories/in-memory-vip-cards-repository';
import { CreateVipCard } from '../vip-card/create-vip-card';
import { CancelOrder } from './cancel-order';
import { CreateOrder } from './create-order';
import { OrderNotFound } from './errors/vip-card-not-found';

describe('Cancel Order', () => {
  it('should be able to cancel a Order', async () => {
    const inMemoryVipCardsRepository = new InMemoryVipCardsRepository();
    const inMemoryOrdersRepository = new InMemoryOrdersRepository();

    const { vipCards } = inMemoryVipCardsRepository;
    const { orders } = inMemoryOrdersRepository;

    const createVipCard = new CreateVipCard(inMemoryVipCardsRepository);
    const createOrder = new CreateOrder({
      vipCardsRepository: inMemoryVipCardsRepository,
      orderRepository: inMemoryOrdersRepository,
    });

    await createVipCard.execute();
    await createOrder.execute({ vipCardId: vipCards[0].id, status: 'pending' });

    const cancelOrder = new CancelOrder(inMemoryOrdersRepository);
    await cancelOrder.execute({ id: orders[0].id });

    expect(orders[0].status).toEqual('rejected');
  });

  it('should not be able to cancel a Order without valid id', async () => {
    const inMemoryVipCardsRepository = new InMemoryVipCardsRepository();
    const inMemoryOrdersRepository = new InMemoryOrdersRepository();

    const { vipCards } = inMemoryVipCardsRepository;

    const createVipCard = new CreateVipCard(inMemoryVipCardsRepository);
    const createOrder = new CreateOrder({
      vipCardsRepository: inMemoryVipCardsRepository,
      orderRepository: inMemoryOrdersRepository,
    });

    await createVipCard.execute();
    await createOrder.execute({ vipCardId: vipCards[0].id, status: 'pending' });

    const cancelOrder = new CancelOrder(inMemoryOrdersRepository);

    expect(
      async () => await cancelOrder.execute({ id: '123456' }),
    ).rejects.toThrow(OrderNotFound);
  });
});
