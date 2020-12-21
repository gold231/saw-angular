import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private titleService: Title, private metaService: Meta) {}

  ngOnInit() {
    this.titleService.setTitle('Domain Name Brokers & Portfolio Management - Saw.com');
    this.metaService.updateTag(
      { name: 'description', content: 'At Saw.com, our domain name brokers and domain consultants rely on sharp insights and insider knowledge to help you maximize your opportunities and grow your business.' }, `name='description'`
    );
  }
}
