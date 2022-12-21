import { VipCard } from 'src/application/entities/vip-card';
import { VipCardsRepository } from 'src/application/repositories/vip-cards-repository';

export class InMemoryVipCardsRepository implements VipCardsRepository {
  public vipCards: VipCard[] = [];

  async create(vipCard: VipCard): Promise<void> {
    this.vipCards.push(vipCard);
  }

  async update(vipCard: VipCard): Promise<void> {
    const vipCardIndex = this.vipCards.findIndex(
      (item) => item.id === vipCard.id,
    );

    this.vipCards[vipCardIndex] = vipCard;
  }

  async findById(vipCardId: string): Promise<VipCard | null> {
    const vipCard = await this.vipCards.find(
      (vipCard) => vipCard.id === vipCardId,
    );

    if (!vipCard) {
      return null;
    }

    return vipCard;
  }
}
