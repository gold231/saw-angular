import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactUsAdultBlockComponent } from './contact-us-adult-block.component';

describe('ContactUsAdultBlockComponent', () => {
  let component: ContactUsAdultBlockComponent;
  let fixture: ComponentFixture<ContactUsAdultBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactUsAdultBlockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactUsAdultBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
