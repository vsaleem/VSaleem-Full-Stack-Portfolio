import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './assets/css/main.css';
import './assets/js/main';
import './assets/js/util';
import Header from './Components/header';
import AboutMe from './Containers/intro';
import Projects from './Containers/projects';
import Skills from './Containers/skills';
import Footer from './Components/footer';

class App extends Component {
	render() {
		return (
			<>
				<Router>
					<Header />
					<main>
						<AboutMe />
						<Skills />
						<Projects />
					</main>
					<Footer />
				</Router>
			</>
		);
	}
}
export default App;
