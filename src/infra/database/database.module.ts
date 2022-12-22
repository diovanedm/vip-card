import { VipCardsRepository } from '@application/repositories/vip-cards-repository';
import { Module } from '@nestjs/common';
import { PrismaVipCardRepository } from './prisma/repositories/prisma-vip-card-repository';
import { PrismaService } from './prisma/repositories/prisma.service';

@Module({
  providers: [
    PrismaService,
    {
      provide: VipCardsRepository,
      useClass: PrismaVipCardRepository,
    },
  ],
  exports: [VipCardsRepository],
})
export class DatabaseModule {}
