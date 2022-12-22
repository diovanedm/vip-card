import { CancelVipCard } from '@application/use-cases/vip-card/cancel-vip-card';
import { CreateVipCard } from '@application/use-cases/vip-card/create-vip-card';
import {
  Body,
  Controller,
  HttpException,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { CreateVipCardBody } from '../dtos/create-vip-card-body';

@Controller('vip-card')
export class VipCardController {
  constructor(
    private createVipCard: CreateVipCard,
    private cancelVipCard: CancelVipCard,
  ) {}

  @Post()
  async create(@Body() body: CreateVipCardBody) {
    try {
      const { quantityOrder, status } = body;
      await this.createVipCard.execute({ quantityOrder, status });
    } catch (error) {
      throw new HttpException(
        'Status should not be false',
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}
