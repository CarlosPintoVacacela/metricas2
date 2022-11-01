import { Component, OnInit, Input } from '@angular/core';
import { CollectorDetail } from '../collectorDetail';


@Component({
  selector: 'app-collectorDetail',
  templateUrl: './collectorDetail.component.html',
  styleUrls: ['./collectorDetail.component.scss']
})
export class CollectorDetailComponent implements OnInit {

  @Input() collectorDetail: CollectorDetail;

  constructor() {

  }

  btnPerf = true;
  btnDetail = false;
  btnAsign = false;
  onClickPerf(): void {

    this.btnPerf = true;
    this.btnDetail = false;
    this.btnAsign = false;

  }
  onClickDet(): void {

    this.btnPerf = false;
    this.btnDetail = true;
    this.btnAsign = false;

  }
  onClickAsign(): void {

    this.btnPerf = false;
    this.btnDetail = false;
    this.btnAsign = true;
  }

  ngOnInit() {

  }

}
