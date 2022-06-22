import React from "react";
import axios from "axios";

class App extends React.Component {

  state = {
    listaUsuarios: [],
    inputNome: '',
    inputEmail: '',
    tela: 'cadastro',
    listaCarregada: false
  }

  controlaInputNome = (event) => {
    this.setState({inputNome: event.target.value});
  }

  controlaInputEmail = (event) => {
    this.setState({inputEmail: event.target.value});
  }

  trocarTela = () => {
    if (this.state.tela === 'cadastro') {
      this.setState({tela: 'lista'})
    }
    if (this.state.tela === 'lista') {
      this.setState({tela: 'cadastro'})
    }
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
        this.listarUsuarios();
    }).catch((error) => {
        alert(error.message)
    });
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
    document.title = 'Labenusers'

    let telaExibida = ''
    let botaoTrocarTela = 'Lista de Usuários'

    const listaUsuariosExibida = this.state.listaUsuarios.map((usuario) => {
      return <li key={usuario.id}>
        {usuario.name}&nbsp;&nbsp;&nbsp;<button onClick={() => {this.deletarUsuario(usuario.id)}}>Excluir</button>
      </li>
    })

    if (this.state.tela === 'cadastro') {
      botaoTrocarTela = 'Lista de Usuários'
      telaExibida = <div>
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
      </div>
    } else if (this.state.tela === 'lista') {
        botaoTrocarTela = 'Cadastro de Usuários'
        telaExibida = <div>
          <h2>Lista de Usuários</h2>
          {this.state.listaCarregada ? <ul>{listaUsuariosExibida}</ul> : "Carregando..."}
          
        </div>
    }

    return (
      <div className="App">
        <button onClick={this.trocarTela}>{botaoTrocarTela}</button>
        <hr />
        {telaExibida}
      </div>
    );
  }
  
}

export default App;
