import styled from "styled-components";

export const ContainerRegistration = styled.div`
    display: flex;
    height: 100vh;
`;

export const BodyRegistration = styled.div`
    margin: auto;
    max-width: 340px;
    min-width: 340px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
    & > div {
        width: 100%;
    }
`;

export const DivTexto = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    font-size: 14px;
    & h1 {
        font-size: 32px;
    }
    & p span {
        color: #4088CB;
        cursor: pointer;
        &:hover {
            text-decoration: underline;
        }
    }
    & > p:last-child {
        display: flex;
        align-items: center;
        gap: 8px;
    }
`;

export const DivTextFields = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-bottom: 30px;
`;