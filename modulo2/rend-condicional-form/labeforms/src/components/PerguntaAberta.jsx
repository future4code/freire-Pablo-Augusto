import React from "react";

export default class PerguntaAberta extends React.Component {
    render() {
        return (
            <div>
                <p><label htmlFor={this.props.labelInput}>{this.props.pergunta}</label></p>
                <p><input type={this.props.tipoInput} id={this.props.labelInput} /></p>
            </div>
        )
    }
}