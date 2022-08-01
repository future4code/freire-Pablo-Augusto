import React from "react";
import CardPost from "../../components/CardPost/CardPost";
import Header from "../../components/Header/Header";
import { useRequestData } from "../../hooks/useRequestData";
import { useProtectedPage } from "../../hooks/useProtectedPage";

export default function Feed() {

  useProtectedPage();

  const [posts, isLoadingPosts] = useRequestData('/posts');
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
  console.log(posts)
  document.title = "LabEddit - Feed"
  return (
    <div>
      <Header />
      <br/>
      <br/>
      <br/>
      {isLoadingPosts ? 'Carregando...' : postsExibidos}
    </div>
  );
  }