import styled from "styled-components";

export const EntryBody = styled.div`
	background-color: #8c11be;
	width: 100vw;
	height: 100vh;
	font-family: "Raleway", sans-serif;
	display: flex;
	flex-direction: column;
	padding: 25px;
	> h1 {
		color: #fff;
		font-size: 26px;
		font-weight: bold;
		margin: 0 0 40px 0;
	}
	> form {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		> input {
			width: 100%;
		}
		> button {
			width: 100%;
		}
	}
`;
