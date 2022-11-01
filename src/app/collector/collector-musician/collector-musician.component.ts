import { Component, OnInit, Input } from '@angular/core';
import { CollectorDetail } from '../collectorDetail';
import { Musician } from '../../musician/musician';
import { MusicianService } from '../../musician/musician.service';
import { CollectorService } from '../collector.service';
import { ToastrService } from "ngx-toastr";

@Component({
  selector: 'app-collector-musician',
  templateUrl: './collector-musician.component.html',
  styleUrls: ['./collector-musician.component.scss']
})
export class CollectorMusicianComponent implements OnInit {
  @Input() collector: CollectorDetail;
  constructor(private musicianService: MusicianService, private collectorService: CollectorService, private toastr: ToastrService) { }
  musico: Musician;
  musicos: Musician[];


  getMusicianList() {
    this.musicianService.getMusicians().subscribe(cs => {
      this.musicos = cs;
      console.log(this.musicos);
    });
  }

  asignarMusico() {
    console.log(this.collector, this.musico);
    this.collectorService.asignarMusico(this.collector, this.musico).subscribe(client => {
      // this.clientes.push(client);
      this.showSuccess(this.musico);
    });
  }

  showSuccess(c: Musician) {
    this.toastr.success('Asignado exitosamente!', `Músico ${c.name}`, { "progressBar": true, timeOut: 4000 });
  }

  cancelMusico() {
    this.toastr.error('Cancelado!', '', { "progressBar": true, timeOut: 4000 });
  }

  ngOnInit() {
    this.getMusicianList();
  }

}
