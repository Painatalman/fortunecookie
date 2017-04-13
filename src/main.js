import React from 'react';
import { render } from 'react-dom';

import App from './components/App.js';

// ReactDOM.render version of render
render(
  <App name='fortunecookie' description='Multilanguage fortune cookie teller'></App>,
  document.getElementById('app')
);
