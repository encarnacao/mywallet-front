import { useEffect, useState } from "react";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { LogoutButton, BodyHome, WalletLog, LogList, ButtonsDiv, Button } from "../styles/HomeStyles";


export default function Home() {
	const [user, setUser] = useState("Fulano");
	const [data, setData] = useState([]);

	const navigate = useNavigate();

	function sumValues(array, type) {
		const values = array
			.filter((item) => item.type === type)
			.map((item) => item.value.replace(",", "."));
		const sum = values.reduce((acc, curr) => Number(acc) + Number(curr));
		return sum;
	}

	function calculateBalance() {
		const income = sumValues(data, "income");
		const expense = sumValues(data, "expense");
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

	function logout(){
		localStorage.removeItem("token");
		navigate("/");
	}

	const emptyData = !data.length;
	return (
		<BodyHome>
			<div>
				<h1>Olá, {user}</h1>
				<LogoutButton onClick={logout}/>
			</div>
			<WalletLog empty={emptyData ? 1 : 0}>
				{emptyData && <h2>Não há registros de entrada ou saída</h2>}
				<LogList>
					{data.map((item) => (
						<li key={item.id}>
							<div>
								<span className="date">{item.date}</span>
								<span className="description">
									{item.description}
								</span>
							</div>
							<span className={item.type}>{item.value}</span>
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
				<Button>
					<AiOutlinePlusCircle />
					<p>Nova entrada</p>
				</Button>
				<Button>
					<AiOutlineMinusCircle />
					<p>Nova saída</p>
				</Button>
			</ButtonsDiv>
		</BodyHome>
	);
}