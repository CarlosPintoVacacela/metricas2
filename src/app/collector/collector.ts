export class Collector {

  private idC: number;
  private nameC: string;
  private telephoneC: string;
  private emailC: string;
  private collectorAlbumsC: [];


  public constructor(id?: number, name?: string, telephone?: string, email?: string, collectorAlbums?: []) {
    this.idC = id;
    this.nameC = name;
    this.telephoneC = telephone;
    this.emailC = email;
    this.collectorAlbumsC = collectorAlbums;

  }


  get id(): number { return this.idC; }

  get name(): string { return this.nameC; }
  set name(pName) { this.nameC = pName; }

  get telephone(): string { return this.telephoneC; }
  set telephone(pTelephone) { this.telephoneC = pTelephone; }

  get email(): string { return this.emailC; }
  set email(pEmail) { this.emailC = pEmail; }

  get collectorAlbums(): [] { return this.collectorAlbumsC; }
  set collectorAlbums(pCollectorAlbums) { this.collectorAlbumsC = pCollectorAlbums; }



}
