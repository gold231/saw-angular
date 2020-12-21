import { Component, OnInit } from '@angular/core';
import { Title, Meta, DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-contact-thank-you-adult-block',
  templateUrl: './contact-thank-you-adult-block.component.html',
  styleUrls: ['./contact-thank-you-adult-block.component.scss']
})
export class ContactThankYouAdultBlockComponent implements OnInit { 

  youtube_url;
  constructor(private sanitizer: DomSanitizer, private titleService: Title, private metaService: Meta) {
    this.youtube_url=this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/GvwbfTWVuQs?autoplay=1")
  }

  ngOnInit() {
    this.titleService.setTitle("Contact Us");
    this.metaService.updateTag(
      { name: 'description', content: 'In the meantime, please check out our video on our Adult Block service.' },`name='description'`
    );    
    let closeElem= <HTMLElement>document.querySelector('.close');
    closeElem.click();
  }  

}
