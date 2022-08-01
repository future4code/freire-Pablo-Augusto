import CommentLabel from "../CommentLabel/CommentLabel";
import EvaluationLabel from "../EvaluationLabel/EvaluationLabel";
import { DivAutor, DivConteudo, DivIcones, DivPost, DivTitulo } from "./styles";

export default function CardPost(props) {

    return <DivPost>
        <DivTitulo>
            {props.title}
        </DivTitulo>
        <DivConteudo>
            {props.content}
        </DivConteudo>
        <DivAutor>
            Enviado por: {props.author}
        </DivAutor>
        <DivIcones>
            <EvaluationLabel voteSum={props.voteSum} id={props.id} />
            <CommentLabel commentCount={props.commentCount} id={props.id}/>
        </DivIcones>
    </DivPost>
}