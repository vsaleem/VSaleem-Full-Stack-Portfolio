import React from 'react';
import { aboutMe } from '../utils/constants';

const AboutMe = () => {
	return (
		<>
			<section id='intro' className='about-me-section'>
				<div className='text-center mb-5'>
					<h2 className='heading-secondary'>About Me</h2>
				</div>
				<div className='container'>
					<div className='row'>
						<div className='about-me__information col'>
							<p className='about-me__body'>{aboutMe.PARAGRAPH.INTRO}</p>
							<p className='about-me__body'>{aboutMe.PARAGRAPH.BODY}</p>
							<p className='about-me__body'>{aboutMe.PARAGRAPH.CONCLUSION}</p>
							<a
								href='http://www.linkedin.com/in/victoriasaleem'
								className='btn-text'>
								LinkedIn &rarr;
							</a>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};
export default AboutMe;
