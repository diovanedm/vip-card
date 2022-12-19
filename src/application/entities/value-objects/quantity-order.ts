export class QuantityOrder {
  private readonly quantityOrder: number;

  constructor(quantityOrder: number) {
    const isNumberLengthValid = this.validateNumberLength(quantityOrder);

    if (!isNumberLengthValid) {
      throw new Error('Quantity is not valid');
    }

    this.quantityOrder = quantityOrder;
  }

  public get value(): number {
    return this.quantityOrder;
  }

  private validateNumberLength(quantityOrder: number): boolean {
    return quantityOrder >= 0 && quantityOrder <= 12;
  }
}
