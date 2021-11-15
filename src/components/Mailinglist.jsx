import React, { Component } from 'react';
// import the component
import Mailchimp from 'react-mailchimp-form'
import BackgroundVector from '../assets/images/background-vector.svg'
 
class Mailinglist extends Component {
  render() {
      
    return (
        <>
           <h2 className="mailing-header">Join the Kiki Mailing List</h2>
           <div>*</div>
           <Mailchimp 
                action='https://kikiapp.us17.list-manage.com/subscribe/post?u=20a5ea56f2d052e902228a598&amp;id=fc23b82f9b'
                fields={[
                    {
                        name: 'EMAIL',
                        placeholder: 'Email Address',
                        type: 'email',
                        required: true,
                    },
                    {
                        name: 'EMAIL',
                        placeholder: 'First Name',
                        type: 'name',
                        required: false
                    },
                    {
                        name: 'EMAIL',
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
                className='mail-chimp-form'>
            </Mailchimp>
             <div>
                   {/* <div className="indicates-required"><span className="asterisk">*</span> Email Address required</div> */}
                <div className="bg-placeholder" style={{ backgroundImage: `url(${BackgroundVector})` }}></div>
            </div></>
 
    );
  }
}
 
export default Mailinglist;