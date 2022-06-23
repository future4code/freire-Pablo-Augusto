import React from "react";
import styled from "styled-components";
import TelaCadastro from "./components/TelaCadastro";
import TelaDetalhes from "./components/TelaDetalhes";
import TelaLista from "./components/TelaLista";

// Componentes estilizados
const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 75vw;
  margin: 10px auto;
  padding: 15px;
  border: 1px solid black;
  border-radius: 15px;
  & > hr {
    width: 100%;
    margin: 15px 0;
  }
  & > button {
    align-self: center;
  }
`

class App extends React.Component {

  state = {
    tela: 'cadastro',
    idUsuarioDetalhado: ''
  }

  trocarTela = (telaDestino) => {
      this.setState({tela: telaDestino});
  }

  exibirDetalhes = (id) => {
    this.setState({idUsuarioDetalhado: id})
    this.trocarTela('detalhes');
  }

  render() {
    document.title = 'Labenusers';

    let telaExibida = '';
    let botaoTrocarTela = 'Lista de Usuários';
    let destino = 'lista';

    switch (this.state.tela) {
      case 'cadastro':
        destino = 'lista';
        botaoTrocarTela = 'Lista de Usuários';
        telaExibida = <TelaCadastro/>;
        break;
      case 'lista':
        destino = 'cadastro';
        botaoTrocarTela = 'Cadastro de Usuários';
        telaExibida = <TelaLista verDetalhes={this.exibirDetalhes}/>;
        break;
      case 'detalhes':
        destino = 'lista';
        botaoTrocarTela = 'Voltar';
        telaExibida = <TelaDetalhes id={this.state.idUsuarioDetalhado} apagou={() => this.trocarTela('lista')}/>;
        break;
      default:
        break;
    }

    return (
      <MainContainer>
        
        {telaExibida}
        
        <hr />
        <button onClick={() => this.trocarTela(destino)}>{botaoTrocarTela}</button>
      </MainContainer>
    );
  }
  
}

export default App;
