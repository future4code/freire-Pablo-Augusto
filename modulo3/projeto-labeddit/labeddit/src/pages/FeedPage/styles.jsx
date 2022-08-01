import styled from "styled-components";

export const FeedContainer = styled.div`
    min-width: 360px;
    max-width: 800px;
    padding: 10px 20px;
    margin: auto;
    display: flex;
    flex-direction: column;
    gap: 15px;
`;

export const FormPost = styled.form`
    display: flex;
    flex-direction: column;
    gap: 12px;
    width: 100%;
    margin-top: 20px;
    & div {
        border-radius: 12px;
        background-color: #ededed;
    }
`;

export const DivPosts = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    padding-bottom: 10px;
`;