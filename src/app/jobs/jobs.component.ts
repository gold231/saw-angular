import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss']
})
export class JobsComponent implements OnInit {

  constructor(private titleService: Title, private metaService: Meta) { }

  ngOnInit() {
    this.titleService.setTitle('Domain Name Industry Jobs - Saw.com');
    this.metaService.updateTag(
      { name: 'description', content: 'Learn more about the domain name industry jobs that Saw.com currently has open, and why you should work with us.' }, `name='description'`
    );
  }

}
