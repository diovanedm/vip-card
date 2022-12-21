import { VipCard } from '../entities/vip-card';

export abstract class VipCardsRepository {
  abstract create(vipCard: VipCard): Promise<void>;
  abstract update(vipCard: VipCard): Promise<void>;
  abstract findById(vipCardId: string): Promise<VipCard | null>;
}
