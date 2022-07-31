import EvaluationLabel from "../EvaluationLabel/EvaluationLabel";
import { DivAutor, DivComment, DivConteudo, DivIcones } from "./styles";

export default function CardComment() {
    return <DivComment>
        <DivConteudo>
            Comentário com Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum autem nulla voluptates vitae tenetur eos delectus facilis error eveniet exercitationem!
        </DivConteudo>
        <DivAutor>
            Enviado por: usuárioDeDorgas
        </DivAutor>
        <DivIcones>
            <EvaluationLabel/>
        </DivIcones>
    </DivComment>
}