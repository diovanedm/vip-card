import { InMemoryVipCardsRepository } from '@test/repositories/in-memory-vip-cards-repository';
import { CreateVipCard } from './create-vip-card';

describe('Create VIP-CARD', () => {
  it('should be able to create a VIP-CARD', async () => {
    const inMemoryVipCardsRepository = new InMemoryVipCardsRepository();
    const { vipCards } = inMemoryVipCardsRepository;

    const createVipCard = new CreateVipCard(inMemoryVipCardsRepository);

    createVipCard.execute({ quantityOrder: 1, status: true });
    console.log(vipCards[0]);
    expect(vipCards).toHaveLength(1);
  });

  it('should not be able to create a VIP-CARD with canceled status', () => {
    const inMemoryVipCardsRepository = new InMemoryVipCardsRepository();
    const createVipCard = new CreateVipCard(inMemoryVipCardsRepository);

    expect(async () =>
      createVipCard.execute({ quantityOrder: 1, status: false }),
    ).rejects.toThrow();
  });
});
