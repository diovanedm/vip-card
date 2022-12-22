import { randomUUID } from 'node:crypto';
import { QuantityOrder } from './value-objects/quantity-order';

export class VipCard {
  private _id: string;
  private _createdAt: Date;
  private _expirationAt: Date;
  private _quantityOrder: QuantityOrder;
  private _status: boolean;

  constructor() {
    this._id = randomUUID();
    this._status = true;
    this._quantityOrder = new QuantityOrder(0);
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

  public set quantityOrder(quantityOrder: QuantityOrder) {
    this._quantityOrder = quantityOrder;
  }

  public get quantityOrder(): QuantityOrder {
    return this._quantityOrder;
  }

  public cancel() {
    this._status = false;
  }

  public get status(): boolean {
    return this._status;
  }
}
