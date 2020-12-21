import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-resources-whatsin',
  templateUrl: './resources-whatsin.component.html',
  styleUrls: ['./resources-whatsin.component.scss']
})
export class ResourcesWhatsinComponent implements OnInit {

  schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://www.saw.com/resources/whatsin'
    },
    headline: 'What’s in a Name? The Power of Branding',
    description: 'What\'s in a name? Learn more about the power of branding. Regardless of how you use your brand, your domain name should match your brand.',
    image: 'https://www.saw.com/assets/images/resources/whats_in_a_name.jpg',
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
    this.titleService.setTitle('What’s in a Name? The Power of Branding');
    this.metaService.updateTag(
      { name: 'description', content: 'What\'s in a name? Learn more about the power of branding. Regardless of how you use your brand, your domain name should match your brand.' }, `name='description'`
    );
  }

}
