import { React, useState, useEffect } from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";

import "./nav.css";

function Navigation() {
	const [show, setShow] = useState(true);
	const [tempScroll, setTempScroll] = useState(0);
	// method for creating nav bar fade in and out
	const controlNavbar = () => {
		setTempScroll(window.scrollY);

		if (tempScroll < window.scrollY) {
			setShow(false);
		} else {
			setShow(true);
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", controlNavbar);
		return () => {
			window.removeEventListener("scroll", controlNavbar);
		};
	}, [tempScroll]);

	return (
		<>
			<Navbar
				expand="lg"
				fixed="top"
				collapseOnSelect
				style={{
					visibility: show ? "visible" : "hidden",
				}}
				className={`nav-dissapear ${show && "nav-col"}`}
			>
				<Container fluid>
					<Navbar.Brand href="/">KingdomSale</Navbar.Brand>
					<Navbar.Toggle aria-controls="responsive-navbar-nav" />
					<Navbar.Collapse
						id="responsive-navbar-nav"
						className="justify-content-end"
					>
						<Nav className="nav-resize">
							<Nav.Item>
								<Nav.Link href="/create">
									<Button className="nav-btn">+ Create</Button>
								</Nav.Link>
							</Nav.Item>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</>
	);
}

export default Navigation;
