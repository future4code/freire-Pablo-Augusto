import React from "react";
import styled from "styled-components";
import { keyframes } from "styled-components";
import { cor2 } from "../constants/Valores";
import { cor4 } from "../constants/Valores";

const spinAnimation = keyframes`
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
`

const SpinnerBall = styled.div`
    margin: 20px auto;
    border: 7px solid ${cor4};
    border-top: 7px solid ${cor2};
    border-radius: 50%;
    width: 40px;
    height: 40px;
    animation: ${spinAnimation} 1s linear infinite;
`

export default class Spinner extends React.Component {
    render() {
        return <SpinnerBall />
    }
}