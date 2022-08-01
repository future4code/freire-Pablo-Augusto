import React from "react";
import CardPost from "../../components/CardPost/CardPost";
import Header from "../../components/Header/Header";
import { useRequestData } from "../../hooks/useRequestData";
import { BASE_URL } from '../../constants/urls';
import { useProtectedPage } from "../../hooks/useProtectedPage";
import { useNavigate } from "react-router-dom";
import { goToLogin } from "../../routes/Coordinator";

export default function Feed() {

  useProtectedPage();
  const navigate = useNavigate();

  const [posts, isLoadingPosts] = useRequestData(`${BASE_URL}/posts`);
  const postsExibidos = posts && posts.map((post) => {
    return <CardPost 
              key={post.id}
              id={post.id}
              title={post.title}
              content={post.body}
              author={post.username}
              voteSum={post.voteSum}
              commentCount={post.commentCount}
            />
  })

    return (
      <div>
        <Header />
        Feed
        <button onClick={() => goToLogin(navigate)}>Login</button>
        <br/>
        <br/>
        <br/>
        {isLoadingPosts ? 'Carregando...' : postsExibidos}
      </div>
    );
  }