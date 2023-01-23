import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "../components/Loading";
import { AuthContext } from "../contexts/auth";
import { EntryBody } from "../styles/NewEntry";
import { CommonInput, CommonButton } from "../styles/SharedStyles";

export default function EditIncome() {
	const { id } = useParams();
	const [income, setIncome] = useState({ value: "", description: "" });
	const [loading, setLoading] = useState(true);

	const navigate = useNavigate();
	const { config, token } = useContext(AuthContext);

	useEffect(() => {
		async function getEntry() {
			const { data } = await axios.get(`/entries/${id}`, config);
			setIncome({ value: data.value, description: data.description });
			setLoading(false);
		}
		if (!localStorage.getItem("token") && !token) {
			alert("Sessão expirada. Faça login novamente.");
			navigate("/");
		}
		getEntry();
		// eslint-disable-next-line
	}, []);

	function handleChange(e) {
		const inputValue = e.target.value;
		const inputName = e.target.name;
		setIncome({ ...income, [inputName]: inputValue });
	}

	async function handleSubmit(e) {
		e.preventDefault();
		setLoading(true);
		const body = { ...income };
		body.value = body.value.replace(",", ".");
		body.value = Number(body.value).toFixed(2);
		try {
			await axios.put(`/entries/${id}`, body, config);
			navigate("/home");
		} catch (error) {
			if (!error.response) {
				alert("Não foi possível conectar ao servidor");
			} else {
				alert(error.response.data.error);
			}
			setLoading(false);
		}
	}

	if (loading) return <Loading />;

	return (
		<EntryBody>
			<h1>Editar entrada</h1>
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
				<CommonButton data-test="registry-save" type="submit">
					Atualizar entrada
				</CommonButton>
			</form>
		</EntryBody>
	);
}
