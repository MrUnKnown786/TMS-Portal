import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DarsanComponent } from './darsan.component';

describe('DarsanComponent', () => {
  let component: DarsanComponent;
  let fixture: ComponentFixture<DarsanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DarsanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DarsanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
