import React from "react";
import axios from "axios";
import Spinner from "./Spinner"
import styled from "styled-components";

// Componentes estilizados
const TelaUsuarios = styled.div`
    align-self: center;
`
const UsuarioExibido = styled.div`
    display: flex;
    border: 1px solid transparent;
    border-radius: 5px;
    background-color: ${({cor}) => (cor ? '#f0f0f0' : '#dddddd')}; 
    
    margin-bottom: 10px;
    padding: 0 10px;
    width: 400px;
    justify-content: space-between;

    cursor: pointer;

    &:hover {
        border-color: black;
    }
    & > span {
        height: 100%;
        width: 100%;
        padding: 10px 0;
        &:hover {
            text-decoration: underline;
        }
    }
    & button {
        margin: 10px 0;
    }
`

export default class TelaLista extends React.Component {

    state = {
        listaUsuarios: [],
        listaCarregada: false
    }

    listarUsuarios = () => {
        axios.get(
          "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
          {
            headers: {
              Authorization: "pablo-augusto-freire"
            }
          }
        ).then((response) => {
          response ? this.setState({listaCarregada: true}) : this.setState({listaCarregada: false})
          this.setState({listaUsuarios: response.data})
        }).catch((error) => {
          alert(error.message)
        })
    }

    deletarUsuario = (id) => {
        let confirmaExclusao = window.confirm("Tem certeza que deseja apagar o usuário?");
        if (confirmaExclusao) {
          axios.delete(
            `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`,
            {
              headers: {
                Authorization: "pablo-augusto-freire"
              }
            }
          ).then(() => {
            this.listarUsuarios();
            alert("Usuário apagado com sucesso!")
          }).catch((error) => {
            alert(error.message)
          });
        }
    }

    componentDidMount() {
        this.listarUsuarios();
    }

    render() {

        const listaUsuariosExibida = this.state.listaUsuarios.map((usuario, indice) => {
            let verificaIndice = indice % 2 === 0
            return (
            <UsuarioExibido cor={verificaIndice} key={usuario.id}>
              <span onClick={() => this.props.verDetalhes(usuario.id)}>{usuario.name}</span>
              <button onClick={() => {this.deletarUsuario(usuario.id)}}>Excluir</button>
            </UsuarioExibido>
            )
        })

        return (
        <TelaUsuarios>
          <h2>Lista de Usuários</h2>
          {this.state.listaCarregada ? listaUsuariosExibida : <Spinner/> } 
        </TelaUsuarios>
        );
    }
}