export class CollectorAlbum {

  private _price: number;
  private _status: string;

  constructor(price: number, status: string) {
    this._price = price;
    this._status = status;

  }

  get price(): number { return this._price }
  get status(): string { return this._status }


  set price(price: number) {
    this._price = price;
  }

  set status(status: string) {
    this._status = status;
  }


}

