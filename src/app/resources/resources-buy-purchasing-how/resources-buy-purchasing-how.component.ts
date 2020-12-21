import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-resources-buy-purchasing-how',
  templateUrl: './resources-buy-purchasing-how.component.html',
  styleUrls: ['./resources-buy-purchasing-how.component.scss']
})
export class ResourcesBuyPurchasingHowComponent implements OnInit {

  schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://www.saw.com/resources/buy/purchasing/how'
    },
    headline: 'How to Purchase a Domain Name',
    description: 'Learn how to purchase a domain name and, more importantly, how to find your own weather.com type of domain name.  You get what you pay for!',
    image: 'https://www.saw.com/assets/images/resources/how_can_you_find_you_3b9cy.jpg',
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
    this.titleService.setTitle('How to Purchase a Domain Name');
    this.metaService.updateTag(
      { name: 'description', content: 'Learn how to purchase a domain name and, more importantly, how to find your own weather.com type of domain name.' }, `name='description'`
    );
  }

}
