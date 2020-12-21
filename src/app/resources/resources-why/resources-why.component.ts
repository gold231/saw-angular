import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-resources-why',
  templateUrl: './resources-why.component.html',
  styleUrls: ['./resources-why.component.scss']
})
export class ResourcesWhyComponent implements OnInit {

  schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://www.saw.com/resources/why'
    },
    headline: 'Why Purchase a Domain Name?',
    description: 'Why purchase a domain name? There are several reasons, including building a website, monetizing the domain, and using it for email or as an investment. Learn more about why you should buy a domain name.',
    image: 'https://www.saw.com/assets/images/resources/dom-why-purchase.jpg',
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
    this.titleService.setTitle('Why Purchase a Domain Name?');
    this.metaService.updateTag(
      { name: 'description', content: 'Why purchase a domain name? There are several reasons, including building a website, monetizing the domain, and using it for email or as an investment. Learn more about why you should buy a domain name.' }, `name='description'`
    );
  }

}
