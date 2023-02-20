// Add image of project and name on front side of card,
// then on back add project description and Technologies used.

import React from 'react';
import ReadMeGenerator from '../Components/ReadMeCard';
import NoteTaker from '../Components/NoteTakerCard';
import EatDaBurgerApp from '../Components/EatDaBurgerCard';

const Projects = () => {
	return (
		<>
			<section id='' className='projects-section'>
				<div className='text-center mb-5'>
					<h2 className='section-title heading-secondary'>Projects</h2>
				</div>
				<div className='container'>
					{/* Add new row for 2022-2023 Projects with feature card */}
					<div className='row'>
						<ReadMeGenerator />
						<NoteTaker />
						<EatDaBurgerApp />
					</div>
				</div>
			</section>
		</>
	);
};

export default Projects;
