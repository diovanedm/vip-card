import { randomUUID } from 'node:crypto';
import { Status } from './value-objects/status';

export interface OrderProps {
  vipCardId: string;
  status: Status;
  createdAt?: Date;
}

export class Order {
  private _id: string;
  private props: OrderProps;

  constructor(props: OrderProps) {
    this._id = randomUUID();
    this.props = {
      ...props,
      createdAt: props.createdAt ?? new Date(),
    };
  }

  public get id(): string {
    return this._id;
  }

  public get createdAt(): Date {
    return this.props.createdAt;
  }

  public get vipCardId(): string {
    return this.props.vipCardId;
  }

  public reject() {
    this.props.status = 'rejected';
  }

  public accept() {
    this.props.status = 'resolved';
  }

  public set status(status: Status) {
    this.props.status = status;
  }

  public get status(): Status {
    return this.props.status;
  }
}
