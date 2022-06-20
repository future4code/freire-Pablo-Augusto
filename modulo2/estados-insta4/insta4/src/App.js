import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';
import fotoTecaUser from './img/teca-foto-user.jpg';
import fotoTicaUser from './img/tica-foto-user.jpg';
import fotoTecaPost from './img/teca-foto-post.jpg';
import fotoTicaPost from './img/tica-foto-post.jpg';

//Link para foto aleatória
//https://picsum.photos/50/50
//https://picsum.photos/200/150

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

const FormContainer = styled.div`
  margin-bottom: 30px;
  width: 300px;
  border: 1px solid black;
  padding: 10px;
  gap: 5px;
  
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
`

const DivBotao = styled.div`
  width: 100%;
  padding-top: 5px;
  text-align: center;
`

const Botao = styled.button`
  padding: 5px 10px;
`

class App extends React.Component {
  state = {
    estadoListaPosts: [
      {
        nomeUsuario: 'Tica',
        fotoUsuario: fotoTicaUser,
        fotoPost: fotoTicaPost,
      },
      {
        nomeUsuario: 'Teca',
        fotoUsuario: fotoTecaUser,
        fotoPost: fotoTecaPost,
      }
    ],
    inputNome: '',
    inputFotoPerfil: '',
    inputFotoPost: ''
  }

  handleInputNome = (event) => {
    this.setState({inputNome: event.target.value})
  }

  handleInputFotoPerfil = (event) => {
    this.setState({inputFotoPerfil: event.target.value})
  }

  handleInputFotoPost = (event) => {
    this.setState({inputFotoPost: event.target.value})
  }

  adicionaPost = () => {
    const novaPostagem = {
      nomeUsuario: this.state.inputNome,
      fotoUsuario: this.state.inputFotoPerfil,
      fotoPost: this.state.inputFotoPost
    }

    const listaPostagens = [...this.state.estadoListaPosts, novaPostagem]

    this.setState({estadoListaPosts: listaPostagens})

  }

  render() {

    const exibeListaPosts = this.state.estadoListaPosts.map((post, indice) => {
      return <Post key={indice}
                nomeUsuario={post.nomeUsuario}
                fotoUsuario={post.fotoUsuario}
                fotoPost={post.fotoPost}
              />
    })

    return (
      <MainContainer>
        <FormContainer>
          <label htmlFor="nome">Nome:</label>
          <input type="text" id="nome" value={this.state.inputNome} onChange={this.handleInputNome} />
          <label htmlFor="link-foto-perfil">URL Foto Perfil:</label>
          <input type="text" id="link-foto-perfil" value={this.state.inputFotoPerfil} onChange={this.handleInputFotoPerfil} />
          <label htmlFor="link-foto-post">URL Foto Post:</label>
          <input type="text" id="link-foto-post" value={this.state.inputFotoPost} onChange={this.handleInputFotoPost} />
          <DivBotao><Botao onClick={this.adicionaPost}>Postar</Botao></DivBotao>
        </FormContainer>
        {exibeListaPosts.reverse()}
      </MainContainer>
    );
  }
}

export default App;
