import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-appraisals',
  templateUrl: './appraisals.component.html',
  styleUrls: ['./appraisals.component.scss']
})
export class AppraisalsComponent implements OnInit {

  closeResult = '';

  constructor(
    private titleService: Title, 
    private metaService: Meta,
    private modalService: NgbModal
  ) { }

  ngOnInit() {
    this.titleService.setTitle('Domain Name Appraisals - Saw.com');
    this.metaService.updateTag(
      { name: 'description', content: 'At Saw.com, we provide customized, secure, domain name appraisal services. After selling $400 million worth of domain names, we\'ve learned the ins and outs of domain appraisals.' }, `name='description'`
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
