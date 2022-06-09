import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';
import fotoTecaUser from './img/teca-foto-user.jpg';
import fotoTicaUser from './img/tica-foto-user.jpg';
import fotoTecaPost from './img/teca-foto-post.jpg';
import fotoTicaPost from './img/tica-foto-post.jpg';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  render() {
    return (
      <MainContainer>
        <Post
          nomeUsuario={'Tica'}
          fotoUsuario={fotoTicaUser}
          fotoPost={fotoTicaPost}
        />
        <Post
          nomeUsuario={'Teca'}
          fotoUsuario={fotoTecaUser}
          fotoPost={fotoTecaPost}
        />
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
        />
      </MainContainer>
    );
  }
}

export default App;
