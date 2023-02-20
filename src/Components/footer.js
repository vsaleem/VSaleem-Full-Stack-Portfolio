import React from 'react';

function Footer() {
	return (
		<>
			<section id='footer' className='footer-section'>
				<div className='contact-links container'>
					<h3 className='text-center heading-tertiary'>Say Hello!</h3>
					<div className='row contact-links-row my-5'>
						<ul>
							<li className='col' id='linkedin'>
								<a href='http://www.linkedin.com/in/victoriasaleem'>
									<i className='linked-icon lni lni-linkedin-original lni-32'></i>
								</a>
							</li>
							<li className='col' id='github'>
								<a href='https://github.com/vsaleem'>
									<i
										className='linked-icon lni lni-github-original lni-32'
										id='github'></i>
								</a>
							</li>
							<li className='col' id='email'>
								<a href='mailto:vic.saleem@gmail.com'>
									<i className='linked-icon lni lni-envelope lni-32'></i>
								</a>
							</li>
						</ul>
					</div>
				</div>

				<div className='copyright container'>
					<div className='back-to-top-action text-center pb-5' id='home'>
						<a href='#' className='btn btn-outline-dark'>
							Back to Top
						</a>
					</div>
					<div className='sticky-bottom'>
						<p className='text-center'>&copy; 2020-2023 Victoria Saleem</p>
					</div>
				</div>
			</section>
		</>
	);
}

export default Footer;
