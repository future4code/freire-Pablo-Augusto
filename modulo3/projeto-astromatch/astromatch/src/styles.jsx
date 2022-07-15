import styled from 'styled-components';

export const MainContainer = styled.div`
    font-family: 'Roboto', sans-serif;
    background-image: linear-gradient(to top, #ff878d, #ffbc79);
    min-width: 100vw;
    min-height: 100vh;
    display: flex;
`;

export const TelaInicial = styled.div`
    margin: auto;
    width: 400px;
    height: 650px;
    background-color: white;
    border: 1px solid lightgray;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    box-shadow: 0 0 10px black;
`;

export const Menu = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    padding: 5px 15px;
    border-bottom: 1px solid lightgray;
    margin-bottom: 25px;
    position: relative;
`;

export const AstroMatch = styled.div`
    font-family: 'Lobster', cursive;
    font-size: 24px;
    & span:first-child {
        color: #ff8d1b;
    }
    & span:last-child {
        color: #ff5159;
    }
`