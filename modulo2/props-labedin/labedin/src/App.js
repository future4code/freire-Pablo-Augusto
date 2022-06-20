import React from 'react';
import './App.css';

// Imagens
import imagemPerfil from './img/imagem-perfil.jpg';
import imagemSetaBaixo from './img/seta-para-baixo.png';
import imagemHostnet from './img/imagem-logo-hostnet.jpg'
import imagemTranspetro from './img/imagem-logo-transpetro.jpg';
import imagemLabenu from './img/imagem-logo-labenu.svg';
import imagemIconeEmail from './img/icone-email.png';
import imagemIconeLocalizacao from './img/icone-localizacao.png';
import imagemIconeGitHub from './img/icone-github.png';
import imagemIconeLinkedin from './img/icone-linkedin.png';

//Componentes
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={imagemPerfil} 
          nome="Pablo Leão" 
          descricao="Oi, eu sou o Pablo e atualmente estudo na Labenu. Futuro desenvolvedor Full Stack e gamer nas horas vagas."
        />
        
        <ImagemButton 
          imagem={imagemSetaBaixo} 
          texto="Ver mais"
        />
        <CardPequeno
          imagem={imagemIconeEmail}
          nome='E-mail:'
          descricao='pablo_leao@hotmail.com'
        />
        <CardPequeno
          imagem={imagemIconeLocalizacao}
          nome='Endereço:'
          descricao='Rua January River, 21 - Bairro Rio, Rio de Janeiro - RJ'
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem={imagemHostnet} 
          nome="Hostnet Internet" 
          descricao="Atendente de Suporte Técnico na empresa Hostnet de abril de 2009 até julho de 2009." 
        />
        <CardGrande 
          imagem={imagemTranspetro} 
          nome="Petrobras Transporte S.A. – Transpetro" 
          descricao="Praticante Oficial de Náutica na empresa Transpetro de abril de 2017 até novembro de 2017." 
        />
        
        <CardGrande 
          imagem={imagemLabenu} 
          nome="Labenu" 
          descricao="Aluno do curso Web Full Stack da Labenu, com início em maio de 2022 e término no final de outubro de 2022" 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <a href='https://github.com/pablo-leao' target="_blank">
        <ImagemButton 
          imagem={imagemIconeGitHub} 
          texto="GitHub" 
        />
        </a>  
        <a href='https://www.linkedin.com/in/pablo-leao/' target="_blank">
        <ImagemButton 
          imagem={imagemIconeLinkedin}
          texto="LinkedIn" 
        />
        </a>    
      </div>
    </div>
  );
}

export default App;
