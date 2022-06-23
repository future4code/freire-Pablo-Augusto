import React from "react";
import axios from "axios";
import styled from "styled-components";

// Componentes estilizados
const FormCadastro = styled.div`
    align-self: center;
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 400px;
    & > button {
        width: fit-content;
        align-self: flex-end;
    }

`

export default class TelaCadastro extends React.Component {

    state = {
        inputNome: '',
        inputEmail: ''
    }

    controlaInputNome = (event) => {
        this.setState({inputNome: event.target.value});
    }
    
    controlaInputEmail = (event) => {
        this.setState({inputEmail: event.target.value});
    }

    criaUsuario = () => {
        const body = {
          name: this.state.inputNome,
          email: this.state.inputEmail
        }
    
        axios.post(
          "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
          body,
          {
            headers: {
              Authorization: "pablo-augusto-freire"
            }
          }
        ).then(() => {
            alert(`Usuário ${this.state.inputNome} criado com sucesso!`);
            this.setState({inputNome: ''});
            this.setState({inputEmail: ''});
        }).catch((error) => {
            alert(error.message)
        });
    }

    render() {
        return (
            <FormCadastro>
                <h2>Cadastro de Usuários</h2>
                <input 
                type="text"
                placeholder="Digite o nome"
                value={this.state.inputNome}
                onChange={this.controlaInputNome}
                />
                <input 
                type="email"
                placeholder="Digite o email"
                value={this.state.inputEmail}
                onChange={this.controlaInputEmail}
                />
                <button onClick={this.criaUsuario}>Criar Usuário</button>
            </FormCadastro>
        );
    }
}