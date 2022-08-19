import React from "react";
import CardPost from "../../components/CardPost/CardPost";
import Header from "../../components/Header/Header";
import { useRequestData } from "../../hooks/useRequestData";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import { CustomTextField } from '../../components/styledInputs';
import useForm from "../../hooks/useForm";
import { DivPosts, FeedContainer, FormPost } from "./styles";
import { ActionButton, Divider } from "../../components/styledButtons";

export default function Feed() {

  useProtectedPage();

  const [form, onChange, clear] = useForm({title: '', body: ''})

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
      <FeedContainer>
        <FormPost>
          <CustomTextField
            name='title'
            type='text'
            value={form.title}
            onChange={onChange}
            variant='outlined'
            label='Título do Post'
            required
          />
          <CustomTextField
            name='body'
            type='text'
            value={form.body}
            onChange={onChange}
            variant='outlined'
            label='Escreva seu Post...'
            multiline
            minRows={4}
            maxRows={4}
            required
          />
          <ActionButton>Postar</ActionButton>
        </FormPost>
        <Divider />
        <DivPosts>
          {isLoadingPosts ? 'Carregando...' : postsExibidos}
        </DivPosts>
      </FeedContainer>
    </div>
  );
  }