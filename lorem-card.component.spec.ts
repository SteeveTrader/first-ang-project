import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoremCardComponent } from './lorem-card.component';

describe('LoremCardComponent', () => {
  let component: LoremCardComponent;
  let fixture: ComponentFixture<LoremCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoremCardComponent]
    });
    fixture = TestBed.createComponent(LoremCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
