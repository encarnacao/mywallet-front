import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Login from "./routes/Login";
import NewIncome from "./routes/NewIncome";
import NewExpense from "./routes/NewExpense";
import Signup from "./routes/Signup";
import EditIncome from "./routes/EditIncome";
import EditExpense from "./routes/EditExpense";

function App() {
	return (
		<Routes>
			<Route path="/" element={<Login />} />
			<Route path="/cadastro" element={<Signup />} />
			<Route path="/home" element={<Home />} />
			<Route path="/nova-entrada" element={<NewIncome />} />
			<Route path="/nova-saida" element={<NewExpense />} />
			<Route path="/editar-entrada/:id" element={<EditIncome />} />
			<Route path="/editar-saida/:id" element={<EditExpense />} />
		</Routes>
	);
}

export default App;
