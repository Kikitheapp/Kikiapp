import React, { Component } from 'react';
// import the component
import Mailchimp from 'react-mailchimp-form'
 
class App extends Component {
  render() {
    return (
        <Mailchimp
        action='https://<YOUR-USER>.us16.list-manage.com/subscribe/post?u=XXXXXXXXXXXXX&amp;id=XXXXXX'
        fields={[
          {
            name: 'EMAIL',
            placeholder: 'Email',
            type: 'email',
            required: true
          }
        ]}
        />
    );
  }
}
 
export default App;