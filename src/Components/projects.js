// Add image of project and name on front side of card,
// then on back add project description and Technologies used.

import React from 'react';
import GoodReadMe from '../images/CLI - Readme - App - Screen Shot copy.png';
import NoteTaker from '../images/NOTE TAKER - SCRN SHOT.png';
import BurgerApp from '../images/healthy-turkey-burger.jpg';
import HotRestaurant from '../images/Hot-Restaurant-Screen-Shot.png';

function Projects(props) {
	return (
		<>
			<section id='' className='projects-section'>
				<div className='text-center mb-5'>
					<h2 className='section-title heading-secondary'>Projects</h2>
				</div>
				<div className='container'>
					<div className='row'>
						{/* <!-- README PROJECT --> */}
						<div className='col project__project-one'>
							<div className='card'>
								<div className='card__side card__side--front'>
									<div className='card__image card__image-1'>
										<a
											href='https://github.com/vsaleem/Wk9-HW-Good-READme'
											className=''>
											<img src={GoodReadMe} alt='Good-Readme-CLI-ScreenShot' />
										</a>
									</div>
									<div className='card__heading'>
										<h4>
											<span className='card__heading-span card__heading-span-1'>
												{/* <a href='https://github.com/vsaleem/Wk9-HW-Good-READme'> */}
												GOOD README GENERATOR
												{/* </a> */}
											</span>
										</h4>
										<div className='card__stack'>
											<ul>
												<li>JavaScript</li>
												<li>NodeJS</li>
											</ul>
										</div>
									</div>
								</div>
								<div className='card__side card__side--back card__side--back-1'>
									<div className='card__details px-5 pt-5'>
										<p className='card__details__project-description'>
											This project uses a command-line application that
											dynamically generates a README.md file by using
											information prompted by the user and from the user’s
											GitHub account. This application is invoked with the
											following command: “node index”.
										</p>
										<p className='learn-more'>
											<a
												href='https://github.com/vsaleem/Wk9-HW-Good-READme'
												className='btn-text'>
												Launch &rarr;
											</a>
										</p>
									</div>
								</div>
							</div>
						</div>

						{/* <!-- NOTETAKER PROJECT --> */}
						<div className='col project__project-two'>
							<div className='card'>
								<div className='card__side card__side--front'>
									<div className='card__image'>
										<a
											href='https://note-undertaker-app.herokuapp.com/'
											className=''>
											<img src={NoteTaker} alt='Note Taker App Screen-Shot' />
										</a>
									</div>
									<div className='card__heading'>
										<h4>
											<span className='card__heading-span card__heading-span-1'>
												NOTE TAKER APP
											</span>
										</h4>
										<div className='card__stack'>
											<ul>
												<li>JavaScript</li>
											</ul>
										</div>
									</div>
								</div>
								<div className='card__side card__side--back card__side--back-2'>
									<div className='card__details px-5 pt-5'>
										<p className='card__details__project-description'>
											Created an app that can write, save, and delete notes.
											Perfect for your "everyday" perfectionist! This app uses
											Express middle/backend and saves and retrieves note data
											from a JSON file. This app is deployed using Heroku.
										</p>
										<p className='learn-more'>
											<a
												href='https://github.com/vsaleem/HW_Week11_Express_Note_Taker'
												className='btn-text'>
												Launch &rarr;
											</a>
										</p>
									</div>
								</div>
							</div>
						</div>

						{/* <!-- BURGERS PROJECT --> */}
						<div className='col project__project-three'>
							<div className='card'>
								<div className='card__side card__side--front'>
									<div className='card__image'>
										<a
											href='https://github.com/vsaleem/Eat-DaBurger'
											className=''>
											<img src={BurgerApp} alt='Eat-DaBurger Screen-Shot' />
										</a>
									</div>
									<div className='card__heading'>
										<h4>
											<span className='card__heading-span card__heading-span-1'>
												{/* <a href='https://github.com/vsaleem/Eat-DaBurger'> */}
												EAT-DA-BURGER APP
												{/* </a> */}
											</span>
										</h4>
										<div className='card__stack'>
											<ul>
												<li>Handlebars</li>
												<li>MySQL</li>
												<li>Express</li>
												<li>NodeJS</li>
												<li>Custom ORM</li>
											</ul>
										</div>
									</div>
								</div>

								<div className='card__side card__side--back card__side--back-3'>
									<div className='card__details px-5 pt-5'>
										<p className='card__details__project-description'>
											This application demonstrates a full stack application
											using Handlebars, MySQL, Node, Express, and custom ORM.
											This app allows users to input the names of the burgers
											they want to consume and then they get to devour the
											burger by clicking the 'EAT' button.
										</p>
										<p className='learn-more'>
											<a
												href='https://github.com/vsaleem/Eat-DaBurger'
												className='btn-text'>
												Launch &rarr;
											</a>
										</p>
									</div>
								</div>
							</div>
						</div>

						{/* <!-- HOT RESTAURANT PROJECT --> */}
						{/* <div className='col'>
							<div className=' project__project-four'>
								<div className='card'>
									<div className='card__side card__side--front'>
										<div className='card__image'>
											<a
												href='https://github.com/vsaleem/hotRestaurant'
												className=''>
												<img
													src={HotRestaurant}
													alt='Hot-Restaurant Screen-Shot'
												/>
											</a>
										</div>
										<div className='card__heading'>
											<h4>
												<span className='card__heading-span card__heading-span-1'>
													HOT RESTAURANT APP
												</span>
											</h4>
											<div className='card__stack'>
												<ul>
													<li>React</li>
													<li>JS</li>
													<li>SASS</li>
													<li>NodeJS</li>
													<li>MongoDB</li>
												</ul>
											</div>
										</div>
									</div>
									<div className='card__side card__side--back card__side--back-4'>
										<div className='card__details'>
											<p className='card__details__project-description'>
												Basic app demonstrating Node and Express with jQuery.
												Overall purpose is to help schedule reservation
												requests. Restaurant has just 5 tables available. First
												five requests get a reservation, every request after
												that is sent to the waiting list.
											</p>
											<ul className='learn-more'>
												<li>
													<a
														href='https://github.com/vsaleem/hotRestaurant'
														className='btn-text'>
														Launch {'->'}
													</a>
												</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
						</div> */}
					</div>
				</div>
			</section>
		</>
	);
}
export default Projects;
