import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-adult-block',
  templateUrl: './adult-block.component.html',
  styleUrls: ['./adult-block.component.scss']
})
export class AdultBlockComponent implements OnInit {

  closeResult = '';

  Faqs: Array<any> = [
    {
      question: 'Who is Saw.com?',
      answer: 'Saw.com is a domain name reseller, domain broker, and brand protection advisor that offers a highly personalized quality service.'
    },
    {
      question: 'What is their relationship with MMX and the ICM Registry?',
      answer: 'Saw.com is an approved AdultBlock Reseller offering the AdultBlock and AdultBlock+ products at highly competitive rates to end-users and intermediaries such as law firms.'
    },
    {
      question: 'Why would I purchase the Adult Block from Saw.com when I can buy it from my current registrar?',
      answer: 'Saw.com offers AdultBlock and AdultBlock+ at highly competitive rates to end-users and intermediaries such as law firms. We make the purchase process for AdultBlock cost-effective and straightforward. Once the process is complete, the AdultBlock is transferrable to your preferred registrar! - so why not?'
    },
    {
      question: 'What Top-Level Domains (TLDs) does the AdultBlock service cover?',
      answer: 'The service covers each ICM Registry TLD – dotXXX, dotSEX, dotADULT and dotPORN.'
    },
    {
      question: 'Who is eligible to purchase AdultBlock?',
      answer: 'Current dotXXX Sunrise B participants are eligible in addition to trademark holders with a valid Signed Mark Data (SMD) file issued by the Trademark Clearinghouse (TMCH).'
    },
  ];

  MoreFaqs: Array<any> = [
    {
      question: 'What are dotXXX Sunrise B blocks?',
      answer: 'The Sunrise B Block is a blocking service that protects trademarks from being registered with the dotXXX TLD. In 2021, Sunrise B will expire and be replaced by AdultBlock and AdultBlock+. Sunrise B subscribers will transfer their trademark to the new AdultBlock service, which expands protection to dotSEX, dotADULT, and dotPORN in addition to dotXXX.'
    },
    {
      question: 'What happens if I delete my Sunrise B registration?',
      answer: 'If the Sunrise B registration is deleted, the domain will become available to anyone on a first-come, first-serve basis upon completing the grace period beginning December 2021. Contact us today to register for AdultBlock.'
    },
    {
      question: 'What is the Trademark Clearinghouse?',
      answer: 'The Trademark Clearinghouse is a database of validated and registered trademarks established by ICANN to prevent copyright infringement in the domain name system.'
    },
    {
      question: 'How can I check whether I own a valid trademark with an SMD file?',
      answer: 'Contact your TMCH agent to obtain a list of everything you have registered in the TMCH database.'
    },
    {
      question: 'I cannot recall which registrar I used for my dotXXX registrations. What dotXXX Sunrise B Blocks do I own?',
      answer: 'One of our Account Managers would be happy to find that out for you. Please complete our contact form, and tell us the domain name, the company you represent, and your contact details.'
    },
    {
      question: "I've changed my registrar since my dotXXX Sunrise B's were registered, what can I do?",
      answer: 'You may transfer your eligible Sunrise B dotXXX domain(s) to AdultBlock coverage at Saw.com. Please contact us for more details.'
    },
    {
      question: 'Where can I view the labels covered by the service?',
      answer: 'Saw.com offers a free variant and label audit. Contact us today to take advantage of it.'
    },
    {
      question: 'Does the service include premium domains?',
      answer: 'Yes, AdultBlock blocks all corresponding domains regardless of price. It also automatically blocks expired names while the block service is in place.'
    },
    {
      question: 'Will currently registered domains be blocked?',
      answer: 'No, domains that are currently registered cannot be blocked. However, once the name expires, the AdultBlock service will automatically block the domain.'
    },
    {
      question: 'Can someone else block my trademark or rights?',
      answer: 'No, only trademark holders with a valid SMD file issued by the TMCH or an original Sunrise B dotXXX can apply for the AdultBlock service.'
    },
    {
      question: 'Can I unblock a domain for use?',
      answer: 'No, the AdultBlock service does not allow the domain name to be unblocked.'
    },
    {
      question: 'What IDN characters are part of the AdultBlock+ service?',
      answer: 'The variant generation software is based on Unicode Consortium standards. This means that the service blocks characters available today and any future language character sets that become available in the ICM Registry TLDs.'
    },
    {
      question: 'Does AdultBlock+ block any other confusingly similar characters?',
      answer: "Yes, the service will block other confusingly similar characters such as replacing an 'I' with a '1' or an 'E' with a '3'."
    },
    {
      question: 'What are the fees associated with auto-renewal?',
      answer: 'Please contact us for pricing.'
    },
    {
      question: 'Why does ICM Registry need to re-validate my rights in 2021?',
      answer: 'The Sunrise B product was based on rights validated in 2011. Sunrise B rights will be grandfathered into the AdultBlock product. However, once expired, Sunrise B registrants will need to re-validate their marks.'
    },
    {
      question: 'How will the re-validation process work?',
      answer: 'A Validation Agent will review the rights used in the 2011 Sunrise B submission to ensure they satisfy the current AdultBlock requirements, which are based on the existing TMCH rules. If the rights are valid, the conversion to AdultBlock will be completed. If the rights are no longer valid, the Validation Agent will work with the accredited agent to meet the requirements. The domain will be available during this process if it is not completed before the grace period. The re-validation fee is non-refundable.'
    },
    {
      question: 'How do I avoid the re-verification of my rights and the costs associated?',
      answer: 'Contact us today to convert your Sunrise B registration to the AdultBlock service to avoid re-validation.'
    },
    {
      question: 'How do I transfer my Sunrise B registration to a different agent before converting it to AdultBlock?',
      answer: 'The transfer of Sunrise B registrations will soon be available. Please contact us to arrange a transfer once the functionality becomes available.'
    },
    {
      question: 'The information I used to create my Sunrise B registration is no longer correct, how can I update it?',
      answer: 'Sunrise B registration information will soon be available in the registry system and to your current accredited registrar, who will update your registration data. This functionality will become available later in 2020.'
    },
    {
      question: 'How do I convert my Sunrise B registration to a standard domain registration?',
      answer: 'Sunrise B registrations cannot be converted to a standard domain. Registrants will need to either convert to AdultBlock or attempt to register the domain when it expires on a first-come, first-served basis in December 2021.'
    },
    {
      question: 'How long is the AdultBlock Service coverage period?',
      answer: 'AdultBlock is available in 1, 3, 5, and 10-year registration periods. Once the registration period is over, you will have the option to renew.'
    },
    {
      question: 'Can I transfer my AdultBlock to a different registrar?',
      answer: 'Yes, registrants may transfer the AdultBlock service between registrars as they choose. Registrants can benefit from our competitive pricing then transfer the block to their preferred registrar.'
    },
    {
      question: 'Do I need to renew my TMCH SMD file?',
      answer: "The ICM Registry will check the SMD file's validity at regular intervals during the AdultBlock service period. Registrants are responsible for ensuring the SMD file remains valid."
    },
    {
      question: 'Is there a limit on the protection of variants in the SMD file?',
      answer: 'The AdultBlock+ product will block all variants in the SMD file.'
    },
    {
      question: 'What information will I see in the WHOIS for blocked domains?',
      answer: 'All blocked domains will include the following message in the WHOIS database, "This name subscribes to the AdultBlock+ product; therefore, this name is not available for registration."'
    },
    {
      question: 'Where can I purchase AdultBlock?',
      answer: 'The AdultBlock service is available through Saw.com. <a href="/contact-us-adult-block" class="text-secondary">Click here</a> to speak to one of our Account Managers today.'
    }
  ];

  constructor(
    private titleService: Title, 
    private metaService: Meta,
    private modalService: NgbModal,
  ) { }

  scrollToElement($element): void {
    console.log($element);
    $element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }

  ngOnInit() {
    this.titleService.setTitle('AdultBLock Service - Saw.com');
    this.metaService.updateTag(
      { name: 'description', content: 'Protect Your Business - If you hold a trademark on your domain name or are a Sunrise B registrant, the AdultBlock service will block registrations for your name across all four adult-themed TLDs – dotXXX, dotSEX, dotADULT, and dotPORN.' }, `name='description'`
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
      for (let j=0; j<this.MoreFaqs.length; j++) {
        document.getElementById(`MoreList-${j}`).style.display = "none";
        document.getElementById(`MoreFaq-${j}`).classList.remove("list-background");
      }
    }
  }

  openMore(key) {
    if (document.getElementById(`MoreList-${key}`).style.display == "block") {
      document.getElementById(`MoreList-${key}`).style.display = "none";
      document.getElementById(`MoreFaq-${key}`).classList.remove("list-background");
    } else {
      document.getElementById(`MoreList-${key}`).style.display = "block";
      document.getElementById(`MoreFaq-${key}`).classList.add("list-background");
      for (let i=0; i<this.MoreFaqs.length; i++) {
        if (key != i) {
          document.getElementById(`MoreList-${i}`).style.display = "none";
          document.getElementById(`MoreFaq-${i}`).classList.remove("list-background");
        }
      }      
      for (let j=0; j<this.Faqs.length; j++) {
        document.getElementById(`List-${j}`).style.display = "none";
        document.getElementById(`Faq-${j}`).classList.remove("list-background");
      }
    }
  }

  isShown: boolean = false ; // hidden by default

  toggleShow() {
    this.isShown = ! this.isShown;
  }

}
