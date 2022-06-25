import React from "react";
import Home from "./pages/Home";

export default class App extends React.Component {

  state = {
    entrou: false
  }

  entrar = () => {
    this.setState({entrou: !this.state.entrou})
  }

  render() {

    let telaExibida = '';

    {
      this.state.entrou ? 
      telaExibida = <Home voltar={this.entrar}/> :
      telaExibida = <div><span>Bem-vindo(a) ao Labefy</span><p><button onClick={this.entrar}>Entrar</button></p></div>
    }

    return (

      

      <div>
        {telaExibida}
      </div>
    )
  }
}