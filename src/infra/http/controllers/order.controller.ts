import { AcceptOrder } from '@application/use-cases/order/accept-order';
import { CancelOrder } from '@application/use-cases/order/cancel-order';
import { CreateOrder } from '@application/use-cases/order/create-order';
import {
  Body,
  Controller,
  HttpException,
  HttpStatus,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateOrderBody } from '../dtos/create-order-body';

@Controller('order')
export class OrderController {
  constructor(
    private createOrder: CreateOrder,
    private cancelOrder: CancelOrder,
    private acceptOrder: AcceptOrder,
  ) {}

  @Post(':id')
  async create(@Param('id') vipCardId: string) {
    try {
      await this.createOrder.execute(vipCardId);
    } catch (error) {
      throw new HttpException('Id not found', HttpStatus.NOT_FOUND);
    }
  }

  @Patch(':id/accept')
  async accept(@Param('id') id: string) {
    try {
      await this.acceptOrder.execute({ id });
    } catch (error) {
      throw new HttpException('Id not found', HttpStatus.NOT_FOUND);
    }
  }

  @Patch(':id/cancel')
  async cancel(@Param('id') id: string) {
    try {
      await this.cancelOrder.execute({ id });
    } catch (error) {
      throw new HttpException('Id not found', HttpStatus.NOT_FOUND);
    }
  }
}
