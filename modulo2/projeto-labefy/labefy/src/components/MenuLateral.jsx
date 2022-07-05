import React from "react";
import { CriaPlaylist } from "../services/Conexoes";

export default class MenuLateral extends React.Component {

state = {
    inputNomePlaylist: ''
}

controlaNomePlaylist = (event) => {
    this.setState({inputNomePlaylist: event.target.value})
}

adicionaPlaylist = () => {
    CriaPlaylist(this.state.inputNomePlaylist)
    this.setState({inputNomePlaylist: ''})
}

render() {
    return (
      <div>
        <div>
            <input 
            type="text"
            placeholder="Nova playlist"
            value={this.state.inputNomePlaylist}
            onChange={this.controlaNomePlaylist}
            />
            <button onClick={this.adicionaPlaylist}>Add</button>
        </div>
        
      </div>
    )
  }
}