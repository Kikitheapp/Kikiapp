import * as React from "react"
import { Link } from "gatsby"
import Layout from '../layouts/layout/layout.js';
import SEO from "../components/seo/seo.js";
import BackgroundVector from '../assets/images/background-vector.svg';


// markup
const NotFoundPage = () => {
  return (
    <div>
      <Layout>
      <div className="bg-placeholder" style={{ backgroundImage: `url(${BackgroundVector})` }}></div>
        <div className="row p-5 justify-content-center">
          <div className="col-lg-10 col-xl-7 about-kiki">
            <h1>Oops! Page not found</h1>
            <p>
              Sorry{" "}
              <span role="img" aria-label="Pensive emoji">
                😔
              </span>{" "}
              we couldn’t find what you were looking for.
              <br />
              {process.env.NODE_ENV === "development" ? (
                <>
                  <br />
                  Try creating a page in <code>src/pages/</code>.
                  <br />
                </>
              ) : null}
              <br />
              <Link to="/">Go home</Link>.
            </p>
          </div>
        </div>
      </Layout>
    </div>
  )
}

export default NotFoundPage;

export function Head(){
  return <SEO title="Page Not Found" />
}
