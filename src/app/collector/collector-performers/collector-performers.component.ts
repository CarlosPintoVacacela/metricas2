import { Component, OnInit, Input } from '@angular/core';
import { Musician } from '../../musician/musician';

@Component({
  selector: 'app-collector-performers',
  templateUrl: './collector-performers.component.html',
  styleUrls: ['./collector-performers.component.scss']
})
export class CollectorPerformersComponent implements OnInit {

  @Input() collectorPerformers: Musician[];
  constructor() { }

  ngOnInit() {
    console.log(this.collectorPerformers);
  }

}
