import styled from "styled-components";

export const BodyLogin = styled.div`
    display: flex;
    height: 100vh;
`;

export const ContainerLogin = styled.div`
    margin: auto;
    max-width: 600px;
    min-width: 340px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
    & > div {
        width: 100%;
    }
    & > div:first-child {
        display: flex;
        flex-direction: column;
        gap: 12px;
    }
`;