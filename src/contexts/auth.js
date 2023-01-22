import { createContext } from "react";
import useStickyState from "../hooks/sticky";

export const AuthContext = createContext({});

function AuthProvider({ children }) {
	const [token, setToken] = useStickyState("", "token");
	const config = {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	};

	return (
		<AuthContext.Provider
			value={{
				token,
				setToken,
				config,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
}

export default AuthProvider;
