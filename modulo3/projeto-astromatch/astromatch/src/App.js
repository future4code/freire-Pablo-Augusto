import React, {useState} from 'react';
import Matches from './components/Matches/Matches.jsx';
import Perfis from './components/Perfis/Perfis.jsx';
import { clearAll } from './services/Conexoes.jsx';
import { MainContainer, TelaInicial, Menu, AstroMatch } from './styles.jsx';


export default function App() {

  const [tela, setTela] = useState('perfis');

  const mudarTela = (telaAtual) => {
    setTela(telaAtual);
  }

  const limparEscolhas = () => {
    clearAll();
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
          <button onClick={limparEscolhas}>Reset</button>
          <AstroMatch>AstroMatch</AstroMatch>
          {tela === 'perfis' ?
          <button onClick={() => mudarTela('matches')}>Matches</button> :
          <button onClick={() => mudarTela('perfis')}>Perfis</button>
          }
          
        </Menu>
        {telaExibida}
      </TelaInicial>
    </MainContainer>    
  );
}