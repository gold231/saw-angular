import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-resources-buy-basics-reg',
  templateUrl: './resources-buy-basics-reg.component.html',
  styleUrls: ['./resources-buy-basics-reg.component.scss']
})
export class ResourcesBuyBasicsRegComponent implements OnInit {

  schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://www.saw.com/resources/buy/basics/reg'
    },
    headline: 'How to Register a Domain Name - Domain Name Registration',
    description: 'In order to use a domain name, you must purchase or register the name. Learn more about the domain name registration process.',
    image: 'https://www.saw.com/assets/images/resources/3-Rs.png',
    author: {
      '@type': 'Organization',
      name: 'Jeffrey Gabriel'
    },
    publisher: {
      '@type': 'Organization',
      name: 'Saw.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.saw.com/assets/images/logo/header-sticky-logo.png',
        width: 300,
        height: 60
      }
    },
    datePublished: '2019-12-16',
    dateModified: '2019-12-16'
  }

  constructor(private titleService: Title, private metaService: Meta) { }

  ngOnInit() {
    this.titleService.setTitle('Domain Name Registration');
    this.metaService.updateTag(
      { name: 'description', content: 'In order to use a domain name, you must purchase or register the name. Learn more about the domain name registration process.' }, `name='description'`
    );
  }

}
