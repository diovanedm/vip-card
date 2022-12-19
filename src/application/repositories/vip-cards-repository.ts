import { VipCard } from '../entities/vip-card';

export abstract class VipCardsRepository {
  abstract create(vipCard: VipCard): Promise<void>;
}
