import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WriteDetailsComponent } from './write-details.component';

describe('WriteDetailsComponent', () => {
  let component: WriteDetailsComponent;
  let fixture: ComponentFixture<WriteDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WriteDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WriteDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
