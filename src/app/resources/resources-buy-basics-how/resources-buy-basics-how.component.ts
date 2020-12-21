import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-resources-buy',
  templateUrl: './resources-buy-basics-how.component.html',
  styleUrls: ['./resources-buy-basics-how.component.scss']
})
export class ResourcesBuyBasicsHowComponent implements OnInit {

  schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://www.saw.com/resources/buy/basics/how'
    },
    headline: 'How to Find the Owner of a Domain Name',
    description: 'Learn more about how to find the owner of a domain name. It is sometimes a daunting task to find the owner of a domain name. Daunting as it is, it\'s a crucial skill to have when you’re looking to buy a domain.',
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
    this.titleService.setTitle('How to Find the Owner of a Domain Name');
    this.metaService.updateTag(
      { name: 'description', content: 'Looking to see who owns a certain domain name? In our guide, Saw.com explains how to find the owner of a domain name and why sometimes it\'s difficult to find the real owner.' }, `name='description'`
    );
  }

}
