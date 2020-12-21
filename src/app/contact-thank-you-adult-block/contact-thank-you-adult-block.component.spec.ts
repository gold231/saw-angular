import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactThankYouAdultBlockComponent } from './contact-thank-you-adult-block.component';

describe('ContactThankYouAdultBlockComponent', () => {
  let component: ContactThankYouAdultBlockComponent;
  let fixture: ComponentFixture<ContactThankYouAdultBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactThankYouAdultBlockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactThankYouAdultBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
