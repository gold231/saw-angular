import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-resources-misc-internet-history',
  templateUrl: './resources-misc-internet-history.component.html',
  styleUrls: ['./resources-misc-internet-history.component.scss']
})
export class ResourcesMiscInternetHistoryComponent implements OnInit {

  schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://www.saw.com/resources/misc/internet-history'
    },
    headline: 'A Brief History of the Internet',
    description: 'Learn more about the internet and domain names by reading our brief history of the internet.',
    image: 'https://www.saw.com/assets/images/resources/1950s-univac.png',
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
    this.titleService.setTitle('A (Brief) History of the Internet');
    this.metaService.updateTag(
      { name: 'description', content: 'Learn more about the internet and domain names by reading our brief history of the internet.' }, `name='description'`
    );
  }

}
