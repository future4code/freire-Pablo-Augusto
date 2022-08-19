import { useParams } from "react-router-dom";
import CardComment from "../../components/CardComment/CardComment";
import Header from "../../components/Header/Header";
import { Divider } from "../../components/styledButtons";
import useForm from "../../hooks/useForm";
import { useRequestData } from "../../hooks/useRequestData";
import { DivComments, FormComment, PostContainer } from "./styles";
import { CustomTextField } from "../../components/styledInputs";
import { ActionButton } from "../../components/styledButtons";

export default function Post() {

  const [form, onChange, clear] = useForm({body: ''});

  const pathParams = useParams();

  const [comments, isLoadingComments] = useRequestData(`/posts/${pathParams.id}/comments`);
  const commentsExibidos = comments && comments.map((comment) => {
    return <CardComment content={comment.body} author={comment.username} voteSum={comment.voteSum} />
  })

  return (
    <div>
      <Header />
      <PostContainer>
        <FormComment>
          <CustomTextField
            name='body'
            type='text'
            value={form.body}
            onChange={onChange}
            variant='outlined'
            label='Adicionar comentário...'
            multiline
            minRows={4}
            maxRows={4}
            required
          />
          <ActionButton>Responder</ActionButton>
        </FormComment>
        <Divider />
        <DivComments>
          {commentsExibidos}
        </DivComments>
      </PostContainer>
    </div>
  );
}