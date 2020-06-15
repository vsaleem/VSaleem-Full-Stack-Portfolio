import React, { Component } from 'react';
import './assets/css/main.css';
import './assets/js/main';
import Footer from "./Components/footer";
import Projects from './Components/projects';
import Header from './Components/header';
import AboutMe from './Components/intro';
import Skills from './Components/skills'
// import './assets/js/util';
// import './assets/sass/libs';
// import './assets/webfonts'

class App extends Component {
    render() {
        return (
		<div id="page-wrapper">
			<Header />
			<AboutMe />
			<Skills />
			<Projects />
			<Footer />
		</div>
        )
    }
}

export default App;
