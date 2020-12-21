import axios from 'axios';
import { Contact } from '../model/Contact';

export class ContactUs {
    
    async send(contact: Contact) : Promise<boolean> {
        var status = false;

        if (await this.validateCaptcha(contact.responseToken))
        {
            var contactApiUrl =  process.env.CONTACT_API_URL;

            await axios.post(contactApiUrl, {
                name: contact.name,
                email: contact.email,
                phone: contact.phone,
                comments: contact.comments,
                servicesNeeded: contact.servicesNeeded,
                newsLetter: contact.newsLetter
            })
            .then((response) => {
                if (response.status == 200)
                {
                    status = true;
                }
                else
                {
                    console.log('Unexpected Contact API Response, non-200 received: ');
                    console.log(response);
                }
                
            }, (error) => {
                console.log('Unhandled error contacting Contact US API: ')
                console.log(error);
            });
        }
        else
        {
            console.log('Catpcha token is NOT valid.');
        }

        return status;
    }

    isRequestValid(contact: Contact) : boolean {
        var status = true;

        if (contact.comments.length > 200)
        {
            status = false;
        } 
        else if (contact.email.length > 75)
        {
            status = false;
        } 
        else if (contact.name.length > 50) 
        {
            status = false;
        }
        else if (typeof contact.newsLetter !== "boolean")
        {
            status = false;
        } 
        else if (contact.phone.length > 20)
        {
            status = false;
        } 
        else if (contact.servicesNeeded.length > 20)
        {
            status = false;
        } 

        return status;
    }

    private async validateCaptcha(token: string) : Promise<boolean> {
        var status = false;

        var secret = process.env.CAPTCHA_SECRET;
        var requestBody = `secret=${secret}&response=${token}`;
        var captchaVerifyUrl = 'https://www.google.com/recaptcha/api/siteverify';

        await axios.post(captchaVerifyUrl, 
            requestBody, 
            { headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        })
        .then((response) => {
            if (response.data.success.toString() == 'true')
            {
                status = true;
            }
            else
            {
                console.log('Captcha not successful: ');
                console.log(response);
            }                        
        }, (error) => {
            console.log('Unhandled error validating captcha: ');
            console.log(error);            
        });

        return status;
    }
}