import { Oval } from "react-loader-spinner";
import styled from "styled-components";

export default function Loading() {
	return (
		<Container>
			<Oval
				ariaLabel="loading-indicator"
				height={200}
				width={200}
				strokeWidth={5}
				strokeWidthSecondary={2}
				color="white"
				secondaryColor="#b175c9"
			/>
		</Container>
	);
}

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
    background-color: #8c11be;
`;