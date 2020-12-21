import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-thank-you',
  templateUrl: './contact-thank-you.component.html',
  styleUrls: ['./contact-thank-you.component.scss']
})
export class ContactThankYouComponent implements OnInit { 

  constructor() {}

  ngOnInit() {
    let closeElem= <HTMLElement>document.querySelector('.close');
    closeElem.click();
  }  

}
