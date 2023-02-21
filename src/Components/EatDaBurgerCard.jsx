import React from 'react';
import BurgerApp from '../images/healthy-turkey-burger.jpg';
import { Projects } from '../utils/constants';

const { EATDABURGERAPP } = Projects;

const EatDaBurgerApp = () => {
	return (
		<div className='col-sm project__project-three'>
			<div className='card'>
				<div className='card__side card__side--front'>
					<div className='card__image'>
						<a href='https://github.com/vsaleem/Eat-DaBurger' className=''>
							<img src={BurgerApp} alt='Eat-DaBurger Screen-Shot' />
						</a>
					</div>
					<div className='card__heading'>
						<h4>
							<span className='card__heading-span card__heading-span-1'>
								{EATDABURGERAPP.TITLE}
							</span>
						</h4>
						<div className='card__stack'>
							<ul>
								<li>{EATDABURGERAPP.STACK.HANDLEBARS}</li>
								<li>{EATDABURGERAPP.STACK.MYSQL}</li>
								<li>{EATDABURGERAPP.STACK.EXPRESS}</li>
								<li>{EATDABURGERAPP.STACK.NODE}</li>
								<li>{EATDABURGERAPP.STACK.ORM}</li>
							</ul>
						</div>
					</div>
				</div>

				<div className='card__side card__side--back card__side--back-3'>
					<div className='card__details px-5 pt-5'>
						<p className='card__details__project-description'>
							{EATDABURGERAPP.DETAILS.P1}
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
	);
};

export default EatDaBurgerApp;
