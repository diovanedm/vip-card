import { AcceptOrder } from '@application/use-cases/order/accept-order';
import { CancelOrder } from '@application/use-cases/order/cancel-order';
import { CreateOrder } from '@application/use-cases/order/create-order';
import {
  Body,
  Controller,
  HttpException,
  HttpStatus,
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

  @Post()
  async create(@Body() body: CreateOrderBody) {
    try {
      const { vipCardId, status } = body;
      await this.createOrder.execute({
        vipCardId,
        status,
      });
    } catch (error) {
      throw new HttpException('Id not found', HttpStatus.NOT_FOUND);
    }
  }
}
