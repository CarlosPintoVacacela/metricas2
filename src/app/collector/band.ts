export class Band {

  private _id: number;
  private _name: string;
  private _image: string;
  private _description: string;
  private _creationDate: string;
  private _albums: [];
  private _musicians: [];
  private _performerPrizes: [];


  constructor(id: number, name: string, image: string, description: string, creationDate: string, albums: [], musicians: [], performerPrizes: []) {
    this._id = id;
    this._name = name;
    this._image = image;
    this._description = description;
    this._creationDate = creationDate;
    this._albums = albums;
    this._musicians = musicians;
    this._performerPrizes = performerPrizes;

  }

  get id(): number { return this._id }
  get name(): string { return this._name }
  get image(): string { return this._image }
  get description(): string { return this._description }
  get creationDate(): string { return this._creationDate }
  get albums(): [] { return this._albums }
  get musicians(): [] { return this._musicians }
  get performerPrizes(): [] { return this._performerPrizes }


  set id(id: number) {
    this._id = id;
  }

  set name(name: string) {
    this._name = name;
  }
  set image(image: string) {
    this._image = image;
  }
  set description(description: string) {
    this._description = description;
  }
  set creationDate(creationDate: string) {
    this._creationDate = creationDate;
  }
  set albums(albums: []) {
    this._albums = albums;
  }
  set musicians(musicians: []) {
    this._musicians = musicians;
  }
  set performerPrizes(performerPrizes: []) {
    this._performerPrizes = performerPrizes;
  }





}
