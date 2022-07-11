import React, {useState} from 'react';
import Matches from './components/Matches/Matches.jsx';
import Perfis from './components/Perfis/Perfis.jsx';
import { clearAll } from './services/Conexoes.jsx';
import { MainContainer, TelaInicial, Menu, AstroMatch } from './styles.jsx';
import { Button } from "@mui/material";
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import RefreshIcon from '@mui/icons-material/Refresh';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import astromatchImagem from './img/astromatch.png';


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
          <Button 
          variant='text'
          onClick={limparEscolhas}
          sx={{
            color: 'gray',
            borderRadius: '50%',
            size: 'small',
            maxWidth: '35px',
            maxHeight: '35px',
            minWidth: '35px',
            minHeight: '35px'
          }}
          >
            <RefreshIcon
            sx={{
              color: 'gray',
              borderRadius: '50%',
              width: '30px',
              height: '30px'
            }}/>
          </Button>
          <AstroMatch>Astromatch</AstroMatch>
          {tela === 'perfis' ?
          <Button 
          variant='text' 
          onClick={() => mudarTela('matches')}
          sx={{
            color: 'gray',
            borderRadius: '50%',
            size: 'small',
            maxWidth: '35px',
            maxHeight: '35px',
            minWidth: '35px',
            minHeight: '35px'
          }}
          >
            <SupervisorAccountIcon
            sx={{
              color: 'gray',
              borderRadius: '50%',
              width: '30px',
              height: '30px'
            }}/>
          </Button> :
          <Button 
          variant='text' 
          onClick={() => mudarTela('perfis')}
          sx={{
            color: 'gray',
            borderRadius: '50%',
            size: 'small',
            maxWidth: '35px',
            maxHeight: '35px',
            minWidth: '35px',
            minHeight: '35px'
          }}
          >
            <PersonSearchIcon
            sx={{
              color: 'gray',
              borderRadius: '50%',
              width: '30px',
              height: '30px'
            }}/>
          </Button>
          }
          
        </Menu>
        {telaExibida}
      </TelaInicial>
    </MainContainer>    
  );
}