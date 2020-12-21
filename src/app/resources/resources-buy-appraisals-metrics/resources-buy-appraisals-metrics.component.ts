import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-resources-buy-appraisals-metrics',
  templateUrl: './resources-buy-appraisals-metrics.component.html',
  styleUrls: ['./resources-buy-appraisals-metrics.component.scss']
})
export class ResourcesBuyAppraisalsMetricsComponent implements OnInit {

  schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://www.saw.com/resources/buy/appraisals/metrics'
    },
    headline: 'Domain Appraisal Metrics',
    description: 'Learn more about domain name appraisal metrics, and what makes up the value of a domain name. The clipboard shows the metrics that go into appraising domain names. Read below for an explanation of each metric.',
    image: 'https://www.saw.com/assets/images/resources/Domain%20Appriasal%20Metrics%20Clipboard.png',
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
    this.titleService.setTitle('Domain Appraisal Metrics');
    this.metaService.updateTag(
      { name: 'description', content: 'Learn more about domain name appraisal metrics, and what makes up the value of a domain name.' }, `name='description'`
    );
  }
}
