import { InMemoryVipCardsRepository } from '@test/repositories/in-memory-vip-cards-repository';
import { CreateVipCard } from './create-vip-card';

describe('Create VIP-CARD', () => {
  it('should be able to create a VIP-CARD', async () => {
    const inMemoryVipCardsRepository = new InMemoryVipCardsRepository();
    const { vipCards } = inMemoryVipCardsRepository;

    const createVipCard = new CreateVipCard(inMemoryVipCardsRepository);

    await createVipCard.execute();
    expect(vipCards).toHaveLength(1);
  });
});
