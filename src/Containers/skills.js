import React from "react";

function Skills() {
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
							<li className='lni lni-angle-double-left lni-8 skill-icon'>
								<span> React</span>
							</li>
							<li className='lni lni-angle-double-left lni-8 skill-icon'>
								<span> Redux</span>
							</li>
							<li className='lni lni-angle-double-left lni-8 skill-icon'>
								<span> TypeScript</span>
							</li>
							<li className='lni lni-angle-double-left lni-8 skill-icon'>
								<span>{` JavaScript (ES6+)`}</span>
							</li>
							<li className='lni lni-angle-double-left lni-8 skill-icon'>
								<span> HTML</span>
							</li>
							<li className='lni lni-angle-double-left lni-8 skill-icon'>
								<span> CSS</span>
							</li>
							<li className='lni lni-angle-double-left lni-8 skill-icon'>
								<span> SASS / SCSS</span>
							</li>
							<li className='lni lni-angle-double-left lni-8 skill-icon'>
								<span> Node JS</span>
							</li>
							<li className='lni lni-angle-double-left lni-8 skill-icon'>
								<span> git</span>
							</li>
							<li className='lni lni-angle-double-left lni-8 skill-icon'>
								<span> npm</span>
							</li>
							<li className='lni lni-angle-double-left lni-8 skill-icon'>
								<span> BootStrap</span>
							</li>
							<li className='lni lni-angle-double-left lni-8 skill-icon'>
								<span> MaterialUI</span>
							</li>
							<li className='lni lni-angle-double-left lni-8 skill-icon'>
								<span> USWDS</span>
							</li>
							<li className='lni lni-angle-double-left lni-8 skill-icon'>
								<span> Jest + React Library Unit Testing</span>
							</li>
						</ul>
					</div>
				</div>
			</section>
		</>
	);
}
export default Skills;
