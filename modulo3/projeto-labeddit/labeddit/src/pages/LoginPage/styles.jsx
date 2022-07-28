import styled from "styled-components";

export const ContainerLogin = styled.div`
    display: flex;
    height: 100vh;
`;

export const BodyLogin = styled.div`
    margin: auto;
    max-width: 600px;
    min-width: 340px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
    & img {
        width: 100px;
    }
    & > div {
        width: 100%;
    }
`;

export const DivLogo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
`;

export const DivTextFields = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
`;