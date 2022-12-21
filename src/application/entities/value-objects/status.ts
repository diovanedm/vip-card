/**
 * @param {StatusProps} status
 */

type StatusProps = 'pending' | 'resolved' | 'rejected';

export class Status {
  constructor(private status: StatusProps) {
    const isStatusValid = this.validateStatus(status);

    if (!isStatusValid) {
      throw new Error('Quantity is not valid');
    }
  }

  public get value(): string {
    return this.status;
  }

  private validateStatus(status: string): boolean {
    return ['pending', 'resolved', 'rejected'].includes(status);
  }
}
