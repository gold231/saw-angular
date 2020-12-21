import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-resources-buy-purchasing-taken',
  templateUrl: './resources-buy-purchasing-taken.component.html',
  styleUrls: ['./resources-buy-purchasing-taken.component.scss']
})
export class ResourcesBuyPurchasingTakenComponent implements OnInit {
  schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://www.saw.com/resources/buy/purchasing/taken'
    },
    headline: 'Buying a Domain - How Do I Buy a Domain Name that is Taken?',
    description: 'How can you purchase a domain name that is already taken? In our guide, we explain the challenges with purchasing domains that are already taken, and the Saw.com services available to help you navigate the domain market.',
    image: 'https://www.saw.com/assets/images/resources/how_to_find_owner_of_YUSbW.jpg',
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
    this.titleService.setTitle('Buying a Domain - How Do I Buy a Domain Name that is Taken?');
    this.metaService.updateTag(
      { name: 'description', content: 'How do you buy a domain name that is taken? In our guide, we explain the challenges with purchasing domains that are already taken, and the Saw.com services available to help you navigate the domain market.' }, `name='description'`
    );
  }

}
