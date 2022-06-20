import React from "react";
import styled from "styled-components";

const Erro = styled.p`
    color: red;
`

export default class MensagemErro extends React.Component {
    render() {
        return 
        <p>
            O campo {this.props.nomeCampo} deve ser preenchido!
        </p>
    }
}