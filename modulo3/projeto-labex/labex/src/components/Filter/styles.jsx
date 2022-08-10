import styled from "styled-components";

export const DivFilter = styled.div`
    border: 1px solid blue;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #e0e0e0;
    padding: 15px 20px;
    width: 80vw;
    margin: auto;
    & input {
        height: 23px; 
    }
    & span {
        display: flex;
    }
    & span label {
        background-color: white;
        border: 1px solid gray;
        border-right: none;
        font-size: 13px;
        padding: 2px;
        display: flex;
        align-items: center;
    }
    & span select {
        border-left: none;
        background-color: white;
        height: 23px;
    }
    & button {
        height: 23px;
    }
`