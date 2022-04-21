import React from "react";
import Home from "./Home/Home";
import Navigation from "./Navbar/Navigation";

import "./Global.css";
import Create from "./CreatePage/Create";
import { Routes, Route } from "react-router-dom";

function App() {
	return (
		<React.Fragment>
			<Navigation />

			<Routes>
				<Route path="/" element={<Home />}></Route>
				<Route path="/create" element={<Create />}></Route>
			</Routes>
		</React.Fragment>
	);
}

export default App;
