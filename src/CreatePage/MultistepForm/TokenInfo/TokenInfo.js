import React from "react";
import { Form, Button, Row } from "react-bootstrap";

function TokenInfo() {
	return (
		<Form>
			<Form.Group className="mb-3" controlId="formBasicEmail">
				<Form.Label>
					<strong>Token Address</strong>
				</Form.Label>
				<Form.Control type="text" placeholder="Enter token address" />
				<Form.Text className="text-muted">Create pool fee: 1 BNB</Form.Text>
			</Form.Group>

			<Form.Group className="mb-3" controlId="formBasicCheckbox">
				<Form.Label>
					<strong>Currency</strong>
				</Form.Label>
				<Form.Check label="BNB" name="group1" type="radio" id="radio-1" />
				<Form.Check label="BUSD" name="group1" type="radio" id="radio-2" />
				<Form.Check label="USDT" name="group1" type="radio" id="radio-3" />
			</Form.Group>

			<Row className="justify-content-center align-items-center">
				<Button
					variant="primary"
					type="submit"
					style={{ width: "75px", maring: "auto", textAlign: "center" }}
				>
					Next
				</Button>
			</Row>
		</Form>
	);
}

export default TokenInfo;
