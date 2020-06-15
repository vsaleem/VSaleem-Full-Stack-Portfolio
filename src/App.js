import React, { Component } from 'react';
import './assets/css/main.css';
import './assets/js/main';
import GoodReadMe from './images/Good-Readme-ScreenShot.png';
import NoteTaker from "./images/NOTE TAKER - SCRN SHOT.png";
import BurgerApp from "./images/pic04.jpg"

// import './assets/js/util';
// import './assets/sass/libs';
// import './assets/webfonts'

class App extends Component {
    render() {
        return (
            <div id="page-wrapper">
			{/* <!-- Header --> */}
				<section id="header" className="wrapper">

					{/* <!-- Logo --> */}
						<div id="logo">
							<h1><a>Greetings! My name is Victoria!</a></h1>
							<p>I am a Software Engineer with a background in psychology that has developed skills in JavaScript, CSS, and Express.<br />
							</p>
						</div>

				</section>

			{/* <!-- Intro --> */}
				<section id="intro" className="wrapper style1">
					<div className="title">About Me</div>
					<div className="container">
						<p className="style1">So in case you were wondering what I'm all about ...</p>
					
						<p className="style1">
							Native of a small town located in Mansfield, Louisiana, I lived and worked in the NW Louisiana area for over 10 years before moving to <strong>Baltimore, Maryland</strong> to pursue a career in <strong>Web Development.</strong>
						<br/>
						<br/>
						 In my previous experience, I studied the effects trauma of children in foster care for over 3 years. This role brought me closer to my true passion: building front-end and back-end web applications that connect resources to children and families.
						<br/>
						<br/>
						In the next phase of my career, I will use Web Development as a reliable key to solve communication issues and improve accessibility with the clients' needs in mind.
						</p>
						
					</div>
				</section>

			{/* <!-- Main --> */}
				<section id="main" className="wrapper style2">
					<div className="title">Technical Skills</div>
					<div className="container">

						{/* <!-- Features --> */}
							<section id="features">
								<div className="feature-list">
									<div className="row">
										<div className="col-6 col-12-medium">
											<section>
												<h3 className="fab fa-html5">HTML5</h3>
												<p></p>
											</section>
										</div>
										<div className="col-6 col-12-medium">
											<section>
												<h3 className="fab solid fa-css3-alt">CSS</h3>
												<p></p>
											</section>
										</div>
										<div className="col-6 col-12-medium">
											<section>
												<h3 className="fab fa-js">JavaScript</h3>
												<p></p>
											</section>
										</div>
										<div className="col-6 col-12-medium">
											<section>
												<h3 className="fab fa-bootstrap">BOOTSTRAP and BULMA</h3>
												<p></p>
											</section>
										</div>
										<div className="col-6 col-12-medium">
											<section>
												<h3 className="fab fa-node">NODE.JS</h3>
												<p></p>
											</section>
										</div>
										<div className="col-6 col-12-medium">
											<section>
												<h3 className="fab fa-npm">npm</h3>
												<p></p>
											</section>
										</div>
									</div>
								</div>
							</section>

					</div>
				</section>

			{/* <!-- Highlights --> */}
				<section id="highlights" className="wrapper style3">
					<div className="title">Portfolio</div>
					<div className="container">
						<div className="row aln-center">

							{/* <!-- README PROJECT --> */}
							<div className="col-4 col-12-medium">
								<section className="highlight">
									<a href="https://github.com/vsaleem/Wk9-HW-Good-READme" className="image featured"><img src={GoodReadMe} alt="Good-Readme-ScreenShot"/></a>
									<h3><a href="https://github.com/vsaleem/Wk9-HW-Good-READme">GOOD README GENERATOR</a></h3>
									<p>This project uses a command-line application that dynamically generates a README.md file by using information prompted by the user and from the user’s GitHub account. This application is invoked with the following command: “node index”.</p>
									<ul className="actions">
										<li><a href="https://github.com/vsaleem/Wk9-HW-Good-READme" className="button style1">Learn More</a></li>
									</ul>
								</section>
							</div>

							{/* <!-- NOTETAKER PROJECT --> */}
							<div className="col-4 col-12-medium">
								<section className="highlight">
									<a href="https://note-undertaker-app.herokuapp.com/" className="image featured"><img src={NoteTaker} alt="Note Taker App Screen-Shot"/></a>
									<h3><a href="https://note-undertaker-app.herokuapp.com/">NOTE TAKER APP</a></h3>
									<p>Created an app that can write, save, and delete notes. Perfect for your "everyday" perfectionist! This app uses Express middle/backend and saves and retrieves note data from a JSON file. This app is deployed using Heroku.</p>
									<ul className="actions">
										<li><a href="https://github.com/vsaleem/HW_Week11_Express_Note_Taker" className="button style1">Learn More</a></li>
									</ul>
								</section>
							</div>

							{/* <!-- BURGERS PROJECT --> */}
							<div className="col-4 col-12-medium">
								<section className="highlight">
									<a href="https://github.com/vsaleem/Eat-DaBurger" className="image featured"><img src={BurgerApp} alt="Eat-DaBurger Screen-Shot"/></a>
									<h3><a href="https://github.com/vsaleem/Eat-DaBurger">EAT-DA-BURGER APP</a></h3>
									<p>This application demonstrates a full stack application using Handlebars, MySQL, Node, Express, and custom ORM. This app allows users to input the names of the burgers they want to consume and then they get to devour the burger by clicking the 'EAT' button.</p>
									<ul className="actions">
										<li><a href="https://github.com/vsaleem/Eat-DaBurger" className="button style1">Learn More</a></li>
									</ul>
								</section>
							</div>
						</div>
					</div>
				</section>

			{/* <!-- Footer --> */}
				<section id="footer" className="wrapper">
					<div className="title">Contact</div>
					<div className="container">
						<header className="style1">
							<h2>Would you like to chat?</h2>
						</header>
								{/* <!-- Contact --> */}
									<section className="feature-list small">
										<div className="row">
											{/* <!-- LOCATION --> */}
											<div className="col-4 col-12-small">
												
													<h3 className="">Location</h3>
													<p>
														Baltimore, Maryland
													</p>
											
											</div>
											{/* <!-- SOCIAL MEDIA IS INSERTED HERE --> */}
											<div className="col-4 col-12-small">
												
													<h3 className="">Social</h3>
													<p>
														<a href="http://www.linkedin.com/in/victoriasaleem">linkedin.com/in/victoriasaleem</a><br />
														<a href="https://github.com/vsaleem">github.com/vsaleem</a>
													</p>
												
											</div>
											{/* <!-- EMAIL --> */}
											<div className="col-4 col-12-small">
												
													<h3 className="">Email</h3>
													<p>
														<a href="mailto:vic.saleem@gmail.com">vic.saleem@gmail.com</a>
													</p>
		
											</div>
										</div>
									</section>
						</div>
						
						{/* <!-- COPYRIGHT --> */}
						<div id="copyright">

							<ul className="actions" id="home">
								<li><a href="#" className="button style3 large">Back to Top</a></li>
							</ul>
							<br/>
							<br/>
							<ul>
								<li>&copy; 2020 Victoria Saleem</li>
							</ul>
						</div>
					
				</section>

		</div>
        )
    }
}

export default App;
