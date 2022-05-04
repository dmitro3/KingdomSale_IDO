import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import HCard from "../Components/HCard";
import HCard2 from "../Components/HCard2";
import { faBitcoinSign } from "@fortawesome/free-solid-svg-icons";
import "./homepage.css";
import { LinkContainer } from "react-router-bootstrap";
function Home() {
	return (
		<Container fluid>
			<section style={{ paddingTop: "95px" }}>
				<h1 style={{ textAlign: "center" }}>
					The Launchpad Protocol for Everyone!
				</h1>
				<p style={{ margin: "auto", textAlign: "center", width: "60%" }}>
					KingdomSale helps everyone to create their own tokens and token sales
					in few seconds.
				</p>

				<Row className="mt-4 justify-content-center">
					<Col xs={5} sm={4} md={2} style={{ textAlign: "center" }}>
						<LinkContainer to="/create">
							<Button className="home-btn">Create Now</Button>
						</LinkContainer>
					</Col>
					<Col xs={5} sm={4} md={2} style={{ textAlign: "center" }}>
						<Button className="home-btn">Learn More</Button>
					</Col>
				</Row>

				<Row className="mt-5" style={{ margin: "auto", width: "60%" }}>
					<Col sm={12} md={6} lg={3}>
						<HCard cardTitle="$349.2M" cardText="Total Liquidity Raised" />
					</Col>
					<Col sm={12} md={6} lg={3}>
						<HCard cardTitle="$349.2M" cardText="Total Liquidity Raised" />
					</Col>
					<Col sm={12} md={6} lg={3}>
						<HCard cardTitle="$349.2M" cardText="Total Liquidity Raised" />
					</Col>
					<Col sm={12} md={6} lg={3}>
						<HCard cardTitle="$349.2M" cardText="Total Liquidity Raised" />
					</Col>
				</Row>
			</section>
			<section style={{ paddingTop: "90px" }}>
				<h1 style={{ textAlign: "center" }}>
					A Suite of Tools for Token Sales.
				</h1>
				<p style={{ margin: "auto", textAlign: "center", width: "60%" }}>
					A suite of tools were built to help you create your own tokens and
					launchpads in a fast, simple and cheap way, with no prior code
					knowledge required and 100% decentralized!
				</p>

				<Row className="mt-5" style={{ margin: "auto", width: "80%" }}>
					<Col sm={12} md={6} lg={3}>
						<HCard2
							icon={faBitcoinSign}
							cardTitle="Standard"
							cardText="Mint standard tokens on ETH, BSC, AVAX, Fantom, Polygon."
						/>
					</Col>
					<Col sm={12} md={6} lg={3}>
						<HCard2
							icon={faBitcoinSign}
							cardTitle="Deflationary"
							cardText="Generate deflationary tokens with tax and/or charity functions."
						/>
					</Col>
					<Col sm={12} md={6} lg={3}>
						<HCard2
							icon={faBitcoinSign}
							cardTitle="Customization"
							cardText="Create a token sale for your own custom token very easily."
						/>
					</Col>
					<Col sm={12} md={6} lg={3}>
						<HCard2
							icon={faBitcoinSign}
							cardTitle="Launchpad"
							cardText="Use the token you mint to create a launchpad with just a few clicks."
						/>
					</Col>
					<Col sm={12} md={6} lg={3}>
						<HCard2
							icon={faBitcoinSign}
							cardTitle="Branding"
							cardText="Adding logo, social links, description, listing on KingdomSale."
						/>
					</Col>
					<Col sm={12} md={6} lg={3}>
						<HCard2
							icon={faBitcoinSign}
							cardTitle="Management"
							cardText="The portal to help you easily update content for your launchpad."
						/>
					</Col>
					<Col sm={12} md={6} lg={3}>
						<HCard2
							icon={faBitcoinSign}
							cardTitle="Community"
							cardText="Promote your launchpad to thousands of buyers on KingdomSale."
						/>
					</Col>
					<Col sm={12} md={6} lg={3}>
						<HCard2
							icon={faBitcoinSign}
							cardTitle="Locking"
							cardText="Lock your liquidity to PinkSwap, PancakeSwap after presale."
						/>
					</Col>
				</Row>
			</section>
			<section style={{ paddingTop: "90px", paddingBottom: "180px" }}>
				<h1 style={{ textAlign: "center" }}>A Growing Protocol Ecosystem.</h1>
				<p style={{ margin: "auto", textAlign: "center", width: "60%" }}>
					We build a suite of tools for the world of decentralized finance.
					PinkMoon, KingdomSale, PinkElon PinkLock, PinkSwap, we Pink
					everything!
				</p>

				<Row
					className="mt-5 justify-content-md-center"
					style={{ margin: "auto", width: "70%" }}
				>
					<Col sm={12} md={6} lg={3}>
						<HCard2
							icon={faBitcoinSign}
							cardTitle="PinkMoon"
							cardText="The best launchpad for professional teams."
						/>
					</Col>
					<Col sm={12} md={6} lg={3}>
						<HCard2
							icon={faBitcoinSign}
							cardTitle="Kingdom"
							cardText="Launch a token sale with a few clicks."
						/>
					</Col>
					<Col sm={12} md={6} lg={3}>
						<HCard2
							icon={faBitcoinSign}
							cardTitle="PinkSwap"
							cardText="Swap tokens and farming $PinkS."
						/>
					</Col>
					<Col sm={12} md={6} lg={3}>
						<HCard2
							icon={faBitcoinSign}
							cardTitle="PinkLock"
							cardText="Locking liquidity on PinkSwap."
						/>
					</Col>
					<Col sm={12} md={6} lg={3}>
						<HCard2
							icon={faBitcoinSign}
							cardTitle="PinkElon"
							cardText="The first meme token on PinkMoon."
						/>
					</Col>
					<Col sm={12} md={6} lg={3}>
						<HCard2
							icon={faBitcoinSign}
							cardTitle="PinkWallet"
							cardText="Crypto wallet, buy, store, exchange & earn."
						/>
					</Col>
				</Row>
			</section>
		</Container>
	);
}

export default Home;
