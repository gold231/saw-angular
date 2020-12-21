import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-resources-buy-basics-what',
  templateUrl: './resources-buy-basics-what.component.html',
  styleUrls: ['./resources-buy-basics-what.component.scss']
})
export class ResourcesBuyBasicsWhatComponent implements OnInit {

  schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://www.saw.com/resources/buy/basics/what'
    },
    headline: 'Domain Brokers - What Do They Do?',
    description: 'Learn about what a domain name broker does, and the difference between a buyer\'s broker, a seller\'s broker, and a dual agency.',
    image: 'https://www.saw.com/assets/images/resources/broker-venn.png',
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
    this.titleService.setTitle('Domain Brokers - What Do They Do?');
    this.metaService.updateTag(
      { name: 'description', content: 'Learn about what a domain name broker does, and the difference between a buyer\'s broker, a seller\'s broker, and a dual agency.' }, `name='description'`
    );
  }

}
