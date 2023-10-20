import * as React from 'react';
import Layout from '../layouts/layout/layout.js';
import Mailchimp from 'react-mailchimp-form';
import SEO from "../components/seo/seo.js";

import './mailinglist.css';
 
const Mailinglist = () => {
    return (
        <div>
            <Layout>
            <div className="row p-5 justify-content-center">
                <div className="col-sm-6 col-xl-4">
                    <h2 className="text-center">Join the Kiki For The Future™ mailing list
                    and get our free queer pleasure workbook!</h2>
                    
                    <Mailchimp
                        action={process.env.GATSBY_MAILCHIMP}
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
                    <div></div>
            </div>
        </Layout>
        </div>
    );
  }

  export default Mailinglist;

export function Head(){
    return <SEO title="Join our Mailing List" />
}
