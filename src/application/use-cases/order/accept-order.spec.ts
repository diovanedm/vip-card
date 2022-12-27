import { InMemoryOrdersRepository } from '@test/repositories/in-memory-orders-repository';
import { InMemoryVipCardsRepository } from '@test/repositories/in-memory-vip-cards-repository';
import { CreateVipCard } from '../vip-card/create-vip-card';
import { AcceptOrder } from './accept-order';
import { CreateOrder } from './create-order';
import { OrderNotFound } from './errors/vip-card-not-found';

describe('Accept Order', () => {
  it('should be able to accept a Order', async () => {
    const inMemoryVipCardsRepository = new InMemoryVipCardsRepository();
    const inMemoryOrdersRepository = new InMemoryOrdersRepository();

    const { vipCards } = inMemoryVipCardsRepository;
    const { orders } = inMemoryOrdersRepository;

    const createVipCard = new CreateVipCard(inMemoryVipCardsRepository);
    const createOrder = new CreateOrder(
      inMemoryOrdersRepository,
      inMemoryVipCardsRepository,
    );

    await createVipCard.execute();
    await createOrder.execute(vipCards[0].id);

    const acceptOrder = new AcceptOrder(inMemoryOrdersRepository);
    await acceptOrder.execute({ id: orders[0].id });

    expect(orders[0].status).toEqual('resolved');
  });

  it('should not be able to accept a Order without valid id', async () => {
    const inMemoryVipCardsRepository = new InMemoryVipCardsRepository();
    const inMemoryOrdersRepository = new InMemoryOrdersRepository();

    const { vipCards } = inMemoryVipCardsRepository;

    const createVipCard = new CreateVipCard(inMemoryVipCardsRepository);
    const createOrder = new CreateOrder(
      inMemoryOrdersRepository,
      inMemoryVipCardsRepository,
    );

    await createVipCard.execute();
    await createOrder.execute(vipCards[0].id);

    const acceptOrder = new AcceptOrder(inMemoryOrdersRepository);

    expect(
      async () => await acceptOrder.execute({ id: '123456' }),
    ).rejects.toThrow(OrderNotFound);
  });
});
