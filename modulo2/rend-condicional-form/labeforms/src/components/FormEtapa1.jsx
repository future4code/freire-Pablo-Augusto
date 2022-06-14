import React from "react";
import PerguntaAberta from "./PerguntaAberta";
import PerguntaFechada from "./PerguntaFechada";

const opcoes = [
    {
        valor: "medio-incompleto",
        texto: "Ensino Médio Incompleto"
    },
    {
        valor: "medio-completo",
        texto: "Ensino Médio Completo"
    },
    {
        valor: "superior-incompleto",
        texto: "Ensino Superior Incompleto"
    },
    {
        valor: "superior-completo",
        texto: "Ensino Superior Completo"
    }
]

export default class FormEtapa1 extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            escolaridade: '---'
        }

        this.controlarSelecao = this.controlarSelecao.bind(this)
    }

    controlarSelecao (event) {
        this.setState({escolaridade: event.target.value})
    }
    
    render() {
        let opcaoClique = ''
        if (this.state.escolaridade === "superior-completo" || this.state.escolaridade === "superior-incompleto") {
            opcaoClique = this.props.proximoForm2
        } else if (this.state.escolaridade === "medio-incompleto" || this.state.escolaridade === "medio-completo") {
            opcaoClique = this.props.proximoForm3
        }

        return (
            <div>
                <h1>ETAPA 1 - DADOS GERAIS</h1>
                <PerguntaAberta labelInput="nome" tipoInput="text" pergunta="1. Qual o seu nome?"/>
                <PerguntaAberta labelInput="idade" tipoInput="text" pergunta="2. Qual sua idade?"/>
                <PerguntaAberta labelInput="email" tipoInput="email" pergunta="3. Qual seu e-mail?"/>
                <PerguntaFechada
                    pergunta="4. Qual a sua escolaridade?"
                    labelInput="escolaridade"
                    valor={this.state.escolaridade}
                    onChange={this.controlarSelecao}
                    opcoes={opcoes.map((opcao) => {
                        return opcao
                    })}
                />
                <p><button 
                onClick={opcaoClique}
                >Próxima Etapa</button></p>
            </div>
        )
    }
}