import CommentLabel from "../CommentLabel/CommentLabel";
import EvaluationLabel from "../EvaluationLabel/EvaluationLabel";
import { DivAutor, DivConteudo, DivIcones, DivPost, DivTitulo } from "./styles";

export default function CardPost() {
    return <DivPost>
        <DivTitulo>
            Título do Post
        </DivTitulo>
        <DivConteudo>
            Conteúdo do post com um Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt rem minus totam eaque praesentium a aperiam perferendis laborum voluptates ad.
        </DivConteudo>
        <DivAutor>
            Enviado por: randomStranger69
        </DivAutor>
        <DivIcones>
            <EvaluationLabel />
            <CommentLabel />
        </DivIcones>
    </DivPost>
}