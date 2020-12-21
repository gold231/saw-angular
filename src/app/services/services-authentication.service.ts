import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicesAuthenticationService {
  contactThankYouAccessible;

  constructor(){
    this.contactThankYouAccessible = false;
  }

  setContactThankYouAccessible(val: boolean){
    this.contactThankYouAccessible = val;
  }

  isContactThankYouAccessible(){
    return this.contactThankYouAccessible;
  }
}
