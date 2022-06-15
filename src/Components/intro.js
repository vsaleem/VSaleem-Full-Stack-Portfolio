import React from "react";
import ProfilePic from "../assets/css/images/profilepic.jpg";
// import ProfilePic2 from "../assets/css/images/pic06.jpg";
// import ProfilePic3 from "../assets/css/images/overlay.png";

function AboutMe(props) {
	return (
		<>
			{/* <!-- Intro --> */}
			<section id='intro' className='about-me-section'>
				<div className='text-center mb-5'>
					<h2 className='heading-secondary'>About Me</h2>
				</div>
				<div className='container'>
					<div className='row'>
						<div className='about-me__information col'>
							<p className='about-me__body'>
								Hi! My name is Victoria and I enjoy being creative and solving
								problems on the internet. My interest in web development began
								early when I was in elementary school back in 1999-- my mother
								was an teacher and I often stayed after school with her, and to
								fill the time, I spent hours learning about the wonders of the
								internet!
							</p>
							<p className='about-me__body'>
								Fast-forward to today, I've had the opportunity to work with
								some talented developerss in Baltimore, MD and the DC Metro
								area. My focus these days is building thoughtful, accessible,
								and inclusive products that provide the best digital experiences
								to all.
							</p>

							<a href='#' className='btn-text'>
								Learn More &rarr;
							</a>
						</div>
						<div className='col'>
							<img
								src={ProfilePic}
								alt='profile of Victoria'
								className='composition__photo  composition__photo_p1'
							/>
							{/* <img
								src={ProfilePic2}
								alt=''
								className='composition__photo composition__photo_p2'
							/> */}
							{/* <img
								src={ProfilePic3}
								alt=''
								className='composition__photo composition__photo_p3'
							/> */}
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
export default AboutMe;
