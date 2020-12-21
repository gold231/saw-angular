import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.scss']
})
export class BuyComponent implements OnInit {
  
  closeResult = '';

  Faqs: Array<any> = [
    {
      question: 'Why should I use a Domain Buy Service?',
      answer: 'Acquiring skills such as those professional domain name brokers possess is anything but easy, nor would the investment of time/resources required to reach that goal make sense for one-off purchases. Instead, outsourcing a highly sensitive process to experts who earn a living by leveraging precisely those skills represents the rational approach.'
    },
    {
      question: 'What are the benefits of owning a premium exact match domain?',
      answer: 'There are two main dimensions involved. On the one hand, the ultra-descriptive nature of exact match domains will enable you to avoid confusion, arguably the number one enemy of sales. On the other hand, exact match domain names have proven benefits concerning SEO and might provide the edge your website needs to be on the receiving end of organic search engine traffic.'
    },
    {
      question: 'How do I pick the best domain for my business?',
      answer: 'It is essential to understand that picking the best possible domain name for your needs is easier said than done. For example, how memorable is the domain you have in mind, and does it pass the so-called radio test? What (if any) SEO benefits does it put on the table? Does it have a questionable past, and if so, might it come back to haunt you as the new owner? These are just a few dilemmas that make it clear that seeking the help of professional domain name brokers who specialize in helping buyers gain much-needed clarity is the way to go.'
    },
    {
      question: 'What will the domain I want to buy cost?',
      answer: 'Our experts will do their best to ensure that buyers pay the lowest possible price for the assets they have in mind. However, in 2020 and beyond, it is vital to understand that the best of the best in terms of digital assets will not be cheap. After all, because we are dealing with the foundation of your online presence, settling for “bargains” can end up costing quite a bit more in the long run than buyers anticipate. Why take that chance?'
    },
    {
      question: 'Why should I hire Saw.com to acquire a domain on my behalf?',
      answer: 'Saw.com is a boutique domain brokerage firm that buys, sells, and protects domain names on behalf of clients. At Saw.com, we love domains, and each of us averages just under ten years of industry experience. Being a small business, you can rest assured that each client, acquisition, and opportunity matters. We like to have our first contact be either a video or phone call; we genuinely believe that getting to know each client is the optimal approach. In a nutshell, you matter!'
    },
  ];

  constructor(
    private titleService: Title, 
    private metaService: Meta,
    private modalService: NgbModal
  ) { }

  ngOnInit() {
    this.titleService.setTitle('Buy a Domain Name - Saw.com');
    this.metaService.updateTag(
      { name: 'description', content: 'Whether you’re starting a business, launching new products, or rebranding, let Saw.com help you find the perfect domain name.' }, `name='description'`
    );
  }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  readMore(step) {
    this.modalService.open(step, {ariaLabelledBy: 'modal-basic-title', windowClass : "step"}).result.then((result) => {
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

  openContent(key) {
    if (document.getElementById(`List-${key}`).style.display == "block") {
      document.getElementById(`List-${key}`).style.display = "none";
      document.getElementById(`Faq-${key}`).classList.remove("list-background");
    } else {
      document.getElementById(`List-${key}`).style.display = "block";
      document.getElementById(`Faq-${key}`).classList.add("list-background");
      for (let i=0; i<this.Faqs.length; i++) {
        if (key != i) {
          document.getElementById(`List-${i}`).style.display = "none";
          document.getElementById(`Faq-${i}`).classList.remove("list-background");
        }
      }
    }
  }
  
}
