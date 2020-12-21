import express, { Request, Response } from "express";
import { ContactUs } from './utility/contact-us';
import { Contact } from './model/Contact';

export const apiRouter = express.Router();

const contactUs = new ContactUs();

apiRouter.post('/contactUs', async (request: Request, response: Response) => {

    var contact:Contact = {
            name:request.body.name,
            email:request.body.email,
            phone:request.body.phone,
            comments:request.body.comments,
            servicesNeeded:request.body.servicesNeeded,
            newsLetter:request.body.newsLetter,
            responseToken:request.body.responseToken
    }

    if (!contactUs.isRequestValid(contact))
    {    
        response.status(400).send();
    }   
    else
    {
        var status = await contactUs.send(contact);
    
        if (status)
            response.status(200).send();
        else
            response.status(500).send();    //TODO - fix this to return proper code depending on what happens
    }    
});

    
