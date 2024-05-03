import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { ChainId, ThirdwebProvider } from '@thirdweb-dev/react';

//import { StateContextProvider } from './context';
import {StateContextProvider} from './context/index';
import App from './App';
import './index.css';
import { ThirdwebAuthProvider } from '@thirdweb-dev/react';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    //<ThirdwebProvider desiredChainId={'0xfa2'}>
    <ThirdwebProvider activeChain="fantom-testnet" clientId="e6e3e70142428e75e11fe1efaeaf2efa"> 
    <Router>
      <StateContextProvider>
        <App />
      </StateContextProvider>
    </Router>
  </ThirdwebProvider> 
)