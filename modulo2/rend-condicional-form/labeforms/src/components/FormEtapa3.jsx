import React from "react";
import PerguntaAberta from "./PerguntaAberta";
import PerguntaFechada from "./PerguntaFechada";

export default class FormEtapa3 extends React.Component {
    render() {
        return (
            <div>
                <h2>ETAPA 3 - INFORMAÇÕES COMPLEMENTARES</h2>
                <PerguntaAberta labelInput="motivo" tipoInput="text" pergunta="5. Por que você não terminou um curso com graduação?"/>
                <PerguntaFechada
                    pergunta="6. Você fez algum curso complementar?"
                    labelInput="curso-complementar"
                    opcoes={[
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
                ]}
                />
                <p><button onClick={this.props.proximoForm}>Finalizar</button></p>

            </div>

        );
    }
}