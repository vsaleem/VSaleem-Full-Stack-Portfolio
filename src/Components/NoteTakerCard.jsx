import React from 'react';
import NoteTakerPic from '../images/NOTE TAKER - SCRN SHOT.png';
import { Projects } from '../utils/constants';

const { NOTETAKERAPP } = Projects;

const NoteTaker = () => {
	return (
		<div className='col-sm project__project-two'>
			<div className='card'>
				<div className='card__side card__side--front'>
					<div className='card__image'>
						<a href='https://note-undertaker-app.herokuapp.com/' className=''>
							<img src={NoteTakerPic} alt='Note Taker App Screen-Shot' />
						</a>
					</div>
					<div className='card__heading'>
						<h4>
							<span className='card__heading-span card__heading-span-1'>
								{NOTETAKERAPP.TITLE}
							</span>
						</h4>
						<div className='card__stack'>
							<ul>
								<li>{NOTETAKERAPP.STACK.PUREJS}</li>
							</ul>
						</div>
					</div>
				</div>
				<div className='card__side card__side--back card__side--back-2'>
					<div className='card__details px-5 pt-5'>
						<p className='card__details__project-description'>
							{NOTETAKERAPP.DETAILS.P1}
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
	);
};

export default NoteTaker;
