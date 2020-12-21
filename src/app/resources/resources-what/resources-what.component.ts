import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-resources-what',
  templateUrl: './resources-what.component.html',
  styleUrls: ['./resources-what.component.scss']
})
export class ResourcesWhatComponent implements OnInit {

  schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://www.saw.com/resources/what'
    },
    headline: 'What is a Domain Name?',
    description: 'What is a domain name? A domain name is your online identity, your web address. It is the address where people can find you online. There doesn’t have to be anything on your domain for it to be a domain.',
    image: 'https://www.saw.com/assets/images/section-1.jpg',
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
    this.titleService.setTitle('What is a Domain Name?');
    this.metaService.updateTag(
      { name: 'description', content: 'What is a domain name? A domain name is your online identity, your web address. It doesn\'t necessarily have to include a website.' }, `name='description'`
    );
  }

}
