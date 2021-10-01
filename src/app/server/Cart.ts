import Buyable from '../domain/Buyable';

export default class Cart {
  private _items: Buyable[] = [];
  items: any;

  add (item: Buyable): void {
    this._items.push(item);
  }
  
  getAll(): Buyable[] {
    return [...this._items];
  }
}
