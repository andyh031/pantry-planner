import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Auth0Provider } from '@auth0/auth0-react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.***REMOVED***trictMode>
    <Auth0Provider
    domain="dev-ut5fehdn1tmvu3v7.us.auth0.com"
    clientId="fVEHrlRhrdKvdTD2pjo9***REMOVED***uP***REMOVED***qhr***REMOVED***ixpt"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
    >
      <App />
    </Auth0Provider>
  </React.***REMOVED***trictMode>,
)
