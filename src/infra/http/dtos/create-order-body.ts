import { Status } from '@application/entities/value-objects/status';
import { IsNotEmpty, IsUUID } from 'class-validator';

export class CreateOrderBody {
  @IsUUID()
  vipCardId: string;

  @IsNotEmpty()
  status: Status;
}
