import { CommonButton, BodyForm, CommonInput } from "../styles/SharedStyles";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../contexts/auth";
import Loading from "../components/Loading";

function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [persist, setPersist] = useState(false);
	const [loading, setLoading] = useState(false);
	const { setToken } = useContext(AuthContext);
	const navigate = useNavigate();

	async function handleSubmit(e) {
		e.preventDefault();
        setLoading(true);
		const body = { email, password };
		try {
			const { data } = await axios.post("/login", body);
			if (persist) {
				localStorage.setItem("token", data.token);
			}
			setToken(data.token);
			navigate("/home");
		} catch (e) {
			alert(e.response.data);
            setLoading(false);
		}
	}

    if(loading){
        return <Loading />
    }

	return (
		<BodyForm>
			<h1>MyWallet</h1>
			<form onSubmit={handleSubmit}>
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
				<div>
					<input
						type="checkbox"
						onChange={() => setPersist(!persist)}
					/>
					{"Permanecer conectado"}
				</div>
				<CommonButton type="submit">Entrar</CommonButton>
			</form>
			<Link to="/cadastro">Primeira vez? Cadastre-se</Link>
		</BodyForm>
	);
}

export default Login;
