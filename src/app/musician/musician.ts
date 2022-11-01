export class Musician {
  id: number;
  name: string;
  image: string;
  description: string;
  birthDate: any;
  albums: [];
  performerPrizes: [];


  public constructor(id: number, name: string, image: string, description: string, birthDate: any, albums: [], performerPrizes: []) {
    this.id = id;
    this.name = name;
    this.image = image;
    this.description = description;
    this.birthDate = birthDate;
    this.albums = albums;
    this.performerPrizes = performerPrizes;
  }
}
