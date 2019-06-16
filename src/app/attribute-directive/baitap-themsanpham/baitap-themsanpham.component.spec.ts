import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaitapThemsanphamComponent } from './baitap-themsanpham.component';

describe('BaitapThemsanphamComponent', () => {
  let component: BaitapThemsanphamComponent;
  let fixture: ComponentFixture<BaitapThemsanphamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaitapThemsanphamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaitapThemsanphamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
