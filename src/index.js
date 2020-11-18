import React from 'react';
import ReactDOM from 'react-dom';
import { PositionProvider } from './context/PositionProvider'
import { DataProvider } from './context/DataProvider'
import { LoadingProvider } from './context/LoadingProvider'
import App from './App';

import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <PositionProvider>
      <DataProvider>
        <LoadingProvider>
          <App />
        </LoadingProvider>
      </DataProvider>
    </PositionProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
