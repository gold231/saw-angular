import { Component, Inject, OnInit, NgModule } from '@angular/core'
import { DOCUMENT } from '@angular/common'
import { Title, Meta } from '@angular/platform-browser'
import { PageScrollService } from 'ngx-page-scroll-core'
import { NavigationEnd, Router } from '@angular/router'
import { filter } from 'rxjs/operators'

@Component({
  selector: 'app-faq-domain-ownership',
  templateUrl: './faq-domain-ownership.component.html',
  styleUrls: ['./faq-domain-ownership.component.scss']
})
export class FaqDomainOwnershipComponent implements OnInit {

  schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [{
      '@type': 'Question',
      name: 'Do I need domain privacy?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: `Most domain registrars (GoDaddy, Network Solutions, etc.) offer domain privacy service or ‘whois protection’ as an add-on to hosting service.
        Typically for a monthly fee for as much as $10, or per year the service replaces the user’s personal information used to register the domain in the Whois
        database with anonymized information. For example, it replaces your name and email with the information of the hosting service done through a proxy server.
        Domain privacy protects against your personal information being used for fraudulent purposes, ranging from phishing attacks, cyberstalking, to identity theft.
        In the digital world, personal data is a hugely valuable commodity; a commodity we should not allow in the wrong hands. Domain privacy is a small price to pay
        (some privacy services are even free) for peace of mind. The poor man’s version of privacy is to put a free email address for nothing but your whois information
        and keep in mind that your registrar is really the only entity you need to respond to there no matter what people say unless it is a legal matter.`
      }
    }, {
      '@type': 'Question',
      name: 'When you buy a domain is it yours forever?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: `No. When you “buy” a domain you are essentially paying a domain registry for the rights to register and use the domain for one year. However,
        some domain extensions can be registered for up to ten years without the need to renew each year.`
      }
    }, {
      '@type': 'Question',
      name: 'Can someone steal your domain name',
      acceptedAnswer: {
        '@type': 'Answer',
        text: `Yes. This is known as domain hijacking. Domain names can be stolen just like any other form of property.
                Domain thieves steal domain names by gaining access into the account that is used to manage the domain registration.
                Usually this is done by hacking into the email address of record for the domain (remember, you can hide your email
                address of record by using a Whois privacy service). Once they have access to your account, they can transfer the registration of the domain without your consent.`
      }
    }, {
      '@type': 'Question',
      name: 'Can I buy a domain and just let it sit there',
      acceptedAnswer: {
        '@type': 'Answer',
        text: `Yes. You can buy and register a domain name without creating a website or hosting it. There are a handful of reasons someone might register a domain without building a website.
                For example a startup might register multiple potential domain names if they’re still in the planning phase and haven’t settled on a name. They might have a lot of options and
                want to “reserve” all of their options. Then, once a name is decided, they could sell the domains they had been holding onto.`
      }
    }, {
      '@type': 'Question',
      name: 'What are the most expensive domain names?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: `Many domain sales are not reported publicly, so we can’t say with 100% the highest sales ever made. However, most agree with a handful of the highest
        sales ever reported, and they’re in the tens of millions. For example, Voice.com sold in 2019 for $30 million, while our Co-founder sold Sex.com for 13,000,000 USD.
        Do you have a multi-million-dollar domain in your back pocket? Find out today with our domain appraisal service. With decades of experience brokering multimillion-dollar
        domains, we provide accurate and complete domain price estimates for a single domain or your whole portfolio.`
      }
    }, {
      '@type': 'Question',
      name: 'Why do I have to pay each year to keep my domain name?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: `The annual fee you pay a registrar for your registration keeps your domain “active” on the Internet. Instead of owning a physical object that you keep permanently,
        owning a domain is more like “renting” the rights to use that domain.
        Domain registration fees depend on the registrar, but most run from between $10 to $20 per year. The registration fees go to the registrar, registry and ICANN.  If
        you are unhappy with the price of your service of your current registrar, you can always transfer your registration to a different registrar. There are thousands!`
      }
    }, {
      '@type': 'Question',
      name: 'Does it matter where I purchase my domain?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: `Registrars each offer the same basic service – administering domain registration between ICANN and its customers. However, each registrar offers unique service
        features such as added security, Whois privacy, custom email, customer support, reminder emails, etc.`
      }
    }, {
      '@type': 'Question',
      name: 'What is domain buy service?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: `Domain buy service is also known as domain broker service or domain acquisition service. If you want to buy a domain name but it is already registered,
        one of our Sales Consultants can work to acquire the domain for you at a reasonable price. Our team does all the heavy lifting and dirty work to find the owner
        and negotiate a great deal on your behalf. Set up a time to discuss your domain acquisition needs here.`
      }
    }, {
      '@type': 'Question',
      name: 'What is domain squatting?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: `Domain squatting is when someone buys a domain name to prevent a legitimate business from registering it and profit from reselling it. For example,
        a domain squatter might search local business license records, find one that hasn’t yet registered their business name as a domain, and snatch up the name
        for cheap. Then, they’ll contact that business to sell them the name. Usually businesses are willing to pay the price instead of going to court or changing their name.
        In most states and countries, domain squatting is illegal. It all comes down to intent. If the purchase was made in “bad faith,” then it’s considered domain squatting.
        The problem is that is can be very difficult to prove bad faith. Let us be clear, a domain owner that registered or purchased the domain name your company happens
        to want years before your company was founded is not a squatter. To protect yourself from domain squatters, make sure to register your domain as soon as possible,
        register similar names with multiple extensions, and register a trademark for your name. We might also suggest you register common typos of your domain name and
        forward them to that domain. This is actually another service we offer which is called Brand Protection. Please click here to speak to a Sales Consultant about our
        Brand Protection services.`
      }
    }]
  }

  constructor(
    private titleService: Title,
    private metaService: Meta,
    private pageScrollService: PageScrollService,
    private router: Router,
    @Inject(DOCUMENT) private document: any
  ) {
    router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      if (event.url.includes('#')) {
        const currentId = event.url.split('#')[1]
        const targetElement = document.getElementById(currentId)
        targetElement.scrollIntoView(true)
        const scrollContainer = document.getElementsByTagName('html')[0]

        scrollContainer.scroll({
          top: scrollContainer.scrollTop - 100
        })
      }
    })
  }

  ngOnInit() {
    this.titleService.setTitle('FAQ:  Domain Name Ownership')
    this.metaService.updateTag(
      { name: 'description', content: 'Frequently asked questions about Domain Name Ownership.' }, `name='description'`
    )
  }
}
