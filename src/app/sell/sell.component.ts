import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.scss']
})
export class SellComponent implements OnInit {

  closeResult = '';

  constructor(
    private titleService: Title, 
    private metaService: Meta,
    private modalService: NgbModal
  ) { }

  ngOnInit() {
    this.titleService.setTitle('Sell Your Domain Name');
    this.metaService.updateTag(
      { name: 'description', content: 'Learn why you should use the services of a domain name brokerage like Saw.com to sell your domain name.' }, `name='description'`
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
