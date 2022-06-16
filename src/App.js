import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
// import { Container } from 'react-bootstrap';
import './assets/css/main.css';
import './assets/js/main';
import './assets/js/util';
import Footer from './Components/footer';
import Projects from './Components/projects';
import Header from './Components/header';
import HeaderCopy from './Components/header copy';
import AboutMe from './Components/intro';
import Skills from './Components/skills';
// import NavBar from "./Components/navbar";

class App extends Component {
	render() {
		return (
			<>
				<Router>
					{/* <NavBar /> */}
					<HeaderCopy />

					{/* Add Container and make below components route paths */}
					{/* <main>
						<AboutMe />
						<Skills />
						<Projects />
					</main>

					<Footer /> */}
				</Router>
			</>
		);
	}
}
export default App;
