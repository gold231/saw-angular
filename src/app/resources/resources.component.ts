import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.scss']
})
export class ResourcesComponent implements OnInit {

  constructor(private titleService: Title, private metaService: Meta) { }

  ngOnInit() {
    this.titleService.setTitle('Domain Name Resources - Saw.com');
    this.metaService.updateTag(
      { name: 'description', content: 'At Saw.com, we value transparency. Our domain name experts have created this resource of knowledge to help you understand our end-to-end process and the domain name industry as a whole.' }, `name='description'`
    );
  }

}
