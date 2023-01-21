import { CommonButton, BodyForm, CommonInput } from "../styles/SharedStyles";
import { useState } from "react";
import { Link } from "react-router-dom";

function Signup() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [error, setError] = useState(false);

	const changeConfirm = (e) => {
		setConfirmPassword(e.target.value)
		if (e.target.value !== password && e.target.value !== "") {
			setError(true);
		} else if(e.target.value === password || e.target.value === ""){
			setError(false);
		}
	};

	return (
		<BodyForm>
			<h1>MyWallet</h1>
			<form>
				<CommonInput
					type="text"
					placeholder="Nome"
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>
				<CommonInput
					type="email"
					placeholder="E-mail"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
				<CommonInput
					className={error?"error":""}
					type="password"
					placeholder="Senha"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
				<CommonInput
					className={error?"error":""}
					type="password"
					placeholder="Confirme a senha"
					value={confirmPassword}
					onChange={changeConfirm}
				/>
				<p className={error?"":"hidden"}>Senhas devem ser iguais</p>
				<CommonButton>Cadastrar</CommonButton>
			</form>
			<Link to="/">Já tem uma conta? Entre agora!</Link>
		</BodyForm>
	);
}

export default Signup;
