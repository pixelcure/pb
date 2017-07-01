///////////////////////////////////
// INDEX /////////////////////////
/////////////////////////////////

// Dependencies
import React from 'react';
import { render } from 'react-dom';

// Boostrap and CSS
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './styles/index.css';

// Components
import App from './Components/App/App';



// Entrypoint, Rendering into #root DOM Node
render(<App />, document.getElementById('root'));