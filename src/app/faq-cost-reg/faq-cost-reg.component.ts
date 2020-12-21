import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core'
import { DOCUMENT } from '@angular/common'
import { Title, Meta } from '@angular/platform-browser'
import { PageScrollService } from 'ngx-page-scroll-core'
import { NavigationEnd, Router } from '@angular/router'
import { filter } from 'rxjs/operators'

@Component({
  selector: 'app-faq-cost-reg',
  templateUrl: './faq-cost-reg.component.html',
  styleUrls: ['./faq-cost-reg.component.scss']
})
export class FaqCostRegComponent implements OnInit {

  schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [{
      '@type': 'Question',
      name: 'Where is the best place to buy a domain name?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: `This is an obvious answer! Saw.com is the best place to purchase any domain. Why is that? We have a considerable amount of experience, knowledge and relationships coupled
        with the most cutting edge technology available today.`
      }
    }, {
      '@type': 'Question',
      name: 'How much is a domain name?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: `Domain prices vary depending on many factors similar to real-estate. The most valuable ones are already registered. The most inexpensive domains available are those that
        are unregistered. A .COM, .NET, .ORG will cost anywhere from ten to twenty dollars per year to register. There are many other extensions which can cost thousands of dollars to
        register each year. At a maximum, domains have sold for as much as millions of dollars. Keep in mind that, no matter how expensive a domain is upfront, you will have to pay
        yearly registration fees to keep it registered. For more information on the factors that determine a domain’s price, click here.`
      }
    }, {
      '@type': 'Question',
      name: 'How do I know how much a domain should cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: `There are many factors that determine a domain’s price. However, the domain industry is constantly changing and it’s quite difficult to accurately appraise a domain
         without the knowledge and expertise gained from decades of experience in the industry.  That is where we can help. To learn about our professional appraisal services, click here.`
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
      name: 'Which domain extension is best?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: `Because business needs differ, it’s impossible to say which domain extension is “best”. It depends on what is best for your specific business needs.
        With that said, if your goal is to reach as many customers as you can, you can’t go wrong with .com, the most popular top-level domain (TLD). For more information
        about the different domain extensions, click here.`
      }
    }, {
      '@type': 'Question',
      name: 'Do .orgs have to be non-profit?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: `No. .Org domain names are not legally required to be non-profit. This is a common misconception, as anyone can register a .org domain. However,
        most .orgs are owned by nonprofits, non-governmental organizations, or schools.`
      }
    }, {
      '@type': 'Question',
      name: 'How many top-level domains are there?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'There are over 1,000 top-level domains in existence, from .aaa to .zw. For a list of every top-level domain, click here.'
      }
    }, {
      '@type': 'Question',
      name: 'Who sets domain name prices?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: `Think of domain sales as two distinct categories. The first is the domain registration fee that needs to be paid once a year for every domain.
        This price varies by extension and registrar but is generally between $10 - $20. Much of the price that registrars charge goes directly to the registry
        that manages the domain name. For example, Verisign currently charges $7.85 per .com domain name per year. The Internet Corporation for Assigned Names
        and Numbers (ICANN) set limits on how much domain registries can charge for each domain name. The second is the price you pay for a domain that is already
        registered. For example, if you search for a domain and it is already registered or unavailable, you will need to make an offer to the owner of the domain.
        This price is not controlled by anyone – it is dictated by supply and demand. People pay high prices for things that they perceive to be valuable. That is
         how we end up with multimillion-dollar domain sales. For more information on the relationship between registries and registrars, click here.`
      }
    }]
  }

  @ViewChild('scrollFrame', { static: true }) scrollFrame: ElementRef

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
    this.titleService.setTitle('FAQ:  Domain Name Cost and Registration')
    this.metaService.updateTag(
      { name: 'description', content: 'Frequently asked questions about Domain Name Cost and Registration.' }, `name='description'`
    )
  }
}
