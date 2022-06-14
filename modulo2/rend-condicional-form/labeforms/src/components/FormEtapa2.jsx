import React from "react";
import PerguntaAberta from "./PerguntaAberta";

export default class FormEtapa2 extends React.Component {
    render() {
        return (
            <div>
                <h2>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h2>
                <PerguntaAberta labelInput="curso" tipoInput="text" pergunta="5. Qual o curso?"/>
                <PerguntaAberta labelInput="unidade-ensino" tipoInput="text" pergunta="6. Qual a unidade de ensino?"/>
                <p><button onClick={this.props.proximoForm}>Finalizar</button></p>
            </div>
        )
    }
}