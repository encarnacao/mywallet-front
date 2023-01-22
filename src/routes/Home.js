import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import Loading from "../components/Loading";
import { AuthContext } from "../contexts/auth";
import {
	LogoutButton,
	BodyHome,
	WalletLog,
	LogList,
	ButtonsDiv,
	Button,
} from "../styles/HomeStyles";

export default function Home() {
	const [user, setUser] = useState("");
	const [entries, setEntries] = useState([]);
	const [loading, setLoading] = useState(true);
	const navigate = useNavigate();
	const { config } = useContext(AuthContext);

	useEffect(() => {
		async function getEntries() {
			try {
				const { data } = await axios.get("/entries", config);
				setUser(data.name);
				setEntries(data.entries);
				setLoading(false);
			} catch (error) {
				if(!error.response){
					alert("Não foi possível conectar ao servidor");
				} else{
					alert(error.response.data);
				}
				navigate("/");
			}
		}
		getEntries();
		// eslint-disable-next-line
	}, []);

	function sumValues(array, type) {
		const values = array
			.filter((item) => item.type === type)
			.map((item) => item.value);
		const sum = values.reduce((acc, curr) => Number(acc) + Number(curr));
		return sum;
	}

	function calculateBalance() {
		const income = sumValues(entries, "income");
		const expense = sumValues(entries, "expense");
		const balance = income - expense;
		return balance;
	}

	function formatBalance() {
		const balance = calculateBalance();
		const balanceString = balance.toFixed(2).replace(".", ",");
		if (balance < 0) {
			return balanceString.slice(1);
		} else {
			return balanceString;
		}
	}

	function logout() {
		localStorage.removeItem("token");
		navigate("/");
	}
	if (loading) {
		return <Loading />;
	}
	const emptyData = !entries.length;
	return (
		<BodyHome>
			<div>
				<h1>Olá, {user}</h1>
				<LogoutButton onClick={logout} />
			</div>
			<WalletLog empty={emptyData ? 1 : 0}>
				{emptyData && <h2>Não há registros de entrada ou saída</h2>}
				<LogList>
					{entries.map((item) => (
						<li key={item.id}>
							<div>
								<span className="date">{item.date}</span>
								<span className="description">
									{item.description}
								</span>
							</div>
							<span className={item.type}>{item.value.replace(".",",")}</span>
						</li>
					))}
				</LogList>
				{!emptyData && (
					<div>
						<p className="balance">SALDO</p>
						<p
							className={
								calculateBalance() < 0 ? "expense" : "income"
							}
						>
							{formatBalance()}
						</p>
					</div>
				)}
			</WalletLog>
			<ButtonsDiv>
				<Button onClick={()=>navigate("/nova-entrada")}>
					<AiOutlinePlusCircle />
					<p>Nova entrada</p>
				</Button>

				<Button onClick={()=>navigate("/nova-saida")}>
					<AiOutlineMinusCircle />
					<p>Nova saída</p>
				</Button>
			</ButtonsDiv>
		</BodyHome>
	);
}
