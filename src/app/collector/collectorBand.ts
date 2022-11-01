export class CollectorBand {

  private _name: string;
  private _image: string;
  private _description: string;
  private _creationDate: string;

  constructor(name: string, image: string, description: string, creationDate: string) {
    this._name = name;
    this._image = image;
    this._description = description;
    this._creationDate = creationDate;

  }

  get name(): string { return this._name }
  get image(): string { return this._image }
  get description(): string { return this._description }
  get creationDate(): string { return this._creationDate }

  set name(price: string) {
    this._name = price;
  }

  set image(status: string) {
    this._image = status;
  }

  set description(status: string) {
    this._description = status;
  }

  set creationDate(status: string) {
    this._creationDate = status;
  }
}
