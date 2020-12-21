import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-resources-gvnsg',
  templateUrl: './resources-gvnsg.component.html',
  styleUrls: ['./resources-gvnsg.component.scss']
})
export class ResourcesGvnsgComponent implements OnInit {

  schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://www.saw.com/resources/gvnsg'
    },
    headline: 'Good Branding Versus Bad Branding',
    description: 'Learn what good branding versus bad branding is--and why good branding is so important and relevant to domain names.',
    image: 'https://www.saw.com/assets/images/resources/Online%20Branding%20Pillars.png',
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
    this.titleService.setTitle('Good Branding Versus Bad Branding');
    this.metaService.updateTag(
      { name: 'description', content: 'Learn what good branding versus bad branding is--and why good branding is so important and relevant to domain names.' }, `name='description'`
    );
  }

}
