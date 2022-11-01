import { Component, OnInit, Input } from '@angular/core';
import { CollectorDetail } from '../collectorDetail';

@Component({
  selector: 'app-collector-performer',
  templateUrl: './collector-performer.component.html',
  styleUrls: ['./collector-performer.component.scss']
})
export class CollectorPerformerComponent implements OnInit {

  @Input() collector: CollectorDetail;
  constructor() { }
  selected = 1;

  changeSelector(item) {
    if (item == 1) {
      this.selected = 1;
    }
    else if (item == 2) {
      this.selected = 2;
    }
  }

  ngOnInit() {
  }

}
