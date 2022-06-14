import React from "react";

export default class PerguntaFechada extends React.Component {
    render() {

        const opcoesExibidas = this.props.opcoes.map((opcao, indice) => {
            return <option key={indice} value={opcao.valor}>{opcao.texto}</option>
        })

        return (
            <div>
                <p>{this.props.pergunta}</p>
                <p>
                    <select id={this.props.labelInput} value={this.props.valor} onChange={this.props.onChange}>
                        <option value="">---</option>
                        {opcoesExibidas}
                    </select>
                </p>
            </div>
        )
    }
}