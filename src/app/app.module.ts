import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxJsonLdModule } from '@ngx-lite/json-ld';
import { NgxPageScrollCoreModule } from 'ngx-page-scroll-core';
import { NgxPageScrollModule } from 'ngx-page-scroll';
import { RecaptchaV3Module, RECAPTCHA_V3_SITE_KEY } from 'ng-recaptcha';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderMainComponent } from './header-main/header-main.component';
import { FooterComponent } from './footer/footer.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AboutComponent } from './about/about.component';
import { AppraisalsComponent } from './appraisals/appraisals.component';
import { BuyComponent } from './buy/buy.component';
import { SellComponent } from './sell/sell.component';
import { SellMultipleComponent } from './sell-multiple/sell-multiple.component';
import { JobsComponent } from './jobs/jobs.component';
import { ContactThankYouComponent } from './contact-thank-you/contact-thank-you.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ResourcesComponent } from './resources/resources.component';
import { ResourcesWhatComponent } from './resources/resources-what/resources-what.component';
import { ResourcesWhyComponent } from './resources/resources-why/resources-why.component';
import { ResourcesBuyBasicsHowComponent } from './resources/resources-buy-basics-how/resources-buy-basics-how.component';
import { ResourcesBuyBasicsWhatComponent } from './resources/resources-buy-basics-what/resources-buy-basics-what.component';
import { ResourcesBuyBasicsRegComponent } from './resources/resources-buy-basics-reg/resources-buy-basics-reg.component';
import { ResourcesBuyAppraisalsHowComponent } from './resources/resources-buy-appraisals-how/resources-buy-appraisals-how.component';
import { ResourcesBuyAppraisalsMetricsComponent } from './resources/resources-buy-appraisals-metrics/resources-buy-appraisals-metrics.component';
import { ResourcesBuyPurchasingWhatComponent } from './resources/resources-buy-purchasing-what/resources-buy-purchasing-what.component';
import { ResourcesBuyPurchasingHowComponent } from './resources/resources-buy-purchasing-how/resources-buy-purchasing-how.component';
import { ResourcesBuyPurchasingConsultComponent } from './resources/resources-buy-purchasing-consult/resources-buy-purchasing-consult.component';
import { ResourcesMiscFirstOnehundredComponent } from './resources/resources-misc-first-onehundred/resources-misc-first-onehundred.component';
import { ResourcesMiscArchiveDotOrgComponent } from './resources/resources-misc-archive-dot-org/resources-misc-archive-dot-org.component';
import { ResourcesMiscInternetHistoryComponent } from './resources/resources-misc-internet-history/resources-misc-internet-history.component';
import { ResourcesWhatsinComponent } from './resources/resources-whatsin/resources-whatsin.component';
import { ResourcesGvnsgComponent } from './resources/resources-gvnsg/resources-gvnsg.component';
import { HeaderResourcesComponent } from './header-resources/header-resources.component';
import { FaqComponent } from './faq/faq.component';
import { FaqDomainOwnershipComponent } from './faq-domain-ownership/faq-domain-ownership.component';
import { FaqSitesDomainsComponent } from './faq-sites-domains/faq-sites-domains.component';
import { FaqCostRegComponent } from './faq-cost-reg/faq-cost-reg.component';
import { FaqSawComponent } from './faq-saw/faq-saw.component';
import { ResourcesBuyPurchasingTakenComponent } from './resources/resources-buy-purchasing-taken/resources-buy-purchasing-taken.component';
import { AdultBlockComponent } from './adult-block/adult-block.component';
import { LazyImageDirective } from './directives/lazy-image.directive';
import { environment } from 'src/environments/environment';
import { ContactComponent } from './contact/contact.component';
import { ContactThankYouAdultBlockComponent } from './contact-thank-you-adult-block/contact-thank-you-adult-block.component';
import { ContactUsAdultBlockComponent } from './contact-us-adult-block/contact-us-adult-block.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderMainComponent,
    FooterComponent,
    PrivacyPolicyComponent,
    NotFoundComponent,
    AboutComponent,
    AppraisalsComponent,
    BuyComponent,
    SellComponent,
    SellMultipleComponent,
    JobsComponent,
    ContactThankYouComponent,
    ContactUsComponent,
    ResourcesComponent,
    ResourcesWhatComponent,
    ResourcesWhyComponent,
    ResourcesBuyBasicsHowComponent,
    ResourcesBuyBasicsWhatComponent,
    ResourcesBuyBasicsRegComponent,
    ResourcesBuyAppraisalsHowComponent,
    ResourcesBuyAppraisalsMetricsComponent,
    ResourcesBuyPurchasingWhatComponent,
    ResourcesBuyPurchasingHowComponent,
    ResourcesBuyPurchasingConsultComponent,
    ResourcesMiscFirstOnehundredComponent,
    ResourcesMiscArchiveDotOrgComponent,
    ResourcesMiscInternetHistoryComponent,
    ResourcesWhatsinComponent,
    ResourcesGvnsgComponent,
    HeaderResourcesComponent,
    FaqComponent,
    FaqDomainOwnershipComponent,
    FaqSitesDomainsComponent,
    FaqCostRegComponent,
    FaqSawComponent,
    ResourcesBuyPurchasingTakenComponent,
    AdultBlockComponent,
    LazyImageDirective,
    ContactComponent,
    ContactThankYouAdultBlockComponent,
    ContactUsAdultBlockComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RecaptchaV3Module,
    HttpClientModule,
    NgbModule,
    NgxJsonLdModule,
    NgxPageScrollCoreModule,
    NgxPageScrollModule
  ],
  providers: [{
    provide: RECAPTCHA_V3_SITE_KEY,
    useValue: environment.siteKey
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
