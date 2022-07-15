import styled from "styled-components";
import { keyframes } from "@emotion/react";

export const pulse = keyframes`
    0% {
        transform: scale(1);
    }
    10% {
        transform: scale(1.133);
    }
    20% {
        transform: scale(1.266);
    }
    30% {
        transform: scale(1.4);
    }
    40% {
        transform: scale(1.32);
    }
    50% {
        transform: scale(1.24);
    }
    60% {
        transform: scale(1.16);
    }
    70% {
        transform: scale(1.08);
    }
    100% {
        transform: scale(1);
    }
`;
export const PulsatingDiv = styled.div`
    margin: 40% auto;
    width: fit-content;
`;