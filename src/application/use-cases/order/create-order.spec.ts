import { InMemoryOrdersRepository } from '@test/repositories/in-memory-orders-repository';
import { InMemoryVipCardsRepository } from '@test/repositories/in-memory-vip-cards-repository';
import { CancelVipCard } from '../vip-card/cancel-vip-card';
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
    const createOrder = new CreateOrder(
      inMemoryOrdersRepository,
      inMemoryVipCardsRepository,
    );

    await createVipCard.execute();
    await createOrder.execute(vipCards[0].id);

    expect(orders[0].vipCardId).toEqual(vipCards[0].id);
  });

  it('should not be able to create a Order without valid vipCardId ', async () => {
    const inMemoryVipCardsRepository = new InMemoryVipCardsRepository();
    const inMemoryOrdersRepository = new InMemoryOrdersRepository();

    const createVipCard = new CreateVipCard(inMemoryVipCardsRepository);
    const createOrder = new CreateOrder(
      inMemoryOrdersRepository,
      inMemoryVipCardsRepository,
    );

    createVipCard.execute();

    expect(async () => await createOrder.execute('1234')).rejects.toThrow(
      VipCardNotFound,
    );
  });

  it('should not be able to create an Order with a vipCard which status is false.', async () => {
    const inMemoryVipCardsRepository = new InMemoryVipCardsRepository();
    const { vipCards } = inMemoryVipCardsRepository;
    const inMemoryOrdersRepository = new InMemoryOrdersRepository();

    const createVipCard = new CreateVipCard(inMemoryVipCardsRepository);
    const cancelVipCard = new CancelVipCard(inMemoryVipCardsRepository);

    const createOrder = new CreateOrder(
      inMemoryOrdersRepository,
      inMemoryVipCardsRepository,
    );

    await createVipCard.execute();
    await cancelVipCard.execute({ id: vipCards[0].id });

    expect(
      async () => await createOrder.execute(vipCards[0].id),
    ).rejects.toThrow();
  });
});
