import React from "react";
import styled from 'styled-components';

//Componentes estilizados
const SmallCardContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: left;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 70px;
    gap: 10px;
`;
const ImagemCardPequeno = styled.img`
    width: 40px;
    border-radius: 50%;
`;

function CardPequeno(props) {
    return (
        <SmallCardContainer>
            <ImagemCardPequeno src={props.imagem} />
            <h4>{props.nome}</h4>
            <p>{props.descricao}</p>
            
        </SmallCardContainer>
    )
}

export default CardPequeno;