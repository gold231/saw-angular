import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-resources-buy-purchasing-what',
  templateUrl: './resources-buy-purchasing-what.component.html',
  styleUrls: ['./resources-buy-purchasing-what.component.scss']
})
export class ResourcesBuyPurchasingWhatComponent implements OnInit {

  schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://www.saw.com/resources/buy/purchasing/what'
    },
    headline: 'What Kind of Domain Should I Buy?',
    description: 'There are many different types of domain names, and different types of domain name extensions (endings). What kind of domain name should you buy?',
    image: 'https://www.saw.com/assets/images/resources/Domain%20Extensions%20Hierarchy.png',
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
    this.titleService.setTitle('What Kind of Domain Should I Buy?');
    this.metaService.updateTag(
      { name: 'description', content: 'There are many different types of domain names, and different types of domain name extensions (endings). What kind of domain name should you buy?' }, `name='description'`
    );
  }

}
