import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Login from "./routes/Login";
import NewIncome from "./routes/NewIncome";
import Signup from "./routes/Signup";

function App() {
	return (
		<Routes>
			<Route path="/" element={<Login />} />
			<Route path="/cadastro" element={<Signup />} />
			<Route path="/home" element={<Home />} />
			<Route path="/nova-entrada" element={<NewIncome />} />
		</Routes>
	);
}

export default App;
