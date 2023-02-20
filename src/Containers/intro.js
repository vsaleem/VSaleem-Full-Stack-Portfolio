import React from 'react';
import ProfilePic from '../assets/css/images/profilepic.jpg';
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
							<a href='#' className='btn-text'>
								Learn More &rarr;
							</a>
						</div>
						<div className='col'>
							<img
								src={ProfilePic}
								alt='profile of Victoria'
								className='composition__photo composition__photo_p1'
							/>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};
export default AboutMe;
