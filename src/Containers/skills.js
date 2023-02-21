import React from 'react';
import { Skills as skills } from '../utils/constants';

const Skills = () => {
	return (
		<>
			<section id='' className='skills-section'>
				<div className='text-center mb-5'>
					<h2 className='section-title heading-secondary'>
						Technical Proficiencies
					</h2>
				</div>
				<div className='skills-section__container'>
					<div className='skills-list' id='logo'>
						<ul>
							{skills.map((skill) => (
								<li className='lni lni-angle-double-left lni-8 skill-icon'>
									<span>{skill}</span>
								</li>
							))}
						</ul>
					</div>
				</div>
			</section>
		</>
	);
};
export default Skills;
