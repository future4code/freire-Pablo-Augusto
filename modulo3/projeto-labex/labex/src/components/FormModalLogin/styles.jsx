import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`

export const DivFormLogin = styled.div`
    display: ${(props) => (props.show ? 'flex' : 'none')};
    background-color: rgb(0,0,0,0.6);
    width: 100vw;
    height: 100vh;
    position: absolute;
    animation: ${fadeIn} 400ms;
`;

export const FormLogin = styled.div`
    display: flex;
    flex-direction: column;
    width: 400px;
    height: fit-content;
    background-color: white;
    margin: auto;
    opacity: 100%;
    z-index: 1;
    position: relative;
    padding: 20px;
    & h1 {
        margin-bottom: 30px;
    }
    & form {
        width: 100%;
        display: flex;
        flex-direction: column;
    }
    & form input {
        margin-bottom: 15px;
        padding: 5px 10px;
    }
`;

export const CloseButton = styled.button`
    position: absolute;
    right: 20px;
`;