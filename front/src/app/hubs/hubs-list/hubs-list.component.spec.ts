import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HubsListComponent } from './hubs-list.component';

describe('HubsListComponent', () => {
  let component: HubsListComponent;
  let fixture: ComponentFixture<HubsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HubsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HubsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
