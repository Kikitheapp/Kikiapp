import React from "react"
import Layout from '../layouts/mlayout/mlayout.js'
import { Router } from "@reach/router"
import Profile from "../components/profile/profile.js"
import SignIn from "../components/signin/signin.js"
import SingUp from "../components/signup/signup.js"

import Seo from "../components/seo/seo.js"


// TODO: Setup Private Component
// TODO: Setup Default Route
const App = () => (
  <Layout>
    <Router>
      <Profile path="/app/profile" />
      <SignIn path="/app/signin" />
      <SingUp path="/app/signup" />
    </Router>
  </Layout>
)

export default App;

export function Head() {
  return (
    <Seo title="Kiki the App" />
  )
}
