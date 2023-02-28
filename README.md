# Kikiapp
This is [Kikiapp](https://kikiapp.org/). We are creating an app that curates sexual health resources for the queer community. We are a platform for queer sexual education, for sexual liberation, for knowledge, for power, joy, freedom, and connection. Stay tuned for the launch of our app. For now, check out our [blog](https://kikiapp.medium.com/), sign up for our [newsletter](https://kikiapp.org/form.html), and follow us on [social media](https://www.instagram.com/kikitheapp/).

Kiki was founded in 2020 to address the gap in sexual health resources and education for the LGBTQIA+ community. This lack of education starts early: one study found that fewer than 5% of LGBT youth have access to positive representations of LGBT sexuality in their sex ed classes. This renders us essentially invisible and creates a barrier to having safe, pleasurable sex lives. We also face healthcare disparities like doctors who are not educated in queer sexual health needs that lead to higher rates of STIs and fewer preventative healthcare visits. Learning about sexual health and pleasure shouldn’t be daunting. We created Kiki as a way to counter the cisgender, heterosexual-centered sex ed that is taught in most schools in the US. This platform aims to create space for fun, fact-based, and easy-to-understand discussions about sex. For the newly out to the old pros, for everything from basic anatomy to butt plugs, Kiki is about inclusion for all. All genders, all sexualities, all types of sex and relationships.

----
#### This stack uses 

React
Node
Javascript



----
#### To run this in a local environment you must download nodejs
[Nodejs](https://nodejs.org/en/)



----
## Startup and Onboarding


* clone the repository


* Launch your IDE or UNIX terminal to the Kikiapp folder and type in the command ``npm start``. This should launch a local server on port 3000 of the current build. 


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

