import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HubsListComponent } from './hubs-list/hubs-list.component';
import { HubsService } from './hubs.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [HubsListComponent],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    HubsListComponent
  ],
  providers: [
    HubsService
  ]
})
export class HubsModule { }
