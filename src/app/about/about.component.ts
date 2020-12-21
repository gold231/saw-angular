import { Component, OnInit } from '@angular/core';
import { Title, Meta, DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {  
  youtube_url;
  constructor(private sanitizer: DomSanitizer, private titleService: Title, private metaService: Meta) {
    this.youtube_url=this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/0tWMyyjQgdE")
  }

  ngOnInit() {
    this.titleService.setTitle("About Us - Saw.com Domain Name Brokerage");
    this.metaService.updateTag(
      { name: 'description', content: 'Learn more about Saw.com, domain name brokers, and how we help you buy, sell, and trade your domains in a brand new way.' },`name='description'`
    );
  }  
}
