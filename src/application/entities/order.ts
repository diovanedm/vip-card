import { randomUUID } from 'node:crypto';
import { Status } from './value-objects/status';

export interface OrderProps {
  vipCardId: string;
  status: Status;
}

export class Order {
  private _id: string;
  private _createdAt: Date;

  constructor(private props: OrderProps) {
    this._id = randomUUID();
    this._createdAt = new Date();
  }

  public get id(): string {
    return this._id;
  }

  public get createdAt(): Date {
    return this._createdAt;
  }

  public get vipCardId(): string {
    return this.props.vipCardId;
  }

  public reject() {
    this.status = 'rejected';
  }

  public accept() {
    this.status = 'resolved';
  }

  public set status(status: Status) {
    this.props.status = status;
  }

  public get status(): Status {
    return this.props.status;
  }
}
