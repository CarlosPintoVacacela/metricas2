import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ToastrService } from "ngx-toastr";
import { Prizer } from '../prizer';
import { PrizerService } from '../prizer.service';
import { Musician } from '../../musician/musician';
import { PrizerMusician } from '../prizerMusician';


@Component({
  selector: 'app-prizer-musician',
  templateUrl: './prizer-musician.component.html',
  styleUrls: ['./prizer-musician.component.css']
})
export class PrizerMusicianComponent implements OnInit {

  @Input() musicianP: Musician;

  prizer: Prizer[];
  prizerSelected: Prizer;
  musicianForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private prizerService: PrizerService
  ) { }

  getPrizers() {
    this.prizerService.getPrizers().subscribe(p => {
      this.prizer = p;
    })
  }

  assignPrizer(prizerMusician: PrizerMusician) {
    console.log(this.musicianP);
    this.prizerService.assingPrizer(this.prizerSelected, this.musicianP, prizerMusician).subscribe(client => {
    this.showSuccess();
    });
  }

  showSuccess() {
    this.toastr.success('¡El premio se ha asignado exitosamente!', ``, { "progressBar": true, timeOut: 4000 });
  }

  cancelPrizer() {
    this.toastr.error('Cancelado', '', { "progressBar": true, timeOut: 4000 });
  }

  ngOnInit() {
    this.getPrizers()
    this.musicianForm = this.formBuilder.group({
      premiationDate: ["", Validators.required]

    });
  }

}
