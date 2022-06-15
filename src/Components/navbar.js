//@ts-check
import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
// import { LinkContainer } from 'react-router-bootstrap';

// Add new toggle
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";

const NavBar = (props) => {
	return (
		<>
			<Navbar
				id=''
				className=''
				collapseOnSelect
				expand='lg'
				bg='light'
				variant='light'>
				<Container>
					{/* <LinkContainer to='/'>
                    <Navbar.Brand>
                        {"Victoria A Saleem"}
                    </Navbar.Brand>
                </LinkContainer> */}
					{/* float toggle icon button */}
					<NavbarToggle className='' id='' aria-controls='basic-navbar-nav' />
					<Navbar.Collapse id='basic-navbar-nav navbarSupportedContent'>
						<Nav className='navbar-nav mr-auto navPanel'>
							<Nav.Link className='link'>
								<i className='far fa-address-book'> </i>
								About Me
							</Nav.Link>
							<Nav.Link className='link'>
								<i className='far fa-clone'> </i>
								Projects
							</Nav.Link>
							<Nav.Link className='link'>
								<i className='far fa-calendar-alt'> </i>
								Mood Calendar ~ Coming soon. ~
							</Nav.Link>
							<Nav.Link className='link'>
								<i className='far fa-chart-bar'> </i>
								Contact
							</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>

				{/* <Navbar.Brand className="navbar-logo" href="" id="">Victoria Saleem</Navbar.Brand> */}
				{/* <a className="navbar-brand navbar-logo" href="">Victoria Saleem</a> */}
			</Navbar>
		</>
	);
};

export default NavBar;
