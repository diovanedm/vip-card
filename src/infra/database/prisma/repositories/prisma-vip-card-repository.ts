import { VipCard } from '@application/entities/vip-card';
import { VipCardsRepository } from '@application/repositories/vip-cards-repository';
import { Injectable } from '@nestjs/common';
import { PrismaVipCardMapper } from '../mappers/prisma-vip-card-mapper';
import { PrismaService } from './prisma.service';

@Injectable()
export class PrismaVipCardRepository implements VipCardsRepository {
  constructor(private prisma: PrismaService) {}

  async create(vipCard: VipCard): Promise<void> {
    const raw = PrismaVipCardMapper.toPrisma(vipCard);

    await this.prisma.vipCard.create({
      data: raw,
    });
  }
  update(vipCard: VipCard): Promise<void> {
    throw new Error('Method not implemented.');
  }
  findById(vipCardId: string): Promise<VipCard> {
    throw new Error('Method not implemented.');
  }
}
