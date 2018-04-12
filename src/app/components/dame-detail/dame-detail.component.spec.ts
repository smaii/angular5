import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DameDetailComponent } from './dame-detail.component';

describe('DameDetailComponent', () => {
  let component: DameDetailComponent;
  let fixture: ComponentFixture<DameDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DameDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DameDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
