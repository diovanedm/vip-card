import { CancelVipCard } from '@application/use-cases/vip-card/cancel-vip-card';
import { CreateVipCard } from '@application/use-cases/vip-card/create-vip-card';
import {
  Controller,
  HttpException,
  HttpStatus,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

@Controller('vip-card')
export class VipCardController {
  constructor(
    private createVipCard: CreateVipCard,
    private cancelVipCard: CancelVipCard,
  ) {}

  @Post()
  async create() {
    await this.createVipCard.execute();
  }

  @Patch(':id/cancel')
  async cancelar(@Param('id') id: string) {
    await this.cancelVipCard.execute({ id });
  }
}
