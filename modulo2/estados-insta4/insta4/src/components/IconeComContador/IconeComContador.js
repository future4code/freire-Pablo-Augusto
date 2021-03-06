import React from 'react'
import styled from 'styled-components'

const IconContainer = styled.div`
	display: flex;
	align-items: center;
`
const IconImage = styled.img`
	margin-right: 5px;
	height: 32px;
	width: 32px;
	cursor: pointer;
`

export function IconeComContador(props) {
	return <IconContainer>
		<IconImage alt={'Icone'} src={props.icone} onClick={props.onClickIcone}/>
		<p>{props.valorContador}</p>
	</IconContainer>
}
