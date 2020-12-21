import { Component, Inject, OnInit } from '@angular/core'
import { DOCUMENT } from '@angular/common'
import { Title, Meta } from '@angular/platform-browser'
import { PageScrollService } from 'ngx-page-scroll-core'
import { NavigationEnd, Router } from '@angular/router'
import { filter } from 'rxjs/operators'

@Component({
  selector: 'app-faq-sites-domains',
  templateUrl: './faq-sites-domains.component.html',
  styleUrls: ['./faq-sites-domains.component.scss']
})
export class FaqSitesDomainsComponent implements OnInit {

  schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [{
      '@type': 'Question',
      name: 'What is the difference between a website and a domain name?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A website is a collection of webpages on the Internet that contain content. A domain name is essentially the virtual address or location of a website. An easy way to think of the relationship is to think of a domain name like a piece of real estate property and to think of a website like a business that operates on the property. Just like in real estate, a domain can lie vacant just like a property. Or it can be occupied by a website. And just as a business needs a physical property in order to operate, a website needs a domain name in order to operate. A domain name can exist without a website, but a website cannot exist without a domain name.'
      }
    }, {
      '@type': 'Question',
      name: 'Why do I need a domain for my company?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'There are many benefits to having your own domain name for your business. If you plan on having any presence online, you should invest in a domain name. First and foremost, a domain allows for much more control over your online presence than any social media platform can offer. With a domain, you control branding, look and feel, search engine positioning, etc. All of this control makes it easier for reach potential customers. The most important part of having your own website instead of relying on a 3rd party is you own the content. When you post to a social media site you give them ownership of it. That means you could lose access to it without notice. For more information on the benefits of owning a domain, click here.'
      }
    }, {
      '@type': 'Question',
      name: 'Do I need a domain to have a website?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: `To put it simply – yes, you need a domain name to have a website. You can build a website, but unless that website is connected to a domain name, no one on the Internet will be able to access the site. The domain name is essentially the website’s virtual location. Without a domain name, the website cannot “exist” anywhere on the Internet.
        You can build a website using a service such as Wix or WordPress, but unless you pay to register your own domain, you have to use the Wix or WordPress domain at the end of your site’s URL.  We do not suggest you do that for multiple reasons.
        #1: You might not own the registration of the domain. If you become reliant to that domain a third party could raise your renewals or keep your content. It is not a great position to be in.
        #2: Having a long or cheap looking domain does not sit well with clients. It would be better to register a .COM, .CO, .NET, or .INC for example and own it outright for a mere 10-20 dollars a year.`
      }
    }, {
      '@type': 'Question',
      name: 'Can I host my own domain, or do I need a domain hosting service?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. It is possible to host your own domain. However, unless you are technically inclined and want to spend unnecessary time and effort, we recommend using a hosting service. Hosting your own domain is a complicated, multi-step process that will yield a more expensive, sub-standard product compared to what you will get with a hosting service.  Put another way, hosting your own website is a bit like making your own puff pastry from scratch instead of using store-bought. Unless you’re a professional pastry chef, you’re going to spend a lot of time and effort on a pastry that probably won’t even taste as good as something made with inexpensive store-bought puff pastry.'
      }
    }, {
      '@type': 'Question',
      name: 'What is SEO and why should I care?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'SEO stands for Search Engine Optimization. Before diving into SEO, we need to talk about search engines. All major search engines like Google and Bing rank search results based on what the search engine decides is most relevant for each user. Think of search engines like extremely sophisticated librarians. They are able to sift through millions and millions of pages of information to provide useful and relevant information to its users.  They “decide” what is relevant through an algorithm that sifts through the information based on key words.   If you have a website and wish to reach as many customers as possible, search engine results are crucial. The higher your website is ranked on Google searches relevant to your industry, to more web traffic you will receive from potential customers. This is where Search Engine Optimization (SEO) comes in. Essentially, SEO involves developing content that is relevant to your industry that will work with the search engine algorithm to produce higher search results.'
      }
    }, {
      '@type': 'Question',
      name: 'What is the best type of domain for SEO?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: `One key to maximizing Search Engine Optimization (SEO) lies in your domain name. Keep the following SEO tips in mind for domain names:
        •	If your budget allows, stick to .com top-level domains – they generate the most credibility of all top-level domains.
        •	Keep your name short and memorable. Search engines use accessibility as a ranking factor, so the easier your domain name is for humans to read and understand, the higher search engines will rank your site.
        •	Avoid hyphens, numbers, non-standard characters, etc. Domains like balloons-direct543.biz come across as unprofessional and will be less likely to be ranked on search engines.`
      }
    }, {
      '@type': 'Question',
      name: 'What domain strategy is best for business?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'As mentioned in many questions before one can register a domain name for as little as 10 to 20 dollars per year. When it comes to the most common extensions the best domain names are taken. Hand registering a domain for your product or company name strategically does not make sense. Why is that? This domain is your online identity, it is your brand, and it is what you are relying on to bring you new and repeat customers. Since most of the most premium and memorable domains are already taken you will be forced to register a very long domain or one with hyphens. Both options are easily misspelled or forgettable. A bare minimum of 2,000 USD should be spent on your domain if you are serious about your business. Please call us today for a free consultation. We will give you some choices that make sense for your businesses fast! Contact us here!!'
      }
    }, {
      '@type': 'Question',
      name: 'Can I own a domain with a website builder like Wix or Wordpress?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Most website builders like Wix or Wordpress offer domain purchasing and hosting services. A service they can provide is an “all-in-one” service where you can purchase a domain, build a website, and host the website all using one platform.'
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
    this.titleService.setTitle('FAQ:  Websites and Domain Names')
    this.metaService.updateTag(
      { name: 'description', content: 'Frequently asked questions about Website and Domain Names.' }, `name='description'`
    )
  }
}
