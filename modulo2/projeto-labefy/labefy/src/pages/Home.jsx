import React from "react";
import MenuLateral from "../components/MenuLateral";
import TelaExibicao from "../components/TelaExibicao";
import styled from "styled-components";
import {cor1} from "../constants/Valores";
import {cor2} from "../constants/Valores";
import {cor3} from "../constants/Valores";
import {cor4} from "../constants/Valores";

const DivHome = styled.div`
    
`
const Header = styled.div`
    height: 50px;
    background-color: ${cor2};
`
const Principal = styled.div`
    display: grid;
    grid-template-columns: 1fr 5fr;
`

export default class Home extends React.Component {

    state = {
        exibindo: "lista-playlists"
    }

    trocaExibicao = (tela) => {
        this.setState({exibindo: tela})
    }

    render() {
        return (
        <DivHome>
            <Header>
                <button onClick={this.props.voltar}>Início</button>
            </Header>
            
            <Principal>
                <MenuLateral/>
                <TelaExibicao exibindo={this.state.exibindo} trocarExibicao={this.trocaExibicao}/>
            </Principal>
            
        </DivHome>
        )
    }
}