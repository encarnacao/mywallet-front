import styled from "styled-components";

export const CommonButton = styled.button`
	font-family: "Raleway", sans-serif;
	font-weight: bold;
	font-size: 20px;
	background-color: #a328d6;
	color: #fff;
	border: none;
	border-radius: 5px;
	width: 87%;
	max-width: 400px;
	height: 50px;
	margin: 10px auto;
`;

export const CommonInput = styled.input`
	width: 87%;
	max-width: 400px;
	height: 60px;
	border-radius: 5px;
	font-family: "Raleway", sans-serif;
	font-size: 20px;
	border: none;
	margin: 10px auto;
	padding: 0 10px;
	&:focus {
		outline: none;
	}
`;

export const Body = styled.div`
	background-color: #8c11be;
	width: 100vw;
	height: 100vh;
	font-family: "Raleway", sans-serif;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	> h1 {
		color: #fff;
		font-family: "Saira Stencil One", cursive;
		font-size: 32px;
		margin-bottom: 40px;
	}
	> form {
		display: flex;
		flex-direction: column;
		width: 100%;
	}
	> a {
		color: #fff;
		font-size: 16px;
		font-weight: bold;
		margin-top: 40px;
        text-decoration: none;
	}
`;
