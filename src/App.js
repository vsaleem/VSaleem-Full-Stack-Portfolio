import React, { Component } from 'react';
import './assets/css/main.css';
import './assets/js/main';
import Footer from "./Components/footer";
import Projects from './Components/projects';

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
							<h1>Greetings! My name is Victoria!</h1>
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

			<Projects />
			<Footer />
		</div>
        )
    }
}

export default App;
