import React, {useState, useEffect} from "react";
import { Form, Button, Row } from "react-bootstrap";
import IDO from './ido.js'
import { BigNumber } from "ethers";

export default function TokenInfo() {
	const [account, setAccount] = useState();
	const [errorMessage, setErrorMessage] = useState(null);
	const [defaultAccount, setDefaultAccount] = useState(null);
	const [connButtonText, setConnButtonText] = useState('Connect Wallet');
	const [feeToken, setFeeToken] = useState('');
	const [minEth, setMinEth] = useState();
	const [maxEth, setMaxEth] = useState();
	const [maxTokens, setMaxTokens] = useState();
	const [tokenPrice, setTokenPrice] = useState();
	const [startTime, setStartTime] = useState();
	const [endTime, setEndTime] = useState();
	const [price, setPrice] = useState();

	const connectWalletHandler =async () => {
		if (window.ethereum && window.ethereum.isMetaMask) {

			window.ethereum.request({ method: 'eth_requestAccounts'})
			
			.then(result => {
				accountChangedHandler(result[0]);
				setConnButtonText('Wallet Connected');
			})
			.catch(error => {
				setErrorMessage(error.message);
			
			});
			const accounts = await window.ethereum.request({ method: 'eth_requestAccounts'});
			setAccount(accounts[0])
			console.log("ADDRESS: ", accounts[0])
		} else {
			console.log('Need to install MetaMask');
			setErrorMessage('Please install MetaMask browser extension to interact');
		}
	}

	const accountChangedHandler = (newAccount) => {
		setDefaultAccount(newAccount);
	}

	const chainChangedHandler = () => {
		window.location.reload();
	}

	window.ethereum.on('accountsChanged', accountChangedHandler);

	window.ethereum.on('chainChanged', chainChangedHandler);

	const onSubmit = async (event) => {
		event.preventDefault()

		var _tokenPrice = tokenPrice
		
		const _feeToken = feeToken

		var _endTime = endTime
		
		var _minEth = minEth
		
		var _maxEth =maxEth
		
		var _maxTokens = maxTokens

		console.log(_tokenPrice, _feeToken, _endTime, _minEth, _maxEth, _maxTokens)
		try{
			const tx = await IDO.methods.createIDO(
				_tokenPrice,
				_feeToken,
				_endTime,
				_minEth,
				_maxEth,
				_maxTokens
			).send({
				from:account
			}) 
			await tx.wait()
			console.log(tx)
		}catch(err){
			setErrorMessage(err.message)
		}
	}

	return (
		<Form onSubmit={onSubmit}>
			<Button
					onClick={connectWalletHandler}
					variant="info"
					style={{ width: "150px", maring: "auto", textAlign: "center", marginBottom: '5px' }}
				>
					{connButtonText}
				</Button>
				<Form.Label>
					<strong>Address: {defaultAccount}</strong>
				</Form.Label>
			<Form.Group className="mb-3" controlId="formBasicEmail">
				<Form.Label>
					<strong>Token Address</strong>
				</Form.Label>
				<Form.Control 
					onChange={event =>setFeeToken(event.target.value)} 
					type="text" 
					placeholder="Enter token address" />
				<Form.Text className="text-muted">Users Will Pay BNB For Your Token</Form.Text>
			</Form.Group>
			<Form.Group className="mb-3" controlId="formBasicCheckbox">
				<Form.Label>
					<strong>ICO DETAILS</strong>
				</Form.Label>
				<Form.Control 
					onChange={event =>setMinEth(event.target.value)} 
					style={{marginBottom: '5px'}} 
					type="text" 
					placeholder="Enter Min ETH" 
				/>
				<Form.Control 
					onChange={event =>setMaxEth(event.target.value)} 
					style={{marginBottom: '5px'}} 
					type="text" 
					placeholder="Enter Max ETH" 
				/>
				<Form.Control 
					onChange={event =>setMaxTokens(event.target.value)} 
					style={{marginBottom: '5px'}} 
					type="text" 
					placeholder="Enter Max Tokens" 
				/>
				<Form.Control 
					onChange={event =>setTokenPrice(event.target.value)} 
					style={{marginBottom: '5px'}} 
					type="text" 
					placeholder="Enter Token Price" 
				/>
				<Form.Control 
					onChange={event =>setEndTime(event.target.value)} 
					style={{marginBottom: '5px'}} 
					type="text" 
					placeholder="Enter ICO End Time" 
				/>
			</Form.Group>

			<Row className="justify-content-center align-items-center">
				<Button
					variant="info"
					type="submit"
					style={{ width: "150px", maring: "auto", textAlign: "center" }}
				>
					Create IDO
				</Button>
			</Row>
			{errorMessage}
		</Form>
	);
}


