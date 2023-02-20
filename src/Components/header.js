import React from 'react';
import Pdf from '../assets/files/Victoria A.+Saleem_Front End Engineer-Resume.docx.pdf';

const Header = () => {
	return (
		<>
			<section id='header' className='header wrapper'>
				{/* Add Logo below later... */}
				{/* <div className='header__logo-box'></div> */}
				<div className='header__text-box'>
					<div className='header-primary'>
						<p className='header-primary--name'>Vic Saleem</p>
						<p className='header-primary--title'>Frontend Developer</p>
					</div>
					<a href={Pdf} className='resume-link btn-text'>
						Link to my Resume
					</a>
				</div>
			</section>
		</>
	);
};

export default Header;
