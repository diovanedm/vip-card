import { OrdersRepository } from '@application/repositories/orders-repository';
import { VipCardsRepository } from '@application/repositories/vip-cards-repository';
import { Module } from '@nestjs/common';
import { PrismaOrderRepository } from './prisma/repositories/prisma-order-repository';
import { PrismaVipCardRepository } from './prisma/repositories/prisma-vip-card-repository';
import { PrismaService } from './prisma/repositories/prisma.service';

@Module({
  providers: [
    PrismaService,
    {
      provide: VipCardsRepository,
      useClass: PrismaVipCardRepository,
    },
    {
      provide: OrdersRepository,
      useClass: PrismaOrderRepository,
    },
  ],
  exports: [VipCardsRepository, OrdersRepository],
})
export class DatabaseModule {}
