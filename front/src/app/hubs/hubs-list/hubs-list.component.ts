import { Component, OnInit } from '@angular/core';
import { HubsService } from '../hubs.service';

@Component({
  selector: 'app-hubs-list',
  templateUrl: './hubs-list.component.html',
  styleUrls: ['./hubs-list.component.css']
})
export class HubsListComponent implements OnInit {

  public hubsList;
  constructor(private hubsService: HubsService) { }

  ngOnInit() {
    this.hubsList = this.hubsService.getHubs();
  }

}
