// https://aws.amazon.com/getting-started/hands-on/build-react-app-amplify-graphql/module-one/?e=gs2020&p=build-a-react-app-intro


import React from 'react';
import logo from './logo.svg';
import './App.css';

import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'
import { Authenticator } from '@aws-amplify/ui-react';



function App() {
    return (
        <div className="App">
            <header>
                <img src={logo} className="App-logo" alt="logo" />
                <h1>We now have Auth!</h1>
            </header>
            <AmplifySignOut />
        </div>
    );
}

export default App;
