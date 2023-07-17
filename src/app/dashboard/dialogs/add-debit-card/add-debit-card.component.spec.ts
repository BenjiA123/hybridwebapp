import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDebitCardComponent } from './add-debit-card.component';

describe('AddDebitCardComponent', () => {
  let component: AddDebitCardComponent;
  let fixture: ComponentFixture<AddDebitCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDebitCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDebitCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
