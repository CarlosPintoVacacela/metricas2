import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ToastrService } from "ngx-toastr";
import { Prizer } from '../prizer';
import { PrizerService } from '../prizer.service';


@Component({
  selector: 'app-prizer-create',
  templateUrl: './prizer-create.component.html',
  styleUrls: ['./prizer-create.component.css']
})
export class PrizerCreateComponent implements OnInit {
  prizerForm: FormGroup;

  prizers: Prizer[]

  constructor(
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private prizerService: PrizerService
  ) { }

  createPrizer(newPrizer: Prizer) {
    // Process checkout data here
    console.warn("el premio fue creado", newPrizer);
    this.showSuccess(newPrizer);

    this.prizerService.createPrizer(newPrizer).subscribe(prizer => {
      this.prizers.push(prizer);
     this.showSuccess(newPrizer);
    });

    this.prizerForm.reset();

  }

  showSuccess(p: Prizer) {
    this.toastr.success('¡Creado exitosamente!', `Premio ${p.name}`, { "progressBar": true, timeOut: 4000 });
  }

  cancelCreation() {
    console.log("Cancelando ...");
    this.prizerForm.reset();
  }

  ngOnInit() {
    this.prizerForm = this.formBuilder.group({
      name: ["", [Validators.required, Validators.minLength(2)]],
      organization: ["", Validators.required],
      description: ["", [Validators.required, Validators.minLength(10)]]
    });
  }

}
