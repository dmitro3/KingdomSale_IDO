import React from "react";
import { Card } from "react-bootstrap";
import "../Home/homepage.css";
// cards for home page
function HCard(props) {
	return (
		<Card className="home-card text-center">
			<Card.Body>
				<Card.Title>
					<h3>{props.cardTitle}</h3>
				</Card.Title>
				<Card.Text
					style={
						{
							// width: props.cardText.length > 55 ? "83%" : "86%",
						}
					}
				>
					{props.cardText}
				</Card.Text>
			</Card.Body>
		</Card>
	);
}

export default HCard;
