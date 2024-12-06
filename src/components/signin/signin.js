import React from 'react';
import { useEffect } from 'react';

export default function SignIn(){

    useEffect(() => {
      const script = document.createElement("script");
      script.src = "https://accounts.google.com/gsi/client";
      script.async = true;
      document.body.appendChild(script);
    });

  
    const signIn = async (e) => {
      // TODO: Handle form submission
      e.preventDefault();
      console.log(e.target.form);
      const form = document.getElementById("userSignIn");
      const formData = new FormData(form);
      console.log(formData);
      const data = Object.fromEntries(formData);
      console.log(data);
      const response = await fetch("/account", {
        method: "POST",
        body: JSON.stringify(data)
      });
      
      console.log(response);
      window.location.href = "/app/profile/";
    }

    window.gsiCall = async (response) => {
      // TODO: Handle Google Sign In

      const resp = await fetch("/account", {
        method: "POST",
        body: JSON.stringify(response.credential)
      });

      window.location.href = "/app/profile/";

    }

  return <>
    <div className="d-block m-5">
      <h1 className="text-center">Sign In</h1>
      <form className="mb-3" id="userSignIn">
        <div>
          <label className="form-label" htmlFor="userEmail">Email: </label>
          <input className="form-control mb-3" id="userEmail" type="email" name="userEmail" />
        </div>
        <div>
          <label htmlFor="userPassword" className="form-label">Password: </label>
          <input className="form-control mb-3" type="password" name="userPassword" id="userPassword" />
        </div>
        <div className="mb-3 text-center">
          <button type="button" onClick={signIn} className="btn btn-primary">Sign In</button>
          <a className="btn btn-secondary mx-3" href="/app/signup/">Sign Up</a>
        </div>
      </form>
      <h5 className="fst-italic"> Or sign in with: </h5>
      <div>
        <div id="g_id_onload"
            data-client_id={process.env.GATSBY_KIKI_G_CRED}
            data-callback="gsiCall"
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
  </>  


}
