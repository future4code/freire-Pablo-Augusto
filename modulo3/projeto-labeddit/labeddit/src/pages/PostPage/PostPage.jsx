import { useParams } from "react-router-dom";
import CardComment from "../../components/CardComment/CardComment";
import Header from "../../components/Header/Header";
import { useRequestData } from "../../hooks/useRequestData";

export default function Post() {

  const pathParams = useParams();

  const [comments, isLoadingComments] = useRequestData(`/posts/${pathParams.id}/comments`);
  const commentsExibidos = comments && comments.map((comment) => {
    return <CardComment content={comment.body} author={comment.username} voteSum={comment.voteSum} />
  })

  return (
    <div>
      <Header />
      Post
      <br />
      <br />
      <br />
      {commentsExibidos}
    </div>
  );
}