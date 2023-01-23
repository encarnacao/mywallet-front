import axios from "axios";
import dayjs from "dayjs";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "../components/Loading";
import { AuthContext } from "../contexts/auth";
import { EntryBody } from "../styles/NewEntry";
import { CommonInput, CommonButton } from "../styles/SharedStyles";

export default function NewIncome() {
	const [income, setIncome] = useState({ value: "", description: "" });
	const [loading, setLoading] = useState(false);

	const navigate = useNavigate();
	const { config, token } = useContext(AuthContext);

	useEffect(()=>{
		if(!localStorage.getItem("token") && !token){
			alert("Sessão expirada. Faça login novamente.");
			navigate("/");
		}
		// eslint-disable-next-line
	},[]);

	function handleChange(e) {
		const inputValue = e.target.value;
		const inputName = e.target.name;
		setIncome({ ...income, [inputName]: inputValue });
	}

	async function handleSubmit(e) {
		e.preventDefault();
		setLoading(true);
		const date = dayjs().format("DD/MM");
		const body = { ...income, date, type: "income" };
		body.value = body.value.replace(",", ".");
		body.value = Number(body.value).toFixed(2);
		try {
			await axios.post("/entries", body, config);
			navigate("/home");
		} catch (error) {
			if(!error.response){
				alert("Não foi possível conectar ao servidor");
			} else{
				alert(error.response.data.error);
			}
			setLoading(false);
		}
	}

	if (loading) return <Loading />;

	return (
		<EntryBody>
			<h1>Nova entrada</h1>
			<form onSubmit={handleSubmit}>
				<CommonInput
					data-test="registry-amount-input"
					type="text"
					name="value"
					placeholder="Valor"
					value={income.value}
					onChange={handleChange}
				/>
				<CommonInput
					data-test="registry-name-input"
					type="text"
					name="description"
					placeholder="Descrição"
					value={income.description}
					onChange={handleChange}
				/>
				<CommonButton data-test="registry-save" type="submit">Salvar entrada</CommonButton>
			</form>
		</EntryBody>
	);
}
