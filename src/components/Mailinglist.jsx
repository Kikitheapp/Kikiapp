import React from 'react';
// import the component
import Mailchimp from 'react-mailchimp-form'
//import BackgroundVector from '../assets/images/background-vector.svg'
 
export default function Mailinglist() {


    return (
        <div className="row p-5 justify-content-center">
            <div className="col-md-6 col-xl-4">
                <h2 className="text-center">Join the Kiki mailing list</h2>
                
                <Mailchimp
                    action='https://kikiapp.us17.list-manage.com/subscribe/post?u=20a5ea56f2d052e902228a598&amp;id=fc23b82f9b'
                    fields={[
                        {
                            name: 'EMAIL',
                            placeholder: 'Email Address',
                            type: 'email',
                            required: true
                        },
                        {
                            name: 'FIRSTNAME',
                            placeholder: 'First Name',
                            type: 'name',
                            required: false
                        },
                        {
                            name: 'LASTNAME',
                            placeholder: 'Last Name',
                            type: 'name',
                            required: false
                        }
                    ]}
                    messages={{
                        sending: "Sending...",
                        success: "Thank you for subscribing!",
                        error: "An unexpected internal error has occurred.",
                        empty: "Please enter a Email Address",
                        duplicate: "Too many subscribe attempts for this email address",
                        button: "Subscribe"
                    }}
                    className='mail-chimp-form'
                    />
                </div>
            </div>
    );
  }