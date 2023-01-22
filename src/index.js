import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { ResetCSS } from "./styles/Reset";
import axios from "axios";
import AuthProvider from "./contexts/auth";

const root = ReactDOM.createRoot(document.getElementById("root"));
axios.defaults.baseURL = process.env.REACT_APP_API_URL;

root.render(
	<React.StrictMode>
		<BrowserRouter>
			<AuthProvider>
				<ResetCSS />
				<App />
			</AuthProvider>
		</BrowserRouter>
	</React.StrictMode>
);
