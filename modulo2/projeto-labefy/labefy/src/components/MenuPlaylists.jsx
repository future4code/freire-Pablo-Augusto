import React from "react";

export default class MenuPlaylists extends React.Component {
  render() {
    return (
      <div>
        <div>
            <input 
            type="text"
            placeholder="Nova playlist"
            />
            <button>Add</button>
        </div>
        
      </div>
    )
  }
}