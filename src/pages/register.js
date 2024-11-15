import React from "react";
import { Script } from "gatsby";

import Layout from '../layouts/mlayout/mlayout.js';
import Seo from "../components/seo/seo.js";



// ToDo: Handle form submission
function SignInPage() {

  console.log(process.env.GATSBY_KIKI_G_LOGIN);
   return <Layout>
      <div className="d-block m-5">
        <h1 className="text-center">Register</h1>
        <form className="mb-3" id="userSignIn">
          <div>
            <label className="form-label" for="user">Username: </label>
            <input className="form-control mb-3" id="userEmail" type="email" name="email" />
          </div>
          <div>
            <label for="userPassword" className="form-label">Password: </label>
            <input className="form-control mb-3" type="password" name="userPassword" id="userPassword" />
          </div>
          <div className="mb-3 text-center">
            <button type="submit" className="btn btn-primary">Sign In</button>
            <a className="btn btn-secondary mx-3" href="/signup">Sign Up</a>
          </div>
        </form>
      </div>
      <Script src="https://accounts.google.com/gsi/client"></Script>
    </Layout>  
  

}

export default SignInPage;

export function Head(){
  return <Seo title="Sign Up to Kiki for the Future" />
}
