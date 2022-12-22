import { CancelVipCard } from '@application/use-cases/vip-card/cancel-vip-card';
import { CreateVipCard } from '@application/use-cases/vip-card/create-vip-card';
import { DatabaseModule } from '@infra/database/database.module';
import { Module } from '@nestjs/common';
import { VipCardController } from './controllers/vip-card.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [VipCardController],
  providers: [CreateVipCard, CancelVipCard],
})
export class HttpModule {}
