import React, {Component} from 'react'
import styled from 'styled-components'

const CommentContainer = styled.div`
    display: flex;
	flex-direction: column;
    justify-content: center;
    padding: 5px;
`

const InputComentario = styled.input`
    width: 100%;
    margin-right: 5px;
`

const ListaComentarios = styled.div`
	align-self: bottom;
	background-color: lightgray;
	margin-bottom: 5px;
`

export class SecaoComentario extends Component {
	state = {
		listaComentariosEstado: [],
		valorCampo: ''
	}

	onChangeComentario = (event) => {
		this.setState({valorCampo: event.target.value})
	}

	enviarComentario = () => {
		const novoComentario = {
			usuario: "Anônimo",
			texto: this.state.valorCampo
		}

		const listaPostagem = [...this.state.listaComentariosEstado, novoComentario]

		this.setState({listaComentariosEstado: listaPostagem})
		this.setState({valorCampo: ''})

		

	}

	render() {
		const exibeListaComentarios = this.state.listaComentariosEstado.map((comentario, indice) => {
			return <ListaComentarios>
				<p>Enviado por <strong>{comentario.usuario}</strong></p>
				<p>{comentario.texto}</p>
				<hr />
			</ListaComentarios>
		})

		return <CommentContainer>
			<InputComentario
				placeholder={'Comentário'}
				value={this.state.valorCampo}
				onChange={this.onChangeComentario}
			/>
			<button onClick={this.props.aoEnviar}>Enviar</button>
			<br />
			{/* {exibeListaComentarios} */}
		</CommentContainer>
	}
}
