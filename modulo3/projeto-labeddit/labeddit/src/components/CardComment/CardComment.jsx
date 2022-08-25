import EvaluationLabel from "../EvaluationLabel/EvaluationLabel";
import { DivAutor, DivComment, DivConteudo, DivIcones } from "./styles";

export default function CardComment(props) {
    return <DivComment>
        <DivConteudo>
            {props.content}
        </DivConteudo>
        <DivAutor>
            Enviado por: {props.author}
        </DivAutor>
        <DivIcones>
            <EvaluationLabel voteSum={props.voteSum} />
        </DivIcones>
    </DivComment>
}