# Kikiapp
This is [Kikiapp](https://kikiapp.org/). We are creating an app that curates sexual health 
resources for the queer community. We are a platform for queer sexual education, for sexual 
liberation, for knowledge, for power, joy, freedom, and connection. 

--------------------------------------------------------------------------
## Project runs on...

Languages and Frameworks: 
- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [Node.js](https://nodejs.org/en)
- [React](https://react.dev/)
- [Gatsby](https://www.gatsbyjs.com/)

Tested using:
- [Jest](https://jestjs.io/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro)

Hosted by:
- [Netlify](https://www.netlify.com/)
- [Airtable](https://airtable.com/)

--------------------------------------------------------------------------
## Local Development

The Gatsby framework and the NPM package library make it easy to get up and running for local 
development work. 

First, make sure you have [Git](https://git-scm.com/) and [Node.js](https://nodejs.org/en/download) 
(and therefor NPM) installed. 

Next, [clone](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository) 
the repository and navigate to the project root using your favorite command line interface (CLI).

Finally, install the necessary packages using `npm install`, and then launch the project locally using `npm start`. 

## Tests

### Running Tests
Kiki for the Future uses [Jest](https://jestjs.io/docs/api) as a test framework, alongside 
[React Testing Library](https://testing-library.com/docs/react-testing-library/api), as 
reccomended by the community. Additionally, we use 
[React Test Renderer](https://reactjs.org/docs/test-renderer.html) to create quick and easy 
snapshot tests used for unit and regression testing React components.

### Snapshot Testing
Jest Snapshot tests are used as an easy way to ensure that a UI component has not changed. 
Snapshots do this by creating a textual representation of the component, saving that to a file, 
and using that file as a reference the next time the tests are run. 

**Snapshot files should be commited with the tests that generate them.** This will ensure that UI 
components remain consistent throughout development. 

#### Updating Snapshots
Sometimes changes to the UI component, or the test structure or data, are needed. When this 
happens, a new snapshot needs to be generated. 

To update the project's snapshots, run jest with the `--updateSnapshot` (or `-u`) flag:
```
jest --updateSnapshot
``` 

**You may recieve an error if you do not have Jest installed globally. The `updateSnapshot` script 
`package.json` shortcut provides a fix for this:**
 ```
 npm run updateSnapshot
 ```

## Deploying the Project

GitHub Actions and Netlify make it easy to deploy a new version of the project. A pull request to 
the `development` branch will run the linter, tests, and build the project. This ensures that the 
project is always in a deployable state. A pull request to the `main` branch will start the Netlify 
deployment process and generate a preview page. This makes it easy to review any changes before 
making them live! Let's walk through the steps needed to deploy the project.

1. Before we begin, make sure all the changes to be released are on the `development` branch. Don't 
    forget to check for any security updates as well!

2. To start, create a branch for the release. This should be named `kikiweb-x.x.x` where `x.x.x` 
    is the version number. On this branch we will:
    - Increment the version number in `package.json`
    - Test the project and implement any bug fixes.

3. Once the project is tested and ready for release, merge the release branch into the main branch, 
    as well as back into the development branch to capture any changes made during testing.
    1. Create a pull request from the release branch to the `development` branch. **This is so you 
    do not need to merge `main` into `development`.**
    2. Create a pull request from the release branch to the `main` branch. This will trigger the 
    Netlify deployment process and generate a preview page!

4. Review the preview page and make sure everything looks good. Be sure to double check the new 
    features! 
    
5. Once the preview page is approved, merge the pull request to the `main` branch. This will 
    trigger the Netlify deployment process and deploy the new version of the project. Once the 
    process is complete, you will see your updates live on the [Kikiapp](https://kikiapp.org/) 
    website!
    