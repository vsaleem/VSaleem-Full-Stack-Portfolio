import React from 'react';
import GoodReadMe from '../assets/css/images/ReadmeAppScreenShot.png';
import { Projects } from '../utils/constants';

const { READMEAPP } = Projects;

const ReadMeGenerator = () => {
	return (
		<div className='col-sm project__project-one'>
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
								{READMEAPP.TITLE}
							</span>
						</h4>
						<div className='card__stack'>
							<ul>
								<li>{READMEAPP.STACK.NODE}</li>
								<li>{READMEAPP.STACK.JS}</li>
							</ul>
						</div>
					</div>
				</div>
				<div className='card__side card__side--back card__side--back-1'>
					<div className='card__details px-5 pt-5'>
						<p className='card__details__project-description'>
							{READMEAPP.DETAILS.P1}
						</p>
						<p className='card__details__project-description'>
							{READMEAPP.DETAILS.P2}
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
	);
};

export default ReadMeGenerator;
