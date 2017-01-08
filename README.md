# Cirrus Web Accelerator v2.0.0

**Application Name:** Cirrus Web Accelerator

**Application Description:** This is a Node Web Accelerator that allows project teams to get up and running with a Node project quicker then starting from scratch.

**Prefix:** CIRR_WEB_ACCELERATOR

**Author:** Nick Liffen

**Team:** Cirrus

**Information Classification:** Green

**Development Language:** Node

**Development Add-Ons:** Heroku Redis, New Relic APM, Papertrail

**ALM Record URL:** N/A

---

**Install:**

1. Run `npm install`.
2. Run `npm install -g eslint`
3. Copy the `.env-sample` file to `.env` and add details.

---

**Running:**

1. Run `npm run build` in one terminal window.
2. Run either `npm start` or `heroku local` in another terminal window.

---

**Deploying to Heroku:**

1. Create your application(s) / pipelines in Heroku following the [Cirrus Best Practise](https://lillydev.com) if needed.
2. Ensure you attach three add-ons to your application(s): Redis, Papertail and New Relic. You will notice that it will have automatically added the following environment variables to your application(s):
  1. `LOG_LEVEL`.
  2. `NEW_RELIC_LICENSE_KEY`.
  3. `NEW_RELIC_LOG`.
  4. `PAPERTRAIL_API_TOKEN`.
  5. `REDIS_URL`.
Please copy these values to your local `.env` file.
3. Ensure your add the other environment variables found in the `.env-sample` file to your Heroku Applications. You **do not** need to add the `HTTP_PROXY` to the Heroku environment variables; this is only for local development. The other environment variables you would upload to Heroku are:
  1. `AUTH_REQUIRED`.
  2. `CF_CALLBACK_URL`.
  3. `CF_CLIENT_ID`.
  4. `CF_CLIENT_SECRET`.
  5. `COOKIE_SECRET`.
  6. `SF_AUTHORIZE_URL`.
  7. `SF_TOKEN_URL`.
  8. `NODE_ENV` needs to be set to **production** in Heroku.
5. Push your code to GitHub and watch your Heroku application automatically deploy.

---

**Authentication:**

This project uses a salesforce connected application for authentication. You will notice in the `.env-sample` file four variables:

1. `AUTH_REQUIRED`
2. `CF_CALLBACK_URL`
3. `CF_CLIENT_ID`
4. `CF_CLIENT_SECRET`

When `AUTH_REQUIRED` is set to **false** your application is going to have no authentication. **NOTE:** Please make sure that even if your application has no auth; to put some calues in the `CF_CLIENT_ID` and `CF_CLIENT_SECRET` fields. As this is needed for the application to run.

When you set `AUTH_REQUIRED` to **true** your application is going to try and authenticate against a force.com connected application. You will need to raise a Service Request in Service Now to obtain the `CF_CLIENT_ID` and `CF_CLIENT_SECRET` needed for this authentication. The `CF_CALLBACK_URL` will be dependent on your application's URL. When you submit the Service Request you will need to provide this value(s). If your authenticating multiple applications E.G a pipeline full of applications. Please provide multiple `CF_CALLBACK_URL` values. E.G

1. https://es6-web-accelerator-dev.herokuapp.com/auth/forcedotcom/callback
2. https://es6-web-accelerator-stg.herokuapp.com/auth/forcedotcom/callback
3. https://es6-web-accelerator.herokuapp.com/auth/forcedotcom/callback

This request can take up to 5 working days to complete; so please make the request early.

---

**Coding Standards:**

1. Make sure you have Eslint downloaded and installed on your IDE.
    1. Atom: [Linter](https://atom.io/packages/linter), [ESLint](https://atom.io/packages/linter-eslint)
    2. Sublime: [Linter](https://packagecontrol.io/packages/SublimeLinter), [ESlint](https://packagecontrol.io/packages/SublimeLinter-contrib-eslint)
    3. Other IDE's: [Linter](http://eslint.org)
2. Make sure you have EditorConfig downloaded and installed on your IDE:
    1. Atom: [EditorConfig](https://github.com/sindresorhus/atom-editorconfig#readme)
    2. Sublime: [EditorConfig](https://github.com/sindresorhus/editorconfig-sublime#readme)
    3. Other IDE's: [EditorConfig](http://editorconfig.org)

This project uses ESlint for JavaScript Coding Standards. The AirBnb Style Guide is used for this project. Please ensure that all code passes the coding checks before pushing code. Run `npm run lint` to find out if your code has passed or not.

This project also uses [EditorConfig](http://editorconfig.org) to set up our coding style across IDE's.

---

**Contributing:**

1. Clone the repository.
2. Read this README file.
3. Make some changes.
4. Once you're done with your changes send a pull request into the *develop* branch. (see naming details below).
5. Heroku will create a review application.
6. In the Pull Request, open the Review Application and make sure your changes are present and working.
7. Make sure Continuous Integration has passed (Green tick in Pull Request).
8. Wait for feedback.

When you open a pull request please follow these naming conventions:

1. `feature/featureName`
2. `enhancement/enhancementName`
3. `bug/bugName`
