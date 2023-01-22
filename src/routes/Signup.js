import { CommonButton, BodyForm, CommonInput } from "../styles/SharedStyles";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Loading from "../components/Loading";

function Signup() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [error, setError] = useState(false);
	const [loading, setLoading] = useState(false);

	const navigate = useNavigate();

	async function handleSubmit(e) {
		e.preventDefault();
		if (error) return;
		setLoading(true);
		const body = { name, email, password };
		try {
			await axios.post("/sign-up", body);
			navigate("/login");
		} catch (error) {
			if (!error.response) {
				alert("Não foi possível conectar ao servidor");
			} else {
				alert(error.response.data);
			}
			setLoading(false);
		}
	}
	if (loading) {
		return <Loading />;
	}

	const changeConfirm = (e) => {
		setConfirmPassword(e.target.value);
		if (e.target.value !== password && e.target.value !== "") {
			setError(true);
		} else if (e.target.value === password || e.target.value === "") {
			setError(false);
		}
	};

	return (
		<BodyForm>
			<h1>MyWallet</h1>
			<form onSubmit={handleSubmit}>
				<CommonInput
					data-test="name"
					type="text"
					placeholder="Nome"
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>
				<CommonInput
					data-test="email"
					type="email"
					placeholder="E-mail"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
				<CommonInput
					data-test="password"
					className={error ? "error" : ""}
					type="password"
					placeholder="Senha"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
				<CommonInput
					data-test="conf-password"
					className={error ? "error" : ""}
					type="password"
					placeholder="Confirme a senha"
					value={confirmPassword}
					onChange={changeConfirm}
				/>
				<p className={error ? "" : "hidden"}>Senhas devem ser iguais</p>
				<CommonButton data-test="sign-up-submit" type="submit">
					Cadastrar
				</CommonButton>
			</form>
			<Link to="/">Já tem uma conta? Entre agora!</Link>
		</BodyForm>
	);
}

export default Signup;
