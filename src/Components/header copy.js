import React from 'react';
// import Pdf from '../assets/css/Victoria A.+Saleem_Front End Engineer-Resume.docx.pdf';

function HeaderCopy(props) {
	return (
		<>
			{/* <!-- Header --> */}
			<section id='header' className='header wrapper'>
				{/* <!-- Logo --> */}
				<div className='header__logo-box'></div>

				{/* Heading */}
				<div className='header__text-box'>
					<h1 className='header-primary'>
						<p className='header-primary--name'>Under Construction!</p>
						<p className='header-primary--title'>
							Taking some time to update my site, so please check back later.{' '}
						</p>
					</h1>

					{/* Button to Resume */}
					{/* <a href={Pdf} className='resume-link btn-text'>
						Link to my Resume
					</a> */}
				</div>
			</section>
		</>
	);
}

export default HeaderCopy;
