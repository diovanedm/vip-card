import { CancelVipCard } from '@application/use-cases/vip-card/cancel-vip-card';
import { CreateVipCard } from '@application/use-cases/vip-card/create-vip-card';
import { Controller, HttpException, HttpStatus, Post } from '@nestjs/common';

@Controller('vip-card')
export class VipCardController {
  constructor(
    private createVipCard: CreateVipCard,
    private cancelVipCard: CancelVipCard,
  ) {}

  @Post()
  async create() {
    try {
      await this.createVipCard.execute();
    } catch (error) {
      throw new HttpException(
        'Status should not be false',
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}
