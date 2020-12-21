import { Component, Inject, Input, OnDestroy, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http'
import { Router } from '@angular/router'
import { ServicesAuthenticationService } from '../services/services-authentication.service'
import { Title, Meta } from '@angular/platform-browser'
import { Subscription } from 'rxjs'
import { ReCaptchaV3Service } from 'ng-recaptcha'
import { DOCUMENT } from '@angular/common'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  loading: boolean;

  @Input() servicesNeeded: string;

  submitted = false;
  private allExecutionsSubscription: Subscription;
  private allExecutionErrorsSubscription: Subscription;
  private singleExecutionSubscription: Subscription;
  private options = { headers: new HttpHeaders().set('Content-Type', 'application/json') };

  contactForm: FormGroup;

  errorMessages = {
    name: { type: 'required', message: 'Name is required' },
    email: { type: 'email', message: 'Please enter a valid email address' },
    phoneNumber: { type: 'pattern', message: 'Phone number is not valid' },
    comments: { type: 'required', message: 'Please leave comments' },
    privacy: { type: 'requiredTrue', message: 'Please review our Privacy Policy' },
    submit: { type: 'submit', message: 'Please complete all required fields' }
  };

  constructor(
    private http: HttpClient,
    private router: Router,
    private authenticationService: ServicesAuthenticationService,
    private recaptchaV3Service: ReCaptchaV3Service,
    private titleService: Title,
    private metaService: Meta,
    private fb: FormBuilder,
    @Inject(DOCUMENT) private document: any
  ) {
    this.titleService.setTitle('Contact Us - Saw.com')
    this.metaService.updateTag(
      { name: 'description', content: '' }, `name='description'`
    )
  }

  ngOnInit(): void {
    this.allExecutionsSubscription = this.recaptchaV3Service.onExecute.subscribe(() => console.log(document.getElementsByClassName('grecaptcha-badge')[0]))
    this.allExecutionErrorsSubscription = this.recaptchaV3Service.onExecuteError.subscribe()
    this.initForm()
    if (document.getElementsByClassName('grecaptcha-badge') && document.getElementsByClassName('grecaptcha-badge').length) {
      document.getElementsByClassName('grecaptcha-badge')[0].classList.remove('no-contact')
    }
  }

  ngOnDestroy() {
    if (this.allExecutionsSubscription) {
      this.allExecutionsSubscription.unsubscribe()
    }
    if (this.allExecutionErrorsSubscription) {
      this.allExecutionErrorsSubscription.unsubscribe()
    }
    if (this.singleExecutionSubscription) {
      this.singleExecutionSubscription.unsubscribe()
    }

    if (document.getElementsByClassName('grecaptcha-badge') && document.getElementsByClassName('grecaptcha-badge').length) {
      document.getElementsByClassName('grecaptcha-badge')[0].classList.add('no-contact')
    }
  }

  public executeAction(action: string): void {
    if (this.singleExecutionSubscription) {
      this.singleExecutionSubscription.unsubscribe()
    }
    this.singleExecutionSubscription = this.recaptchaV3Service.execute(action)
      .subscribe(
        (token) => {
          this.sendFormData(token)
        },
        (error) => {
          console.log(error, 'recaptcha error-----')
        },
      )
  }

  initForm() {
    this.loading = false;
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', [Validators.required, Validators.pattern("^[0-9+]{10,15}$")]],
      comments: ['', Validators.required],
      news: [false],
      privacy: [false, Validators.requiredTrue],
    })
  }

  changeService(e) {
    this.contactForm.get('services').setValue(e.target.value, { onlySelf: true })
  }

  onSubmit() {
    
    this.submitted = true;
    
    if (!this.contactForm.valid) {
      return
    }    

    this.loading = true;
    this.executeAction('submit')
  }

  sendFormData(responseToken: string) {
    const data = this.contactForm.value
    const jsonBody = JSON.stringify({
      name: data.name,
      email: data.email,
      phone: data.phoneNumber,
      servicesNeeded: this.servicesNeeded,
      comments: data.comments,
      newsLetter: data.news,
      responseToken: responseToken
    })

    this.http.post("/api/contactUs", jsonBody, this.options)
    .subscribe(response => {
        this.loading = false;
        this.authenticationService.setContactThankYouAccessible(true)
        if (this.servicesNeeded == 'Adult Block') {
          this.router.navigate(['/contact-thank-you-adult-block'])
        } else {
          this.router.navigate(['/contact-thank-you'])
        }
      }, (err: HttpErrorResponse) => {
        // TODO - show an error
        console.log(err);
      })
  }

  get nameError() {
    return !this.contactForm.get('name').valid && (this.contactForm.get('name').dirty || this.contactForm.get('name').touched)
  }

  get nameErrorAlert() {
    return this.contactForm.get('name').hasError('required') && (this.contactForm.get('name').dirty || this.contactForm.get('name').touched)
  }

  get emailError() {
    return !this.contactForm.get('email').valid && (this.contactForm.get('email').dirty || this.contactForm.get('email').touched)
  }

  get emailErrorAlert() {
    return (this.contactForm.get('email').hasError('required') || this.contactForm.get('email').hasError('email')) && (this.contactForm.get('email').dirty || this.contactForm.get('email').touched)
  }

  get phoneNumberError() {
    return !this.contactForm.get('phoneNumber').valid && (this.contactForm.get('phoneNumber').dirty || this.contactForm.get('phoneNumber').touched)
  }

  get phoneNumberErrorAlert() {
    return (this.contactForm.get('phoneNumber').hasError('required') || this.contactForm.get('phoneNumber').hasError('pattern')) && (this.contactForm.get('phoneNumber').dirty || this.contactForm.get('phoneNumber').touched)
  }

  get commentsError() {
    return !this.contactForm.get('comments').valid && (this.contactForm.get('comments').dirty || this.contactForm.get('comments').touched)
  }

  get commentsErrorAlert() {
    return this.contactForm.get('comments').hasError('required') && (this.contactForm.get('comments').dirty || this.contactForm.get('comments').touched)
  }

  get privacyErrorAlert() {
    return !this.contactForm.get('privacy').value
  }
}
