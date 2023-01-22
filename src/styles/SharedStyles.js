import styled from "styled-components";

export const CommonButton = styled.button`
	font-family: "Raleway", sans-serif;
	font-weight: bold;
	font-size: 20px;
	background-color: #a328d6;
	color: #fff;
	border: none;
	border-radius: 5px;
	width: 100%;
	height: 50px;
	margin: 10px auto;
`;

export const CommonInput = styled.input`
	width: 100%;
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
	&.error{
		border: 1px solid red;
		background-color: #ff8e8e;
	}
`;

export const BodyForm = styled.div`
	background-color: #8c11be;
	width: 100vw;
	height: 100vh;
	font-family: "Raleway", sans-serif;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 0 25px;
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
		max-width: 400px;
		>div{
			color: white;
			font-size: 16px;
			font-weight: bold;
		}
		> p {
			color: red;
			font-size: 14px;
			margin: 0 auto;
		}
		.hidden{
			display: none;
		}
	}
	> a {
		color: #fff;
		font-size: 16px;
		font-weight: bold;
		margin-top: 40px;
        text-decoration: none;
	}
`;
