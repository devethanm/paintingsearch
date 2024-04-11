# Painting Search Application 
## Created using AWS and ReactJS

<div>
    <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ffuturumresearch.com%2Fwp-content%2Fuploads%2F2020%2F01%2Faws-logo.png&f=1&nofb=1&ipt=81f3552f1d9750a1c1f6743501e495e3e016fc6dc2138187750af548400c02c4&ipo=images" alt="AWS logo" width="100" style="padding: 20px;"/>
    <img src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Flogos-download.com%2Fwp-content%2Fuploads%2F2016%2F09%2FReact_logo_logotype_emblem.png&f=1&nofb=1&ipt=58b9012fd6d9db9b45a6ef6fb687d4093c3f89afe924f36e5b61dd6ee2cf5367&ipo=images" alt="React logo" width="100" style="padding: 20px;"/>
</div>


This project was bootstrapped with [**Create React App**](https://github.com/facebook/create-react-app).

This project utilizes **AWS** services for its backend functionality and security.

## Sections
- [Project Components](#project-components)
    - [Frontend](#frontend)
    - [Backend](#backend)
    - [Misc](#misc)
- [Setup and Build](#setup-and-build)
    - [Prerequisites](#prerequisites)
    - [Setup](#setup)
- [All Available Scripts](#available-scripts)
  - [`npm start`](#npm-start)
  - [`npm test`](#npm-test)
  - [`npm run build`](#npm-run-build)
  - [`npm run eject`](#npm-run-eject)
- [Learn More About React](#learn-more-about-react)
  - [Code Splitting](#code-splitting)
  - [Analyzing the Bundle Size](#analyzing-the-bundle-size)
  - [Making a Progressive Web App](#making-a-progressive-web-app)
  - [Advanced Configuration](#advanced-configuration)
  - [Deployment](#deployment)
  - [`npm run build` fails to minify](#npm-run-build-fails-to-minify)
- [Useful References and Resources](#useful-references-and-resources)

## Project Components

Here are the project components and technologies this application uses:

### Frontend
- [ReactJS](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Figma](https://www.figma.com)
    - [Figma Project Design File URL](https://www.figma.com/file/AB9ulXEkOAndUUIJ89bjOQ/AWS-Amplify-UI-Kit-(Community)?type=design&node-id=3854-3187&mode=design&t=YfoEWIC96FoScx3u-0)
### Backend
- AWS Services
    - [AWS Amplify](https://aws.amazon.com/amplify/) - Backend design and management
    - [AWS Cognito](https://aws.amazon.com/cognito/) - User authentication, account information, and identify. Integrates with Google for third party sign in. 
### Misc
- Git/Github

## Setup and Build

### Prerequisites
- For setup, local dev, and hosting, you must have the installed:
    - git
    - latest version of [nodejs](https://nodejs.org/en) for npm
    - aws amplify cli install using ```npm install -g @aws-amplify/cli``` 
    - An AWS account with access to AWS amplify.

### Setup 

How to run the project locally for dev and testing:
- Run `git clone https://github.com/devethanm/paintingsearch` on your local machine
- Navigate to the paintingsearch folder and run `npm install`
- Watch this [**AWS Amplify CLI setup**](https://www.youtube.com/watch?time_continue=11&v=fWbM5DLh25U&embeds_referring_euri=https%3A%2F%2Fdocs.amplify.aws%2F&feature=emb_logo) video! it tells you exactly how to setup and configure the AWS Amplify CLI which is needed for this project. You need to run the `npm install -g @aws-amplify/cli command`. 
- run `amplify push` - This command provisions cloud resources with the configurations defined in your local backend directory (amplify/backend). Therefore, making the project availible in your own AWS account for development and testing
- Navigate to AWS Amplify in your AWS account, you should see this project there after running the previous command.
- Open the app and navigate to the **Backend environments** tab
- Enable Amplify studio
- Nagigate to amplify studio, and on the left side, navigate to **UI Library** under design.
- At the top right, click **Sync with Figma**, and use the following Figma Project Design File URL: https://www.figma.com/file/AB9ulXEkOAndUUIJ89bjOQ/AWS-Amplify-UI-Kit-(Community)?type=design&node-id=3854-3187&mode=design&t=YfoEWIC96FoScx3u-00
- Finally, run `npm start` to start the project locally on localhost:3000

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More About React

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

## Useful References and Resources
- Videos
    - [How to use React Router for multiple pages on your web app (for beginners)](https://www.youtube.com/watch?v=TWz4TjSssbg)
    - [AWS Amplify in Plain English | Getting Started Tutorial for Beginners](https://www.youtube.com/watch?v=HdCmo0a3ngM)
    - [AWS Amplify Fullstack Project Setup (React, Node, Lambda, REST API)](https://www.youtube.com/watch?v=T4MQrRDo20w)
    - [Frontend to Full Stack: Modify AWS Amplify Studio Components in Code | Amazon Web Services](https://www.youtube.com/watch?v=VzE_emsi4Dk)
    - [Adding Cognito Signup and Login to your React App with AWS Amplify](https://www.youtube.com/watch?v=g4qKydnd0vU&list=PLmexTtcbIn_hvPcUm3oAufCtH7dwNAC-g)
    - [Clutch video explaining google auth setup in amplify](https://www.youtube.com/watch?v=eqDUSY9KHYE)
- Docs
    - [AWS Amplify CLI](https://docs.amplify.aws/cli/)
    - [AWS Amplify React UI](https://ui.docs.amplify.aws/react)
    - [AWS Amplify Auth](https://docs.amplify.aws/cli/auth/overview/)
- Commands
    - `amplify update auth` - can help fix auth from local and then pushed up using `amplify push`