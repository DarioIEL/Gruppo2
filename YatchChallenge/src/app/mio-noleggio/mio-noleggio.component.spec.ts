import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MioNoleggioComponent } from './mio-noleggio.component';

describe('MioNoleggioComponent', () => {
  let component: MioNoleggioComponent;
  let fixture: ComponentFixture<MioNoleggioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MioNoleggioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MioNoleggioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
