import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {

  constructor(private titleService: Title, private metaService: Meta) { }

  ngOnInit() {
      this.titleService.setTitle('Frequently Asked Questions - Saw.com');
      this.metaService.updateTag(
      { name: 'description', content: 'If you still have questions, we\'re here to help.' }, `name='description'`
    );
  }
}
