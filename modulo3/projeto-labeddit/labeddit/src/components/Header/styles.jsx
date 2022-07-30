import styled from 'styled-components';

export const HeaderContainer = styled.header`
    background-color: #EDEDED;
    width: 100%;
    height: 8vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    box-shadow: 0px 0px 4px 2px #d7d7d7;
    & > img {
        height: 6vh;
    }
    & > div {
        width: 100px;
    }
`;