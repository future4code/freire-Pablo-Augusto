import styled from 'styled-components';

export const MainContainer = styled.div`
    background-color: lightgray;
    min-width: 100vw;
    min-height: 100vh;
    display: flex;
`;

export const TelaInicial = styled.div`
    margin: auto;
    width: 400px;
    height: 650px;
    background-color: white;
    border: 1px solid black;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
`;

export const Menu = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    padding: 5px;
    border-bottom: 1px solid lightgray;
    margin-bottom: 25px;
    position: relative;
`;

export const AstroMatch = styled.div`
    position: absolute;
    left: 40%;
    
`