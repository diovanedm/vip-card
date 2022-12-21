import { randomUUID } from 'node:crypto';
import { QuantityOrder } from './value-objects/quantity-order';

interface VipCardProps {
  quantityOrder: QuantityOrder;
  status: boolean;
}

export class VipCard {
  private _id: string;
  private _createdAt: Date;
  private _expirationAt: Date;

  constructor(private props: VipCardProps) {
    this._id = randomUUID();

    this._createdAt = new Date();
    this._expirationAt = new Date(this._createdAt.getMonth() + 6);
  }

  public get id(): string {
    return this._id;
  }

  public get createdAt(): Date {
    return this._createdAt;
  }

  public get expirationAt(): Date {
    return this._expirationAt;
  }

  protected set quantityOrder(quantityOrder: QuantityOrder) {
    this.props.quantityOrder = quantityOrder;
  }

  public get quantityOrder(): QuantityOrder {
    return this.props.quantityOrder;
  }

  public cancel() {
    this.props.status = false;
  }

  public get status(): boolean {
    return this.props.status;
  }
}
