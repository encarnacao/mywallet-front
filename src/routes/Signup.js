import { CommonButton, Body, CommonInput } from "../styles/SharedStyles";
import { useState } from "react";

function Signup() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	return (
		<Body>
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
					type="password"
					placeholder="Senha"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
                <CommonInput
                    type="password"
                    placeholder="Confirme a senha"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />
				<CommonButton>Cadastrar</CommonButton>
			</form>
			<a href="/">Já tem uma conta? Entre agora!</a>
		</Body>
	);
}

export default Signup;
