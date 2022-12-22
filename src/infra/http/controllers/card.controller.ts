import { AcceptOrder } from '@application/use-cases/order/accept-order';
import { CancelOrder } from '@application/use-cases/order/cancel-order';
import { CreateOrder } from '@application/use-cases/order/create-order';
import { Controller, HttpException, HttpStatus, Post } from '@nestjs/common';

@Controller('card')
export class CardController {
  constructor(
    private createOrder: CreateOrder,
    private cancelOrder: CancelOrder,
    private acceptOrder: AcceptOrder,
  ) {}

  @Post()
  async create() {
    try {
      await this.createOrder.execute({
        vipCardId: '58a4aa76-6f86-4348-bd8c-45f832e61338',
        status: 'pending',
      });
    } catch (error) {
      throw new HttpException(
        'Status should not be false',
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}
