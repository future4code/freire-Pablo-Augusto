import React from "react";
import axios from "axios";
import styled from "styled-components";
import Spinner from "./Spinner";

// Componentes estilizados
const DivDetalhes = styled.div`
    align-self: center;
`

const Botoes = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export default class TelaDetalhes extends React.Component {

    state = {
        usuarioDetalhado: {},
        modo: 'exibição',
        carregou: false,
        inputNome: '',
        inputEmail: ''
    }

    controlaInputNome = (event) => {
        this.setState({inputNome: event.target.value});
      }
    
    controlaInputEmail = (event) => {
        this.setState({inputEmail: event.target.value});
    }

    alternarModo = (modoAtual) => {
        this.setState({modo: modoAtual})
        if (modoAtual === 'edição') {
            this.setState({inputNome: this.state.usuarioDetalhado.name})
            this.setState({inputEmail: this.state.usuarioDetalhado.email})
        }
    }

    procuraUsuarioPorId = (id) => {
        axios.get(
            `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`,
            {
                headers: {
                    Authorization: "pablo-augusto-freire"
                }
            }
        ).then((response) => {
            response ? this.setState({carregou: true}) : this.setState({carregou: false})
            this.setState({usuarioDetalhado: response.data})
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
            alert("Usuário apagado com sucesso!");
            this.props.apagou();
          }).catch((error) => {
            alert(error.message)
          });
        }
    }

    editarUsuario = (id) => {
        const body = {
            name: this.state.inputNome,
            email: this.state.inputEmail
          }
      
          axios.put(
            `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`,
            body,
            {
              headers: {
                Authorization: "pablo-augusto-freire"
              }
            }
          ).then(() => {
              alert(`Usuário alterado com sucesso!`);
              this.alternarModo('exibição');
              this.procuraUsuarioPorId(id);
          }).catch((error) => {
              alert(error.message)
          });
    }

    componentDidMount() {
        this.procuraUsuarioPorId(this.props.id)
    }

    render() {

        let mostraDetalhes = ''
        let mostraOuEdita = ''
        let editaOuSalva = ''
        
        if (this.state.modo === 'exibição') {
            mostraOuEdita = <div>
                <p>Nome: {this.state.usuarioDetalhado.name}</p>
                <p>E-mail: {this.state.usuarioDetalhado.email}</p>
            </div>;
            editaOuSalva = <button onClick={() => this.alternarModo('edição')}>Editar</button>;
        } else if (this.state.modo === 'edição') {
            mostraOuEdita = <div>
                <p><input 
                type="text"
                placeholder="Digite o nome"
                value={this.state.inputNome}
                onChange={this.controlaInputNome}
                /></p>
                <p><input 
                type="email"
                placeholder="Digite o email"
                value={this.state.inputEmail}
                onChange={this.controlaInputEmail}
                /></p>
            </div>;
            editaOuSalva = <button onClick={() => this.editarUsuario(this.state.usuarioDetalhado.id)}>Salvar</button>;
        }

        if(this.state.carregou) {
            mostraDetalhes = <div>

                {mostraOuEdita}   

                <Botoes>
                    {editaOuSalva}            
                    <button onClick={() => this.deletarUsuario(this.state.usuarioDetalhado.id)}>Deletar</button>   
                </Botoes>
                
            </div>
        } else {
            mostraDetalhes = ''
        }

        return(
            <DivDetalhes>
                <h2>Detalhes do usuario</h2>
                {this.state.carregou ? mostraDetalhes : <Spinner/> }
            </DivDetalhes>
        );
    }
}