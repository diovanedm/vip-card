import { VipCard } from '@application/entities/vip-card';
import { VipCardsRepository } from '@application/repositories/vip-cards-repository';
import { Injectable } from '@nestjs/common';
import { PrismaOrderMapper } from '../mappers/prisma-order-mapper';
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

  async update(vipCard: VipCard): Promise<void> {
    const raw = PrismaVipCardMapper.toPrisma(vipCard);

    await this.prisma.vipCard.update({
      where: {
        id: vipCard.id,
      },
      data: raw,
    });
  }

  async findById(vipCardId: string): Promise<VipCard | null> {
    const vipCard = await this.prisma.vipCard.findUnique({
      where: { id: vipCardId },
    });

    if (!vipCard) return null;

    return PrismaVipCardMapper.toDomain(vipCard);
  }
}
