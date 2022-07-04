import React, {useState} from 'react'
import { CommentContainer, InputComment } from './styles'

const SecaoComentario = (props) => {

	const [inputValue, setInputValue] = useState('');

	const onChangeComentario = (event) => {
		setInputValue(event.target.value);
	}

	return (
		<CommentContainer>
			<InputComment
				className={'input-comentario'}
				placeholder={'Comentário'}
				value={inputValue}
				onChange={onChangeComentario}
			/>
			<button onClick={() => { props.enviarComentario(inputValue) }} >Enviar</button>
		</CommentContainer>
	)
}


export default SecaoComentario