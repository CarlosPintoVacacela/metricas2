import { Component, OnInit, Input } from '@angular/core';
import { CollectorDetail } from '../collectorDetail';
import { CollectorService } from '../collector.service';
import { CollectorBand } from '../collectorBand';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Band } from '../band';
import { ToastrService } from "ngx-toastr";

@Component({
  selector: 'app-collector-band',
  templateUrl: './collector-band.component.html',
  styleUrls: ['./collector-band.component.scss']
})
export class CollectorBandComponent implements OnInit {
  @Input() collector: CollectorDetail;
  clientForm: FormGroup;
  bands: Band[];
  band: Band;
  constructor(private collectorService: CollectorService, private formBuilder: FormBuilder, private toastr: ToastrService) { }

  getBands

  getBandList() {
    this.collectorService.getBands().subscribe(cs => {
      this.bands = cs;
      console.log(this.bands);
    });
  }

  createCollectorBand(newCollectorBand: CollectorBand) {

    this.collectorService.asignarBanda(newCollectorBand, this.collector, this.band).subscribe(client => {
      // this.clientes.push(client);
      this.showSuccess(this.band);
    });

    this.clientForm.reset();

  }

  showSuccess(c: Band) {
    this.toastr.success('Asignado exitosamente!', `Banda ${c.name}`, { "progressBar": true, timeOut: 4000 });
  }

  cancelBand() {
    this.toastr.error('Cancelado!', '', { "progressBar": true, timeOut: 4000 });
    this.clientForm.reset();
  }


  ngOnInit() {
    this.getBandList();
    this.clientForm = this.formBuilder.group({
      name: ["", Validators.required],
      image: ["", Validators.required],
      description: ["", Validators.required],
      creationDate: ["", Validators.required]

    });
  }

}
