import { InMemoryOrdersRepository } from '@test/repositories/in-memory-orders-repository';
import { InMemoryVipCardsRepository } from '@test/repositories/in-memory-vip-cards-repository';
import { CreateVipCard } from '../vip-card/create-vip-card';
import { VipCardNotFound } from '../vip-card/errors/vip-card-not-found';
import { CreateOrder } from './create-order';

describe('Create Order', () => {
  it('should be able to create a Order', async () => {
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

    expect(orders[0].vipCardId).toEqual(vipCards[0].id);
  });

  it('not should be able to create a Order without valid vipCardId ', async () => {
    const inMemoryVipCardsRepository = new InMemoryVipCardsRepository();
    const inMemoryOrdersRepository = new InMemoryOrdersRepository();

    const createVipCard = new CreateVipCard(inMemoryVipCardsRepository);
    const createOrder = new CreateOrder({
      vipCardsRepository: inMemoryVipCardsRepository,
      orderRepository: inMemoryOrdersRepository,
    });

    createVipCard.execute();

    expect(
      async () =>
        await createOrder.execute({ vipCardId: '1234', status: 'pending' }),
    ).rejects.toThrow(VipCardNotFound);
  });
});
