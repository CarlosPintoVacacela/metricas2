export class Album {
  constructor(
    public id:number,
    public name:string,
    public cover: string,
    public releaseDate:string,
    public description:string,
    public genre:string,
    public recordLabel:string,
    public tracks:object[],
    public performers:object[]){}
}
