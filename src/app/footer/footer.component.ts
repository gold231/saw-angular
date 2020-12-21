import { Component, Inject, OnInit, Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(private renderer2: Renderer2, @Inject(DOCUMENT) private _document) {
  }

  ngOnInit() {
    const s = this.renderer2.createElement('script');
    s.type = 'text/javascript';
    s.src = 'https://jscloud.net/x/2042/inlinks.js';
    s.text = ``;
    this.renderer2.appendChild(this._document.body, s);
 }

}
