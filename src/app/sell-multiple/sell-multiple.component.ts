import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-sell-multiple',
  templateUrl: './sell-multiple.component.html',
  styleUrls: ['./sell-multiple.component.scss']
})
export class SellMultipleComponent implements OnInit {

  closeResult = '';

  constructor(
    private titleService: Title, 
    private metaService: Meta,
    private modalService: NgbModal
  ) { }

  ngOnInit() {
    this.titleService.setTitle('Sell Multiple Domain Names');
    this.metaService.updateTag(
      { name: 'description', content: 'If you own dozens, hundreds, or thousands of valuable domain names, learn how Saw.com can work with you to find the best deal to suit your needs.' }, `name='description'`
    );
  }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

}
