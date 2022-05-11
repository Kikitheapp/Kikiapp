import * as React from "react"
import { Link } from "gatsby"
import Layout from '../layouts/layout/layout.js';

// markup
const NotFoundPage = () => {
  return (
    <div>
      <Layout>
        <title>Page Not Found - Kiki for the Future</title>
        <div className="row p-5 justify-content-center">
          <div className="col-md-10 col-xl-10 about-kiki">
            <h1>Oops! Page not found</h1>
            <p>
              Sorry{" "}
              <span role="img" aria-label="Pensive emoji">
                😔
              </span>{" "}
              Sorry, we couldn’t find what you were looking for.
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

export default NotFoundPage
