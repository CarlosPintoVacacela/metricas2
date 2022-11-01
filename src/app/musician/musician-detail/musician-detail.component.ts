import { Component, Input, OnInit } from '@angular/core';
import { Musician } from '../musician';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-musician-detail',
  templateUrl: './musician-detail.component.html',
  styleUrls: ['./musician-detail.component.css'],

  providers: [NgbModalConfig, NgbModal]
})
export class MusicianDetailComponent implements OnInit {

  @Input() musicianDetail: Musician;

  constructor(config: NgbModalConfig, private modalService: NgbModal) {
    config.backdrop = 'static';
    config.keyboard = false;
  }

  ngOnInit() {
    //console.log(this.musicianDetail);
  }

  open(content) {
    this.modalService.open(content);
  }
}
