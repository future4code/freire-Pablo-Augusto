import styled from "styled-components"

export const TelaPerfis = styled.div`
    min-height: 400px;
    max-height: 400px;
    width: 100%;
`;

export const BoxImagem = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    width: 90%;
    height: 460px;
    margin: 5px auto;
    border-radius: 10px;
    box-shadow: 0px 0px 6px 1px rgb(0 0 0 / 70%);

    &::before {
        position: absolute;
        content: "";
        width: 100%;
        height: 100%;
        background: linear-gradient(0deg,rgb(0 0 0 / 40%) 5%,rgba(0,0,0,0) 40%);
        z-index: 3;
    }

    &::after {
        content: "";
        background: url(${props => props.img}) no-repeat center;
        background-size: cover;
        filter: blur(30px);
        width: 100%;
        height: 100%;
        position: absolute;
        z-index: 1;
    }

    & img {
        width: 100%;
        z-index: 2;    
    }
`;

export const BoxTexto = styled.div`
    color: white;
    text-shadow: 0em 0em 0.2em black;
    text-align: left;
    width: 100%;
    padding: 0 20px;
    position: absolute;
    z-index: 4;
    top: 340px;

    
    & p:first-child {
        font-size: 24px;
        font-weight: bold;
        margin-bottom: 10px;
    }
`;

export const Botoes = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 20px 15px;
`;