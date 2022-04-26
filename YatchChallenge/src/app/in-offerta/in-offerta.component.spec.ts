import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InOffertaComponent } from './in-offerta.component';

describe('InOffertaComponent', () => {
  let component: InOffertaComponent;
  let fixture: ComponentFixture<InOffertaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InOffertaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InOffertaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
