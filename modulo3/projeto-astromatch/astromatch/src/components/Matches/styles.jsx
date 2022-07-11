import styled from "styled-components";

export const TelaMatches = styled.div`
    & p {
        text-align: center;
        margin-bottom: 15px;
    }
`;

export const DivMatches = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    padding: 5px 0;
    min-height: 550px;
    max-height: 550px;
    overflow-x: hidden;
    overflow-y: auto;
    
    &::-webkit-scrollbar {
        width: 10px;
    }

    &::-webkit-scrollbar-track {
        background: #f1f1f1;
        border-radius: 5px;
    }

    &::-webkit-scrollbar-thumb {
        background: #b0b0b0;
        border-radius: 5px;
    }

    &::-webkit-scrollbar-thumb:hover {
        background: #8b8b8b; 
    }
`;

export const Match = styled.div`
    width: 95%;
    background-color: #eeeeee;
    border-radius: 10px;
    border: 1px solid transparent;
    padding: 5px 10px;
    display: flex;
    align-items: center;
    gap: 10px;
    transition: 0.25s;

    & div {
        width: 50px;
        height: 50px;
        border-radius: 50% ;
        overflow: hidden;
        & img {
            width: 50px;
        }

    }
    &:hover {
        box-shadow: 0px 0px 6px 1px rgb(0 0 0 / 50%);
    }
`;

export const SemMatches = styled.div`
    margin: auto;
    color: gray;
`;