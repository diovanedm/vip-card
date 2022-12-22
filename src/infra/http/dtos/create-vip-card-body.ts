import { IsBoolean, IsNotEmpty } from 'class-validator';

export class CreateVipCardBody {
  @IsBoolean()
  status: boolean;

  @IsNotEmpty()
  quantityOrder: number;
}
