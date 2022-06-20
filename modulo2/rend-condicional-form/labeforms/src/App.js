import React from 'react';
import styled from 'styled-components';
import FormEtapa1 from './components/FormEtapa1';
import FormEtapa2 from './components/FormEtapa2';
import FormEtapa3 from './components/FormEtapa3';
import FormEtapaFinal from './components/FormEtapaFinal';

//Componentes estilizados
const MainContainer = styled.div`
  text-align: center;
`

export default class App extends React.Component {

  state = {
    formulario: 1,
  }

  exibeFormEtapa2 = () => {
    this.setState({formulario: 2})
  }

  exibeFormEtapa3 = () => {
    this.setState({formulario: 3})
  }

  exibeFormFinal = () => {
    this.setState({formulario: 4})
  }

  render() {
    let pagina

    switch (this.state.formulario) {
      case 1:
        pagina = <FormEtapa1 proximoForm2={this.exibeFormEtapa2} proximoForm3={this.exibeFormEtapa3}/>;
        break;
      case 2:
        pagina = <FormEtapa2 proximoForm={this.exibeFormFinal} />;
        break;
      case 3:
        pagina = <FormEtapa3 proximoForm={this.exibeFormFinal} />;
        break;
      case 4:
        pagina = <FormEtapaFinal/>
      default:
        break;
    }

    return (
      <MainContainer>
        {pagina}
      </MainContainer>
    );
  }
}