import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

import { AboutComponent } from './about/about.component';
import { AdultBlockComponent } from './adult-block/adult-block.component';
import { AppraisalsComponent } from './appraisals/appraisals.component';
import { BuyComponent } from './buy/buy.component';
import { SellComponent } from './sell/sell.component';
import { SellMultipleComponent } from './sell-multiple/sell-multiple.component';
import { JobsComponent } from './jobs/jobs.component';
import { ContactThankYouComponent } from './contact-thank-you/contact-thank-you.component';
import { ContactThankYouAdultBlockComponent } from './contact-thank-you-adult-block/contact-thank-you-adult-block.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ContactUsAdultBlockComponent } from './contact-us-adult-block/contact-us-adult-block.component';
import { FaqComponent } from './faq/faq.component';
import { FaqDomainOwnershipComponent } from './faq-domain-ownership/faq-domain-ownership.component';
import { FaqSitesDomainsComponent } from './faq-sites-domains/faq-sites-domains.component';
import { FaqCostRegComponent } from './faq-cost-reg/faq-cost-reg.component';
import { FaqSawComponent } from './faq-saw/faq-saw.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { ResourcesComponent } from './resources/resources.component';
import { ResourcesWhatComponent } from './resources/resources-what/resources-what.component';
import { ResourcesWhyComponent } from './resources/resources-why/resources-why.component';
import { ResourcesWhatsinComponent } from './resources/resources-whatsin/resources-whatsin.component';
import { ResourcesGvnsgComponent } from './resources/resources-gvnsg/resources-gvnsg.component';
import { ResourcesBuyBasicsHowComponent } from './resources/resources-buy-basics-how/resources-buy-basics-how.component';
import { ResourcesBuyBasicsRegComponent } from './resources/resources-buy-basics-reg/resources-buy-basics-reg.component';
import { ResourcesBuyBasicsWhatComponent } from './resources/resources-buy-basics-what/resources-buy-basics-what.component';
import { ResourcesBuyAppraisalsHowComponent } from './resources/resources-buy-appraisals-how/resources-buy-appraisals-how.component';
import { ResourcesBuyAppraisalsMetricsComponent } from './resources/resources-buy-appraisals-metrics/resources-buy-appraisals-metrics.component';
import { ResourcesBuyPurchasingWhatComponent } from './resources/resources-buy-purchasing-what/resources-buy-purchasing-what.component';
import { ResourcesBuyPurchasingHowComponent } from './resources/resources-buy-purchasing-how/resources-buy-purchasing-how.component';
import { ResourcesBuyPurchasingConsultComponent } from './resources/resources-buy-purchasing-consult/resources-buy-purchasing-consult.component';
import { ResourcesBuyPurchasingTakenComponent } from './resources/resources-buy-purchasing-taken/resources-buy-purchasing-taken.component'
import { ResourcesMiscFirstOnehundredComponent } from './resources/resources-misc-first-onehundred/resources-misc-first-onehundred.component';
import { ResourcesMiscArchiveDotOrgComponent } from './resources/resources-misc-archive-dot-org/resources-misc-archive-dot-org.component';
import { ResourcesMiscInternetHistoryComponent } from './resources/resources-misc-internet-history/resources-misc-internet-history.component';

import { ServicesContactRouteGuardService } from './services/services-contact-route-guard.service';

const routes: Routes = [
  {path: '', redirectTo: '/', pathMatch: 'full'},
  {path: '', component: HomeComponent },
  {path: 'about', component: AboutComponent },
  {path: 'adult-block', component: AdultBlockComponent },
  {path: 'appraisals', component: AppraisalsComponent },
  {path: 'buy', component: BuyComponent },
  {path: 'contact-thank-you', component: ContactThankYouComponent, canActivate: [ServicesContactRouteGuardService] },
  {path: 'contact-thank-you-adult-block', component: ContactThankYouAdultBlockComponent, canActivate: [ServicesContactRouteGuardService] },
  {path: 'contact-us', component: ContactUsComponent },
  {path: 'contact-us-adult-block', component: ContactUsAdultBlockComponent },  
  {path: 'faq', component: FaqComponent },
  {path: 'faq-domain-ownership', component: FaqDomainOwnershipComponent },
  {path: 'faq-sites-domains', component: FaqSitesDomainsComponent },
  {path: 'faq-cost-reg', component: FaqCostRegComponent },
  {path: 'faq-saw', component: FaqSawComponent },
  {path: 'sell', component: SellComponent },
  {path: 'sell-multiple', component: SellMultipleComponent },
  {path: 'jobs', component: JobsComponent },
  {path: 'privacy-policy', component: PrivacyPolicyComponent },
  {path: 'resources', component: ResourcesComponent},
  {path: 'resources/what', component: ResourcesWhatComponent},
  {path: 'resources/why', component: ResourcesWhyComponent},
  {path: 'resources/buy/basics/how', component: ResourcesBuyBasicsHowComponent},
  {path: 'resources/buy/basics/what', component: ResourcesBuyBasicsWhatComponent},
  {path: 'resources/buy/basics/reg', component: ResourcesBuyBasicsRegComponent},
  {path: 'resources/buy/appraisals/how', component: ResourcesBuyAppraisalsHowComponent},
  {path: 'resources/buy/appraisals/metrics', component: ResourcesBuyAppraisalsMetricsComponent},
  {path: 'resources/buy/purchasing/what', component: ResourcesBuyPurchasingWhatComponent},
  {path: 'resources/buy/purchasing/how', component: ResourcesBuyPurchasingHowComponent},
  {path: 'resources/buy/purchasing/consult', component: ResourcesBuyPurchasingConsultComponent},
  {path: 'resources/buy/purchasing/taken', component: ResourcesBuyPurchasingTakenComponent},
  {path: 'resources/misc/first-100', component: ResourcesMiscFirstOnehundredComponent},
  {path: 'resources/misc/archive-dot-org', component: ResourcesMiscArchiveDotOrgComponent},
  {path: 'resources/misc/internet-history', component: ResourcesMiscInternetHistoryComponent},
  {path: 'resources/whatsin', component: ResourcesWhatsinComponent},
  {path: 'resources/gvnsg', component: ResourcesGvnsgComponent},
  {path: '404', component: NotFoundComponent},
  {path: '**', redirectTo: '404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled', initialNavigation: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
