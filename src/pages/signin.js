import React from "react";
import { Script } from "gatsby";

import Layout from '../layouts/mlayout/mlayout.js';
import Seo from "../components/seo/seo.js";



// ToDo: Handle form submission
// ToDo: Create sign-up page
function SignInPage() {

  console.log(process.env.GATSBY_KIKI_G_LOGIN);
   return <Layout>
      <div className="d-block m-5">
        <h1 className="text-center">Sign In</h1>
        <form className="mb-3" id="userSignIn">
          <div>
            <label className="form-label" for="userEmail">Email: </label>
            <input className="form-control mb-3" id="userEmail" type="email" name="email" />
          </div>
          <div>
            <label for="userPassword" className="form-label">Password: </label>
            <input className="form-control mb-3" type="password" name="password" id="userPassword" />
          </div>
          <div className="mb-3 text-center">
            <button type="submit" className="btn btn-primary">Sign In</button>
            <a className="btn btn-primary mx-3" href="/signup">Sign Up</a>
          </div>
        </form>
        <h5 className="fst-italic"> Or sign in with: </h5>
        <div>
          <div id="g_id_onload"
              data-client_id={process.env.GATSBY_KIKI_G_CRED}
              data-login_uri="/.netlify/functions/signin"
              data-auto_prompt="false">
          </div>
          <div className="g_id_signin"
              data-type="standard"
              data-size="large"
              data-theme="outline"
              data-text="sign_in_with"
              data-shape="rectangular"
              data-logo_alignment="left">
          </div>
        </div>
      </div>
      <Script src="https://accounts.google.com/gsi/client"></Script>
    </Layout>  
  

}

export default SignInPage;

export function Head(){
  return <Seo title="Sign In to Kiki for the Future" />
}
