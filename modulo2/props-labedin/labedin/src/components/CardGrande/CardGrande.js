import React from 'react';
import styled from 'styled-components';

//Componentes estilizados

const BigCardContainer = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 200px;
`;
const Imagem = styled.img`
    width: 70px;
    margin-right: 10px;
    border-radius: 50%;
`;
const Subtitulo = styled.h4`
    margin-bottom: 15px;
`;
const Divisao = styled.div`
    display: flex;
    flex-direction: column;
    justify-items: flex-start;
`;

function CardGrande(props) {
    return (
        <BigCardContainer>
            <Imagem src={ props.imagem } />
            <Divisao>
                <Subtitulo>{ props.nome }</Subtitulo>
                <p>{ props.descricao }</p>
            </Divisao>
        </BigCardContainer>
    )
}

export default CardGrande;