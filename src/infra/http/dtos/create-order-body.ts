import { IsUUID } from 'class-validator';

export class CreateOrderBody {
  @IsUUID()
  vipCardId: string;
}
