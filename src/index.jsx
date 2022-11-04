import React from 'react';
import ReactDOM from 'react-dom';

import App from './app';

// ReactDOM.render(<App />, document.getElementById('app'));

ReactDOM.createRoot(document.getElementById('app')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
