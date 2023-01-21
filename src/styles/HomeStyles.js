import styled from "styled-components";
import { IoExitOutline } from "react-icons/io5";

export const LogoutButton = styled(IoExitOutline)`
	color: #ffffff;
	font-size: 30px;
`;

export const BodyHome = styled.div`
	background-color: #8c11be;
	width: 100vw;
	height: 100vh;
	font-family: "Raleway", sans-serif;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	> div {
		width: 87%;
	}
	> div:first-child {
		display: flex;
		align-items: center;
		justify-content: space-between;
		font-weight: bold;
		font-size: 26px;
		color: #ffffff;
	}
`;

export const WalletLog = styled.div`
	background-color: #ffffff;
	height: 67%;
	border-radius: 5px;
	margin-top: 20px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: ${(props) => (props.empty ? "center" : "space-between")};
	padding: ${(props) => (props.empty ? "0 70px" : "15px")};
	> h2 {
		font-family: "Raleway", sans-serif;
		font-size: 20px;
		line-height: 23px;
		text-align: center;
		color: #868686;
	}
	> div:last-child {
        width: 100%;
		display: flex;
		justify-content: space-between;
	}
	.date {
		color: #c6c6c6;
	}
	.income {
		color: #03ac00;
	}
	.expense {
		color: #c70000;
	}
	.description {
		margin-left: 10px;
	}
    .balance{
        font-weight: bold;
    }
`;

export const LogList = styled.ul`
	width: 100%;
	font-family: "Raleway", sans-serif;
	font-size: 16px;
	li {
		display: flex;
		justify-content: space-between;
		margin-bottom: 10px;
		div {
			display: flex;
		}
	}
`;

export const ButtonsDiv = styled.div`
	display: flex;
	justify-content: space-between;
	margin-top: 20px;
`;

export const Button = styled.div`
	width: 48%;
	height: 114px;
	border-radius: 5px;
	background-color: #a328d6;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	padding: 10px;
	svg {
		color: #ffffff;
		font-size: 25px;
	}
	p {
		font-family: "Raleway", sans-serif;
		font-weight: 700;
		font-size: 17px;
		line-height: 20px;
		color: #ffffff;
	}
`;
