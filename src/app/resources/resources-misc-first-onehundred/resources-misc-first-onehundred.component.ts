import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-resources-misc-first-onehundred',
  templateUrl: './resources-misc-first-onehundred.component.html',
  styleUrls: ['./resources-misc-first-onehundred.component.scss']
})
export class ResourcesMiscFirstOnehundredComponent implements OnInit {

  schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://www.saw.com/resources/misc/first-100'
    },
    headline: 'What are the 100 Oldest Domain Names?',
    description: 'Let\'s turn back time and take a look at the first 100 domain names that were ever registered on the internet.',
    image: 'https://www.saw.com/assets/images/resources/100_oldest_domains.jpg',
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
    this.titleService.setTitle('What are the 100 Oldest Domain Names?');
    this.metaService.updateTag(
      { name: 'description', content: 'Let\'s turn back time and take a look at the first 100 domain names that were ever registered on the internet.' }, `name='description'`
    );
  }

}
