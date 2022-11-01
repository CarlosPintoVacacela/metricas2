export class Prizer {
  private _id: number;
  private _organization: string;
  private _name: string;
  private _description: string;
  private _performerPrizes: [];


  public constructor(id: number, organization: string, name: string, description: string, performerPrizes: []) {
    this._id = id;
    this._organization = organization;
    this._name = name;
    this._description = description;
    this._performerPrizes = performerPrizes;
  }
  get id(): number { return this._id }
  get organization():string {return this._organization}
  get name():string {return this._name}
  get description(): string { return this._description }
  get performerPrizes(): [] { return this._performerPrizes }

  set id(id:number){
    this._id = id;
  }

  set organization(organization:string){
    this._organization = organization;
  }

  set name(name:string){
    this._name = name;
  }

  set description(description:string){
    this._description = description;
  }

  set performerPrizes(performerPrizes){
    this._performerPrizes = performerPrizes;
  }
}
