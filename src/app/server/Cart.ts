import Buyable from '../domain/Buyable';

export default class Cart {
  private _items: Buyable[] = [];
  items: any;

  add(item: Buyable): void {
    this._items.push(item);
  }

  getAll(): Buyable[] {
    return [...this._items];
  }

  sumNotDiscount(): number {
    const arr = this.getAll();
    return arr.reduce((a, b) => a + b.price, 0);
  }

  sumWitchDiscount(discount: number): number {
    const sumNotDiscount = this.sumNotDiscount();
    return sumNotDiscount / 100 * discount;
  }

  deleteItem(id: number): void {
    const elemById = this._items.findIndex(elem => elem.id === id);
    this._items.splice(elemById, 1);
  }
}
