import React, {useState} from 'react';
import Matches from './components/Matches/Matches.jsx';
import Perfis from './components/Perfis/Perfis.jsx';
import { MainContainer, TelaInicial, Menu } from './styles.jsx';


export default function App() {

  const [tela, setTela] = useState('perfis');

  const mudarTela = (telaAtual) => {
    setTela(telaAtual);
  }

  let telaExibida = ''; 
  switch(tela) {
    case 'perfis':
      telaExibida = <Perfis />;
      break;
    case 'matches':
      telaExibida = <Matches />;
      break;
    default:
      telaExibida = <Perfis />;
      break;
  }

  return (
    <MainContainer>
      <TelaInicial>
        <Menu>
          <button onClick={() => mudarTela('perfis')}>Voltar</button>
          <span>AstroMatch</span>
          <button onClick={() => mudarTela('matches')}>Matches</button>
        </Menu>
        {telaExibida}
      </TelaInicial>
    </MainContainer>    
  );
}