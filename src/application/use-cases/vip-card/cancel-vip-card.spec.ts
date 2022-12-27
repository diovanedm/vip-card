import { InMemoryVipCardsRepository } from '@test/repositories/in-memory-vip-cards-repository';
import { CancelVipCard } from './cancel-vip-card';
import { CreateVipCard } from './create-vip-card';
import { VipCardNotFound } from './errors/vip-card-not-found';

describe('Cancel VIP-CARD', () => {
  it('should be able to cancel a VIP-CARD', async () => {
    const inMemoryVipCardsRepository = new InMemoryVipCardsRepository();
    const { vipCards } = inMemoryVipCardsRepository;

    const createVipCard = new CreateVipCard(inMemoryVipCardsRepository);
    const cancelVipCard = new CancelVipCard(inMemoryVipCardsRepository);

    await createVipCard.execute();
    await cancelVipCard.execute({ id: vipCards[0].id });

    expect(vipCards[0].status).toEqual(false);
  });

  it('should not be able to cancel a VIP-CARD with invalid id', async () => {
    const inMemoryVipCardsRepository = new InMemoryVipCardsRepository();

    const createVipCard = new CreateVipCard(inMemoryVipCardsRepository);
    const cancelVipCard = new CancelVipCard(inMemoryVipCardsRepository);

    await createVipCard.execute();

    expect(
      async () => await cancelVipCard.execute({ id: '123456' }),
    ).rejects.toThrow(VipCardNotFound);
  });
});
