# React Template

This repo is a template for a basic react application.

This trys to follow as many pratices as possible from
[bulletproof-react](https://github.com/alan2207/bulletproof-react).

This repo makes use of the following packages to help get started building
quicker:

- Typescript for easier to read and debug code.
- eslint and prettier code formating and validation
- craco for some custom webpack configuration
- Tailwindcss for quick css development
- react-bootstrap as a simple UI component library.
- Storybook for component iteration and documentation

## Things I'd lie to include

- Jest for testing
- Some form of commit linting for clean standard commit messages
- Some form of spell check linting

## Available Scripts

In the project directory, you can run:

### `npm run prepare`

Runs the instalation of any package or dev dependancies not covered by
`npm install` such as Husky.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run start:html`

Runs the app in the development mode using HTTPS.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

This relys on [mkcert](https://github.com/FiloSottile/mkcert) to create a cert
and key and autherize their trust in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests)
for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best
performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about
[deployment](https://facebook.github.io/create-react-app/docs/deployment) for
more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can
`eject` at any time. This command will remove the single build dependency from
your project.

Instead, it will copy all the configuration files and the transitive
dependencies (webpack, Babel, ESLint, etc) right into your project so you have
full control over them. All of the commands except `eject` will still work, but
they will point to the copied scripts so you can tweak them. At this point
you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for
small and middle deployments, and you shouldn’t feel obligated to use this
feature. However we understand that this tool wouldn’t be useful if you couldn’t
customize it when you are ready for it.

### `npm run lint`

Runs eslint to lint and fix Javascript or Typescript files.

### `npm run storybook`

Runs storybook local server.

## Learn More

You can learn more in the
[Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
