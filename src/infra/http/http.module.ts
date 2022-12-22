import { AcceptOrder } from '@application/use-cases/order/accept-order';
import { CancelOrder } from '@application/use-cases/order/cancel-order';
import { CreateOrder } from '@application/use-cases/order/create-order';
import { CancelVipCard } from '@application/use-cases/vip-card/cancel-vip-card';
import { CreateVipCard } from '@application/use-cases/vip-card/create-vip-card';
import { DatabaseModule } from '@infra/database/database.module';
import { Module } from '@nestjs/common';
import { CardController } from './controllers/card.controller';
import { VipCardController } from './controllers/vip-card.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [VipCardController, CardController],
  providers: [
    CreateVipCard,
    CancelVipCard,
    CreateOrder,
    CancelOrder,
    AcceptOrder,
  ],
})
export class HttpModule {}
