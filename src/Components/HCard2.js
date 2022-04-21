import React from "react";
import { Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// cards for home page
function HCard2(props) {
	return (
		<Card className="home-card text-center">
			<FontAwesomeIcon
				style={{ color: "#42C2FF" }}
				icon={props.icon}
				size="4x"
				className="card-img"
			/>
			<Card.Body>
				<Card.Title>
					<h3>{props.cardTitle}</h3>
				</Card.Title>
				<Card.Text>{props.cardText}</Card.Text>
			</Card.Body>
		</Card>
	);
}

export default HCard2;
