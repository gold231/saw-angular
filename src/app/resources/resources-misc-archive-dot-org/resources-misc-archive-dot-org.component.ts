import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-resources-misc-archive-dot-org',
  templateUrl: './resources-misc-archive-dot-org.component.html',
  styleUrls: ['./resources-misc-archive-dot-org.component.scss']
})
export class ResourcesMiscArchiveDotOrgComponent implements OnInit {

  schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://www.saw.com/resources/misc/archive-dot-org'
    },
    headline: 'Archive.org and Domain Names',
    description: 'Archive.org is a great website for looking at how websites previously looked in the past. When you consider buying a previously owned domain name, view the website at archive.org.',
    image: 'https://www.saw.com/assets/images/resources/archive_dot_org.jpg',
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
    this.titleService.setTitle('Archive.org and Domain Names');
    this.metaService.updateTag(
      { name: 'description', content: 'Archive.org is a great website for looking at how websites previously looked in the past. When you consider buying a previously owned domain name, view the website at archive.org.' }, `name='description'`
    );
  }

}
