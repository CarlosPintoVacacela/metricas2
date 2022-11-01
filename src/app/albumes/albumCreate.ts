export class AlbumCreate {
  constructor(
    public name:string,
    public cover: string,
    public releaseDate:string,
    public description:string,
    public genre:string,
    public recordLabel:string){}
}
