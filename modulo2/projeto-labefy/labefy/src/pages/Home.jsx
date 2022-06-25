import React from "react";
import MenuPlaylists from "../components/MenuPlaylists";
import ListaMusicas from "../components/ListaMusicas";
import styled from "styled-components";

const DivHome = styled.div`
    display: grid;
    grid-template-columns: 1fr 4fr;
`

export default class Home extends React.Component {
  render() {
    return (
      <DivHome>
        <button onClick={this.props.voltar}>Início</button>
        
        <MenuPlaylists/>
        <ListaMusicas/>
      </DivHome>
    )
  }
}