import React from "react";
import PerguntaAberta from "./PerguntaAberta";
import PerguntaFechada from "./PerguntaFechada";

const opcoes = [
    {
        valor: "curso-tecnico",
        texto: "Curso Técnico"
    },
    {
        valor: "curso-ingles",
        texto: "Curso de Inglês"
    },
    {
        valor: "sem-curso",
        texto: "Não fiz curso complementar"
    }
]

export default class FormEtapa3 extends React.Component {

    state = {
        inputMotivo: ''
    }

    constructor(props) {
        super(props)
        this.state = {
            cursos: '---'
        }

        this.controlarSelecao = this.controlarSelecao.bind(this)
    }

    controlarSelecao(event) {
        this.setState({ cursos: event.target.value })
    }

    controlarMotivo = () => {
        this.setState({ inputMotivo: this.state.inputMotivo })
    }

    render() {
        return (
            <div>
                <h2>ETAPA 3 - INFORMAÇÕES COMPLEMENTARES</h2>
                <PerguntaAberta 
                    labelInput="motivo" 
                    tipoInput="text" 
                    pergunta="5. Por que você não terminou um curso com graduação?"
                    valor={this.state.inputMotivo}
                    onChangeCampo={this.controlarMotivo}
                />
                <PerguntaFechada
                    pergunta="6. Você fez algum curso complementar?"
                    labelInput="curso-complementar"
                    valor={this.state.cursos}
                    onChange={this.controlarSelecao}
                    opcoes={opcoes.map((opcao) => {
                        return opcao
                    })}
                />
                <p><button onClick={this.props.proximoForm}>Finalizar</button></p>

            </div>

        );
    }
}