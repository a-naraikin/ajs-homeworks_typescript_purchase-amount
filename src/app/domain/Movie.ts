import Buyable from './Buyable';

export default class Movie implements Buyable {
  private _time: string;

  constructor(
    readonly id: number,
    readonly name: string,
    readonly price: number,
    readonly year: number,
    readonly country: string,
    readonly slogan: string,
    readonly genre: string[],
    readonly time: number,
  ) {
    this._time = `${time} мин./${this.getTime(this.time)}`;
  }

  getTime(mins: number) {
    const hours = Math.trunc(mins / 60);
    const minutes = mins % 60;
    return `${hours}:${minutes}`;
  }
}
