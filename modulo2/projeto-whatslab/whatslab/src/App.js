import React from 'react';
import styled from 'styled-components';

//Imagens

import bgImage from './img/whatslab-bg-image.png';
import iconeEnviar from './img/icone-enviar.png';

//Componentes estilizados

const Cabecalho = styled.div`
  width: 100vw;
  height: 10vh;
  background-color: #128C7F;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`

const ConteudoPrincipal = styled.div`
  background-color: white;
  width: 100vw;
  height: 100vh;
`

const DivMensagens = styled.div`
  background-image: url(${bgImage});
  width: 80vw;
  min-height: 60vh;
  margin: 0 auto;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  padding: 15px 10px;
`
const Balao = styled.div`
  display: flex;
`

const Triangulo = styled.div`
  width: 0; 
  height: 0; 
  border-left: 15px solid transparent;
  border-top: 10px solid #D8FDD2;
`

const MensagemExibida = styled.div`
  background-color: #D8FDD2;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
  margin-bottom: 8px;
  padding: 1px 15px;
  width: fit-content;
  & p:last-child {
    margin-left: 5px;
  }
`

const DivCamposTexto = styled.div`
  background-color: #ebebeb;
  padding: 15px 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80vw;
  min-height: 50px;
  margin: 0 auto;
  gap: 10px;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
`

const InputStyledUsuario = styled.input`
  border-radius: 10px;
  padding: 10px;
  outline: none;
  border: 1px solid transparent;
  background-color: white;
  width: 20vw;
`

const InputStyledMensagem = styled.input`
  border-radius: 10px;
  padding: 10px;
  width: 75vw;
  outline: none;
  border: 1px solid transparent;
  background-color: white;
  width: 60%;
`

const BotaoEnviar = styled.button`
  width: 48px;
  height: 48px;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  transition: background-color 0.2s;
  &:active {
    background-color: #aaaaaa;
  };
`

const Icone = styled.img`
  width: 28px;
  height: 28px;
  transform: translate(3px, 1px);
`

//App Principal
class App extends React.Component {
  state = {
    conversa: [],
    inputUsuario: '',
    inputMensagem: ''
  }

  //Métodos

  handleUsuario = (event) => {
    this.setState({inputUsuario: event.target.value})
  }

  handleMensagem = (event) => {
    this.setState({inputMensagem: event.target.value})
  }

  enviaMesagem = () => {
    const novaEntrada = {
      usuario: this.state.inputUsuario,
      mensagem: this.state.inputMensagem
    }

    const conversaAtualizada = [...this.state.conversa, novaEntrada]

    this.setState({conversa: conversaAtualizada})
    this.setState({inputUsuario: ''})
    this.setState({inputMensagem: ''})
  }

  //Render
  
  render() {

    const exibeConversa = this.state.conversa.map((entrada, indice) => {
      return <Balao>
        <Triangulo></Triangulo>
        <MensagemExibida key={indice}>
          <p><strong>{entrada.usuario}</strong></p>
          <p>{entrada.mensagem}</p>
        </MensagemExibida>
      </Balao> 
    })

    return (
      <ConteudoPrincipal>
        <Cabecalho><h1>Web WhatsLab</h1></Cabecalho>
        <DivMensagens>
          {exibeConversa}
        </DivMensagens>

        <DivCamposTexto>
          <InputStyledUsuario 
          type='text' 
          id='usuario' 
          value={this.state.inputUsuario}
          onChange={this.handleUsuario}
          placeholder='Usuário'
          /> 
          <InputStyledMensagem 
          type='text' 
          id='mensagem' 
          value={this.state.inputMensagem}
          onChange={this.handleMensagem}
          placeholder='Mensagem'
          />
          <BotaoEnviar onClick={this.enviaMesagem}><Icone src={iconeEnviar}/></BotaoEnviar>
        </DivCamposTexto>
      </ConteudoPrincipal>
    );
  }
  
}

export default App;
