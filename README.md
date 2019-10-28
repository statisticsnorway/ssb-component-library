# SSB Component Library
The SSB component library is developed mainly for developers at SSB.
Visit the [docs](https://github.com/statisticsnorway/design-system) to see all available components and how to use them.
- [Usage](#usage)
    - [Installing library](#installing-library)
    - [Use components](#use-components)
- [Contributing](#contributing)
    - [Run project locally](#run-project-locally)
    - [How to start working on a feature](#how-to-start-working-on-a-feature)
    - [Publish to NPM](#publish-to-npm)
    - [Development](#development)
        - [Components](#components)
        - [Storybook](#storybook)
        - [Testing](#testing)
        - [Styling](#styling)
----
## Usage
### Installing library
If you want to use the component library in your project, simply install it from npm.

``$ npm install @statisticsnorway/ssb-component-library --save``

### Use components
Every component is developed to support being used as React components or as styled HTML.
Regardless of which way you use it, you need to import the stylesheet at the top of your project. You can do this either in the
top javascript file, or in the top scss file.
 
If your project uses React, just use the module as you usually would use an external react component.
```jsx harmony
import { Button } from '@statisticsnorway/ssb-component-library';

<Button onClick={callback} primary>Click me!</Button>
```

If you only use HTML and CSS, look at the documentation for the specific component to make sure you get the class names right.
````html
<button class="ssb-button primary-btn">Click me</button>
````

You can find all available components [here](src/components) with the needed descriptions of how to use.
You can also find this at the [website](https://statisticsnorway.github.io/design-system/#/components) (only in Norwegian for now).

## Contributing
### Run project locally
```
... clone repository ...
$ npm install
$ npm start
```

This will open [storybook](#storybook) where you can develop components in an isolated environment. 

### How to start working on a feature
```
$ git checkout master
$ git pull
$ git checkout -b add-feature-x
... do changes ...
$ git commit -a -m "detailed commit message"
$ git status
... verify that correct files are included ...
$ git push -u origin add-feature-x
... create pull-request to master ...
```

### Publish to NPM
Publishing should only be done, or at least be administered by one of the core developers of this project.
To publish a new version to npm, run a build with ``npm run build:prod``. Make sure there are no errors.
It is also recommended to look through the components in storybook.

If everything looks good, bump up the version number in package.json and run ``npm publish``.
This requires that you are logged into an NPM user with access to this module.

## Development

#### Components
Components are written in [React](https://reactjs.org/) using the [JSX](https://reactjs.org/docs/introducing-jsx.html) syntax.
Components should be written as functions, as opposed to classes, and if a local state or event handler is needed you should
take use of the [Hooks API](https://reactjs.org/docs/hooks-intro.html).

As a way to ensure that our components are being used they way we intended, we use [PropTypes](https://www.npmjs.com/package/prop-types)
to check properties being passed to components. _All_ components with props available should have this.

One of the requirements for the components is that they should be able to render with the desired design using only HTML.
Please develop components with that in mind. Some projects will only extract the stylesheet and apply the class names to receive styling,
while handling interactions on their own. Always develop with this in mind.

#### Storybook
[Storybook](https://storybook.js.org/) is an open source tool for developing UI components in an isolated environment.
It is also a useful tool for demoing components by themselves or put together into a user scenario.
To add a component to the storybook build, create a file named like `componentName.story.jsx`.
Import some needed modules, the component you are creating the story for, and add it like this:
```jsx harmony
import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered/react';
import Button from './index';

storiesOf('Button', module)
  .addDecorator(centered)
  .add('Primary button', () => (
    <div>
      <Button text="Primary" primary />
      <Button text="Disabled" primary disabled />
    </div>
  ))
```
Every new instance of `storiesOf` creates a new menu item in the storybook. When using the `add`, it creates an item in
a sub menu. 

#### Testing
Testing is done with [Jest](https://jestjs.io/en/). Write unit tests for all atoms aim for a 100% test coverage. 
To run the tests, simply run `npm test`. To run tests without using any cache, run `npm run clean-test`.
If you need to replace outdated screenshots, run `npm run clear-tests`.

#### Styling
Styling is done with SCSS. You should familiarise yourself just a bit with the [stylelint](./.stylelintrc) configuration,
but it's pretty manageable. Just make sure you stick to the color variables specified in the [variables document](./src/style/_variables.scss)
to make maintenance and potential changes easier. 
