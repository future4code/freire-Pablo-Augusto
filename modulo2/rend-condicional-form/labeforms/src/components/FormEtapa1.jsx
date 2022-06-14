import React from "react";
import MensagemErro from "./MensagemErro";
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

    state = {
        inputNome: '',
        inputIdade: '',
        inputEmail: '',
        erro: false,
        camposPreenchidos: false
    }

    constructor(props) {
        super(props)
        this.state = {
            escolaridade: '---'
        }

        this.controlarSelecao = this.controlarSelecao.bind(this)
    }

    controlarSelecao(event) {
        this.setState({ escolaridade: event.target.value })
    }

    controlarNome = () => {
        this.setState({ inputNome: this.state.inputNome })
    }

    controlarIdade = () => {
        this.setState({ inputIdade: this.state.inputIdade })
    }

    controlarEmail = () => {
        this.setState({ inputEmail: this.state.inputEmail })
    }

    verificaCampos = () => {
        if (this.state.inputNome === "" || this.state.inputIdade === "" || this.state.inputEmail === "" || this.state.escolaridade === "---") {
            alert("Todos os campos devem ser preenchidos!")
            this.setState({erro: true})
        } else {
            this.setState({erro: false})
            this.setState({camposPreenchidos: true})
            
        }
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
                <PerguntaAberta 
                    labelInput="nome" 
                    tipoInput="text" 
                    pergunta="1. Qual o seu nome?" 
                    valor={this.state.inputNome} 
                    onChangeCampo={this.controlarNome}
                />
                {this.state.erro && this.state.inputNome === '' ? <MensagemErro nomeCampo="'Nome'"/> : ''}
                <PerguntaAberta 
                    labelInput="idade" 
                    tipoInput="text" 
                    pergunta="2. Qual sua idade?" 
                    valor={this.state.inputIdade}
                    onChangeCampo={this.controlarIdade} 
                />
                {this.state.erro && this.state.inputIdade === '' ? <MensagemErro nomeCampo="'Idade'"/> : ''}
                <PerguntaAberta 
                    labelInput="email" 
                    tipoInput="email" 
                    pergunta="3. Qual seu e-mail?" 
                    valor={this.state.inputEmail}
                    onChangeCampo={this.controlarEmail}
                />
                {this.state.erro && this.state.inputEmail === '' ? <MensagemErro nomeCampo="'E-mail'"/> : ''}
                <PerguntaFechada
                    pergunta="4. Qual a sua escolaridade?"
                    labelInput="escolaridade"
                    valor={this.state.escolaridade}
                    onChange={this.controlarSelecao}
                    opcoes={opcoes.map((opcao) => {
                        return opcao
                    })}
                />
                {this.state.erro && this.state.escolaridade === '---' ? <MensagemErro nomeCampo="'Escolaridade'"/> : ''}
                <p><button onClick={opcaoClique}>Próxima Etapa</button></p>
            </div>
        )
    }
}