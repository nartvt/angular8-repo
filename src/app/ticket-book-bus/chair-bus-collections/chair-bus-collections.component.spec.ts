import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChairBusCollectionsComponent } from './chair-bus-collections.component';

describe('ChairBusCollectionsComponent', () => {
  let component: ChairBusCollectionsComponent;
  let fixture: ComponentFixture<ChairBusCollectionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChairBusCollectionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChairBusCollectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
