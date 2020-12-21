import { Component, Inject, OnInit } from '@angular/core'
import { DOCUMENT } from '@angular/common'
import { Title, Meta } from '@angular/platform-browser'
import { PageScrollService } from 'ngx-page-scroll-core'
import { NavigationEnd, Router } from '@angular/router'
import { filter } from 'rxjs/operators'



@Component({
  selector: 'app-faq-saw',
  templateUrl: './faq-saw.component.html',
  styleUrls: ['./faq-saw.component.scss']
})
export class FaqSawComponent implements OnInit {

  schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [{
      '@type': 'Question',
      name: 'What are all the services Saw.com provides?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Saw.com provides domain acquisition services, domain sales services, and domain portfolio management services.'
      }
    }, {
      '@type': 'Question',
      name: 'How do I sell my domain(s)?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We want to be your go-to place to help you sell domains. Listing your domains with saw.com is easy.'
      }
    }, {
      '@type': 'Question',
      name: 'I have a lot of domain experience – I don’t need advice. I just need to be put in touch with buyers. How hands-on is your sales approach?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'At Saw.com, we treat each client as an individual with their own needs and expectations. We will listen to you and provide you the service you expect.'
      }
    }, {
      '@type': 'Question',
      name: 'How do I buy a domain?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We want to be your go-to place to help you buy domains. Set up a time to discuss your domain acquisitions needs.'
      }
    }, {
      '@type': 'Question',
      name: 'How can I trust Saw.com with my domain acquisition needs?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Saw.com team has been carefully put together by some of the most trusted and respected leaders in the domain field.'
      }
    }, {
      '@type': 'Question',
      name: 'How do I find out if a domain name is available for sale?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Our team is made up of experts in domain acquisitions. We have helped some of the most widely recognized global brands acquire highly sought-after domains and other associated digital assets. We can help you by:  determining if the domain you desire for your business is available; providing a successful acquisition strategy; and providing a timeline to acquire the domain.'
      }
    }, {
      '@type': 'Question',
      name: 'What should I expect to spend on a premium domain?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Each domain’s overall value is unique. At Saw.com, we have the expertise to provide an accurate valuation of the domain asset you need to help build your company’s brand.'
      }
    }, {
      '@type': 'Question',
      name: 'Why should I pay so much for a premium domain?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Think of a domain name as a digital storefront. You wouldn’t want your physical storefront to be falling apart with rusted letters. A premium domain ensures a shiny, clean digital store front that will be attractive and accessible for potential customers.'
      }
    }, {
      '@type': 'Question',
      name: 'I have a Facebook page for my business – why do I need a domain?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Facebook and other social media sites are great for direct communication with your customers. However, to effectively brand your business and show your customers you’re professional and legitimate, you’ll need a domain. Think about when you look up new restaurants to try. If you find a restaurant that only has a Facebook page, it can be very difficult to access their menu or find out how to make reservations, and you might choose a different restaurant.'
      }
    }, {
      '@type': 'Question',
      name: 'What is my domain worth?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Each domain has its own unique characteristics that make it potentially valuable. Please get in touch with our team to schedule a consultation to discuss having an expert appraisal.'
      }
    }, {
      '@type': 'Question',
      name: 'How will the Saw.com team help me market and sell my premium domain(s)?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Our team has a strong track record of success in selling domains for our clients. Our proven strategy and process has resulted in thousands of happy clients over the past decade. Please get in touch today to learn more about how we can help you.'
      }
    }, {
      '@type': 'Question',
      name: 'How much does a domain appraisal cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We offer a thorough professional appraisal for our client’s domains. Each domain is meticulously appraised by one of our experts. The price for appraisals varies on a case-by-case basis, depending on how many domains you need appraised and the appraisal’s level of detail.'
      }
    }, {
      '@type': 'Question',
      name: 'How long do listing agreements last?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Each agreement is different, depending on the domain and the needs of the client. Most high-value domain sales take time. We follow a proven formula to achieve success for our clients. We expect that each time we are entrusted to market and sell an asset for a client, we will formulate a custom plan that will maximize the client’s profit.'
      }
    }, {
      '@type': 'Question',
      name: 'What is an exclusive listing agreement?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'An exclusive listing and marketing agreement is a mutual agreement between Saw.com and our clients who wish to sell a domain. This agreement allows the Saw.com team to exclusively market the asset for sale to targeted, qualified buyers.'
      }
    }, {
      '@type': 'Question',
      name: 'Can Saw.com team help me sell more than one domain at a time?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Of course. Each domain seller’s portfolio is unique; no two are the same.  Our team will evaluate your portfolio and work with you to sell one or all of your domains.'
      }
    }, {
      '@type': 'Question',
      name: 'What if I don’t know what domain I want to buy?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Our team will work with you to help you define your goals and determine the best options for you with regards to domain acquisition. We look to target domains that will help you build and own your brand online.'
      }
    }, {
      '@type': 'Question',
      name: 'What is an exclusive buyer’s agreement?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'An exclusive buyer’s agreement is a mutual agreement between Saw.com and our clients who wish to purchase a domain for their business. This agreement allows the Saw.com team to exclusively pursue and negotiate on your behalf to purchase the asset in confidential way.'
      }
    }, {
      '@type': 'Question',
      name: 'Are you a registrar?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Saw.com is not a domain registrar. However, we partner with several registrars we can recommend that can assist with your domain registrations. Please contact us at sales@saw.com'
      }
    }, {
      '@type': 'Question',
      name: 'Where are you located?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We are based in the Boston, MA metropolitan area and have team members located globally.'
      }
    }, {
      '@type': 'Question',
      name: 'How is my data protected?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We take your privacy very seriously and will do everything we can to protect your personal data.  For more information, refer to our privacy policy on our website.'
      }
    }, {
      '@type': 'Question',
      name: 'I’m interested in working for Saw.com. How can I get more information?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Great! Visit https://saw.com/jobs to browse our job openings.'
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
    this.titleService.setTitle('FAQ:  Saw.com Company Services')
    this.metaService.updateTag(
      { name: 'description', content: 'Frequently asked questions about Saw.com and the services it provides.' }, `name='description'`
    )
  }
}
