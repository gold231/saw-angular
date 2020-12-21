import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-resources-buy-appraisals-how',
  templateUrl: './resources-buy-appraisals-how.component.html',
  styleUrls: ['./resources-buy-appraisals-how.component.scss']
})
export class ResourcesBuyAppraisalsHowComponent implements OnInit {

  schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://www.saw.com/resources/buy/appraisals/how'
    },
    headline: 'How are Domains Appraised?',
    description: 'Learn about how domain names are appraised, and how domain name appraisals are similar to home appraisals.',
    image: 'https://www.saw.com/assets/images/resources/Domain%20Appraisal%20Clipboards.png',
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
    this.titleService.setTitle('How are Domains Appraised?');
    this.metaService.updateTag(
      { name: 'description', content: 'Learn about how domain names are appraised, and how domain name appraisals are similar to home appraisals.' }, `name='description'`
    );
  }
}
