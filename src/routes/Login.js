import { CommonButton, BodyForm, CommonInput } from "../styles/SharedStyles";
import { useState } from "react";

function Login(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return (
        <BodyForm>
            <h1>MyWallet</h1>
            <form>
                <CommonInput type="email" placeholder="E-mail" value={email} onChange={e => setEmail(e.target.value)} />
                <CommonInput type="password" placeholder="Senha" value={password} onChange={e => setPassword(e.target.value)} />
                <CommonButton>Entrar</CommonButton>
            </form>
            <a href="/cadastro">Primeira vez? Cadastre-se</a>
        </BodyForm>
    );
}


export default Login;