import { Component, OnInit } from '@angular/core';
import { CollectorDetail } from '../collectorDetail';
import { CollectorService } from '../collector.service';

@Component({
  selector: 'app-collector-list',
  templateUrl: './collector-list.component.html',
  styleUrls: ['./collector-list.component.css']
})
export class CollectorListComponent implements OnInit {

  constructor(private collectorService: CollectorService) { }
  collectors: Array<CollectorDetail>;
  selected = false;
  selectedCollector: CollectorDetail;

  onSelected(b: CollectorDetail): void {
    //console.log(`se seleccionó el libro  ${b.id} con reviews ${b.musicians.length}`);
    this.selected = !this.selected;
    this.selectedCollector = b;

  }


  getCollectorList() {
    this.collectorService.getCollectors().subscribe(cs => {

      this.collectors = cs;
      console.log(this.collectors);
    });
  }


  ngOnInit() {
    this.getCollectorList();
  }

}
