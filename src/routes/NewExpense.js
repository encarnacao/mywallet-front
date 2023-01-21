import dayjs from "dayjs";
import { useState } from "react";
import { EntryBody } from "../styles/NewEntry";
import { CommonInput, CommonButton } from "../styles/SharedStyles";

export default function NewExpense() {
	const [income, setIncome] = useState({ value: "", description: "" });
	function handleChange(e) {
		const inputValue = e.target.value;
		const inputName = e.target.name;
		setIncome({ ...income, [inputName]: inputValue });
	}

	function handleSubmit(e) {
		e.preventDefault();
		const date = dayjs().format("DD/MM");
		const body = { ...income, date, type: "expense" };
		console.log(body);
	}

	return (
		<EntryBody>
			<h1>Nova saída</h1>
			<form onSubmit={handleSubmit}>
				<CommonInput
					type="text"
					name="value"
					placeholder="Valor"
					value={income.value}
					onChange={handleChange}
				/>
				<CommonInput
					type="text"
					name="description"
					placeholder="Descrição"
					value={income.description}
					onChange={handleChange}
				/>
				<CommonButton type="submit">Salvar saída</CommonButton>
			</form>
		</EntryBody>
	);
}
