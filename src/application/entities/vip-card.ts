import { randomUUID } from 'node:crypto';
import { QuantityOrder } from './value-objects/quantity-order';

interface VipCardProps {
  quantityOrder: QuantityOrder;
  status: boolean;
  createdAt?: Date;
}
export class VipCard {
  private _id: string;
  private _expirationAt: Date;
  private props: VipCardProps;

  constructor(props: VipCardProps, id?: string) {
    this._id = id ?? randomUUID();
    this.props = {
      ...props,
      createdAt: props.createdAt ?? new Date(),
    };
    this._expirationAt = new Date(this.props.createdAt.getMonth() + 6);
  }

  public get id(): string {
    return this._id;
  }

  public get createdAt(): Date {
    return this.props.createdAt;
  }

  public get expirationAt(): Date {
    return this._expirationAt;
  }

  public set quantityOrder(quantityOrder: QuantityOrder) {
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
