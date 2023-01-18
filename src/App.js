import { Routes, Route } from "react-router-dom";
import Login from "./routes/Login";
import Signup from "./routes/Signup";

function App() {
	return (
		<Routes>
			<Route path="/" element={<Login />} />
			<Route path="/cadastro" element={<Signup />} />
		</Routes>
	);
}

export default App;
