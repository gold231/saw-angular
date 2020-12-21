import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-resources-buy-purchasing-consult',
  templateUrl: './resources-buy-purchasing-consult.component.html',
  styleUrls: ['./resources-buy-purchasing-consult.component.scss']
})
export class ResourcesBuyPurchasingConsultComponent implements OnInit {

  schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://www.saw.com/resources/buy/purchasing/consult'
    },
    headline: 'Buying a Domain - Purchasing Your Domain',
    description: 'How do you buy or purchase a domain name? In our guide, we explain what happens during a domain name consultation.  Continue reading below for more information about our domain consulting services.',
    image: 'https://www.saw.com/assets/images/resources/domain_acquisition_c_QIJFn.jpg',
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
    this.titleService.setTitle('Buying a Domain - Purchasing Your Domain');
    this.metaService.updateTag(
      { name: 'description', content: 'How do you buy or purchase a domain name? In our guide, we explain what happens during a domain name consultation.' }, `name='description'`
    );
  }

}
