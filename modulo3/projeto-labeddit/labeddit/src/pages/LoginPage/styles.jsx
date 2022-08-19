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

export const FormLogin = styled.form`
    display: flex;
    flex-direction: column;
    gap: 12px;
    width: 100%;
    margin-top: 140px;
    & > div:last-child {
        margin-top: 40px;
    }
`;