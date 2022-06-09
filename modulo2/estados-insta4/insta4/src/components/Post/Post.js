import React from 'react'
import styled from 'styled-components'

//Imagens
import {IconeComContador} from '../IconeComContador/IconeComContador'
import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'
import iconeSaved from '../../img/icone-saved.png'
import iconeNotSaved from '../../img/icone-not-saved.png'
import iconeShared from '../../img/icone-share.png'

//Componentes
import {SecaoComentario} from '../SecaoComentario/SecaoComentario'
import { SecaoCompartilhar } from '../SecaoCompartilhar/SecaoCompartilhar'

//Componentes estilizados
const PostContainer = styled.div`
  border: 1px solid gray;
  width: 300px;
  margin-bottom: 10px;
`

const PostHeader = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding-left: 10px;
`

const PostFooter = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  padding: 0 10px 10px 10px;
  justify-content: space-between;
`

const PostFooterShare = styled.div`
  display: flex;
  align-items: center;
  padding: 0 10px;
  justify-content: space-between;
`

const UserPhoto = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 10px;
  border-radius: 50%;
`

const PostPhoto = styled.img`
  width: 100%;
`

class Post extends React.Component {
  state = {
    curtido: false,
    numeroCurtidas: 0,
    comentando: false,
    numeroComentarios: 0,
    salvo: false,
    valorSalvo: '',
    compartilhando: false,
    numeroCompartilhadas: 0
  }

  onClickCurtida = () => {
    if (!this.state.curtido) {
      this.setState({numeroCurtidas: this.state.numeroCurtidas + 1});
    } else {
      this.setState({numeroCurtidas: this.state.numeroCurtidas - 1});
    }
    this.setState({curtido: !this.state.curtido});
  }

  onClickComentario = () => {
    this.setState({
      comentando: !this.state.comentando
    })
  }

  onClickSalvo = () => {
    this.setState({salvo: !this.state.salvo})
    if (!this.state.salvo) {
      this.setState({valorSalvo: 'Saved'});
    } else {
      this.setState({valorSalvo: ''});
    }

  }

  onClickCompartilhar = () => {
    this.setState({
      compartilhando: !this.state.compartilhando
    })
  }

  aoCompartilhar = () => {
    this.setState({
      compartilhando: false,
      numeroCompartilhadas: this.state.numeroCompartilhadas + 1
    })
  }

  aoEnviarComentario = () => {
    this.setState({
      comentando: false,
      numeroComentarios: this.state.numeroComentarios + 1
    })
  }

  render() {
    let iconeCurtida
    let iconePostSalvo

    if(this.state.curtido) {
      iconeCurtida = iconeCoracaoPreto
    } else {
      iconeCurtida = iconeCoracaoBranco
    }

    if (this.state.salvo) {
      iconePostSalvo = iconeSaved
    } else {
      iconePostSalvo = iconeNotSaved
    }

    let componenteComentario
    let componenteCompartilhar

    if(this.state.comentando) {
      componenteComentario = <SecaoComentario aoEnviar={this.aoEnviarComentario}/>
    }

    if(this.state.compartilhando) {
      componenteCompartilhar = <SecaoCompartilhar aoEnviar={this.aoCompartilhar}/>
    }

    return <PostContainer>
      <PostHeader>
        <UserPhoto src={this.props.fotoUsuario} alt={'Imagem do usuario'}/>
        <p>{this.props.nomeUsuario}</p>
      </PostHeader>

      <PostPhoto src={this.props.fotoPost} alt={'Imagem do post'}/>

      <PostFooter>
        <IconeComContador
          icone={iconeCurtida}
          onClickIcone={this.onClickCurtida}
          valorContador={this.state.numeroCurtidas}
        />

        <IconeComContador
          icone={iconeComentario}
          onClickIcone={this.onClickComentario}
          valorContador={this.state.numeroComentarios}
        />

        <IconeComContador
          icone={iconeShared}
          onClickIcone={this.onClickCompartilhar}
          valorContador={this.state.numeroCompartilhadas}
        />

        <IconeComContador
          icone={iconePostSalvo}
          onClickIcone={this.onClickSalvo}
          valorContador={this.state.valorSalvo}
        />

      </PostFooter>
      {componenteComentario}
      <PostFooterShare>
      {componenteCompartilhar}
      </PostFooterShare>
    </PostContainer>
  }
}

export default Post