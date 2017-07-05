

# Buyers Button

Built using create-react-app. The project was built using Bootstrap, Sass, React. The project uses Webpack for dev and build tools.

In the project directory, you can run:

### `npm install`

This will pull down all the projects dependencies

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run build`

Builds the app for production to the build folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.

### If you are a holder of the credentials to push, you can follow these steps to deploy:

First, you will want to be in the `deploy` branch. 
You will want to run `npm install aerobatic-cli -g` to have the Aerobatic CLI tool.

Login by running `aero login` and use the correct credentials. Now you can run deployment commands.
All settings for deployments are stored in `aerobatic.yml` within the root.

### `aero deploy`

When you run a deployment, the built version is pushed to [https://pb-buyers-button.aerobatic.io/](https://pb-buyers-button.aerobatic.io/).

If there are any issues please email pthibedeau@gmail.com