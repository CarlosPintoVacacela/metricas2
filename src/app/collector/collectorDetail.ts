import { Collector } from './collector';
import { Musician } from '../musician/musician';


export class CollectorDetail extends Collector {

  private favoritePerformersA: Array<Musician>;


  constructor(id?: number, name?: string, telephone?: string, email?: string, collectorAlbums?: [], favoritePerformers?: Array<Musician>) {
    super(id, name, email, telephone, collectorAlbums);
    this.favoritePerformersA = favoritePerformers;
  }


  get favoritePerformers(): Array<Musician> { return this.favoritePerformersA; }
  set favoritePerformers(pAut) { this.favoritePerformersA = pAut; }


}
