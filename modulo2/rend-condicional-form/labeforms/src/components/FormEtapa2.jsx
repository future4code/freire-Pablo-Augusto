import React from "react";
import PerguntaAberta from "./PerguntaAberta";

export default class FormEtapa2 extends React.Component {
    state = {
        inputCurso: '',
        inputUnidadeEnsino: ''
    }

    controlarCurso = () => {
        this.setState({ inputCurso: this.state.inputCurso })
    }

    controlarUnidadeEnsino = () => {
        this.setState({ inputUnidadeEnsino: this.state.inputUnidadeEnsino })
    }

    render() {
        return (
            <div>
                <h2>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h2>
                <PerguntaAberta 
                    labelInput="curso" 
                    tipoInput="text" 
                    pergunta="5. Qual o curso?"
                    valor={this.state.inputCurso} 
                    onChangeCampo={this.controlarCurso}
                />
                <PerguntaAberta 
                    labelInput="unidade-ensino" 
                    tipoInput="text" 
                    pergunta="6. Qual a unidade de ensino?"
                    valor={this.state.inputUnidadeEnsino} 
                    onChangeCampo={this.controlarUnidadeEnsino}
                />
                <p><button onClick={this.props.proximoForm}>Finalizar</button></p>
            </div>
        )
    }
}