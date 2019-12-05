import { configure } from '@storybook/react';
import '../src/main.scss';
// import '../node_modules/bootstrap/scss/bootstrap-grid.scss';
// import '../node_modules/bootstrap/scss/bootstrap.scss';

// automatically import all files ending in *.stories.js
const req = require.context('../src', true, /\.story\.jsx$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
