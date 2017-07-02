  /////////////////////////////////
 // INDEX ////////////////////////
/////////////////////////////////

// Dependencies
import React from 'react';
import { render } from 'react-dom';

// Boostrap and CSS
import 'bootstrap/dist/css/bootstrap.css';
import './styles/index.css';

// Components
import Property from './Components/Property/Property';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';

// Dummy model data
import data from './utility/data';



// <Root /> Element
const Root = () => {
	return (
		<section>
			<main>
				<Header />
				<Property data={data} />
			</main>
			<Footer />
		</section>
	);
}



// Entrypoint, Rendering into #root DOM Node
render(<Root />, document.getElementById('root'));