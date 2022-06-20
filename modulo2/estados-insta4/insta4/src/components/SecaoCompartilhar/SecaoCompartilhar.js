import React, {Component} from 'react'
import styled from 'styled-components'

//Imagens
import iconeInstagram from '../../img/icone-instagram.png'
import iconeFacebook from '../../img/icone-facebook.png'
import iconeTwitter from '../../img/icone-twitter.png'

const CommentContainer = styled.div`
    display: block;
    border: 1px solid black;
    justify-content: center;
    padding: 5px;
    width: 100%;
`

const InputComentario = styled.input`
    width: 95%;
    margin-right: 5px;
`
const IconContainer = styled.div`
	display: flex;
	align-items: center;
    justify-content: space-around;
`
const IconImage = styled.img`
	margin-right: 5px;
	height: 32px;
	width: 32px;
`

export class SecaoCompartilhar extends Component {
	state = {
		valorCampo: '',
        compartilhandoRedeSocial: false
	}

	onChangeComentario = (event) => {
		this.setState({valorCampo: event.target.value})
	}

    exibeCampoMensagem = () => {
        this.setState({compartilhandoRedeSocial: !this.state.compartilhandoRedeSocial})
    }

    compartilhaComMensagem = () => {
    
        
    }

	render() {
        let componenteCompartilhar
        let componenteCompartilharBotao

        if(this.state.compartilhandoRedeSocial) {
            componenteCompartilhar = <InputComentario
            placeholder={'Mensagem'}
            value={this.state.valorCampo}
            onChange={this.onChangeComentario}
            />
            componenteCompartilharBotao = <button onClick={this.props.aoEnviar}>Enviar</button>
        }

		return <CommentContainer>
            <div>
            <IconContainer>
		        <IconImage alt={'Instagram'} src={iconeInstagram} onClick={this.exibeCampoMensagem}/>
                <IconImage alt={'Facebook'} src={iconeFacebook} onClick={this.exibeCampoMensagem}/>
                <IconImage alt={'Twitter'} src={iconeTwitter} onClick={this.exibeCampoMensagem}/>    
	        </IconContainer>
            </div>
            <div>
			{componenteCompartilhar}
            {componenteCompartilharBotao}
            </div>

		</CommentContainer>
	}
}
