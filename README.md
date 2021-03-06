# Bands in Town

[![CircleCI](https://circleci.com/gh/davilima6/bands-in-town.svg?style=svg&circle-token=537c1ee1168e43ac5fec949fddec238c28b074e6)](https://circleci.com/gh/davilima6/bands-in-town)

Live in: https://bands-in-town.now.sh/

This React app takes an artist and shows details about them and their events. The app queries [Bands In Town API](https://app.swaggerhub.com/apis/Bandsintown/PublicAPI/3.0.0) to provide:

- A way for user to input the desired artist's name

- A result based on such input, containing:
  - Artist Picture
  - Artist Name
  - Artist Facebook URL
  - Artist Events
    - Event Date
    - Event Venue
    - Event City
    - Event Country

_This project was bootstrapped at React 16.8.6 with [Create React App](https://github.com/facebook/create-react-app)_.

## Code Documentation

JSDocs are distributed in `docs/` directory. In order to update them run:

```bash
yarn run build:docs
```

## Deploy on Now.sh

1. Deploy frontend app to Now.sh:

```bash
yarn install -g now # Only for the first time
now # Verify credentials and deploy
```

2. Go to https://bands-in-town.{YOUR_USER}.now.sh/ and see the app.

---

## Main Scripts

In the project directory, make sure you have Yarn installed globally and run:

### `yarn start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn test:coverage`

Run tests and display coverage report.

### `yarn run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Deployment

This project has been configured for deployment-as-a-service using Now.sh. Any pushes to open PRs will trigger a new build.
