import { VipCard } from 'src/application/entities/vip-card';
import { VipCardsRepository } from 'src/application/repositories/vip-cards-repository';

export class InMemoryVipCardsRepository implements VipCardsRepository {
  public vipCards: VipCard[] = [];

  async create(vipCard: VipCard): Promise<void> {
    this.vipCards.push(vipCard);
  }
}
