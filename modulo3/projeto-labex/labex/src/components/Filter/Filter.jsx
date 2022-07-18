import { useState } from "react";
import { DivFilter } from "./styles";

export const Filter = (props) => {
  const [busca, setBusca] = useState('');
  const [ordenacao, setOrdenacao] = useState('nome');

  const controlaBusca = (event) => {
    setBusca(event.target.value);
    props.controlaBusca(event.target.value);
  }

  const controlaOrdenacao = (event) => {
    setOrdenacao(event.target.value);
    props.controlaOrdenacao(event.target.value);
  }


  return (
    <DivFilter>
      <input
      type='text'
      value={busca}
      placeholder="Buscar viagem"
      onChange={controlaBusca}
      />
      <span>
        <label htmlFor="ordenar">Ordenar por:</label>
        <select 
        name="ordenar"
        value={ordenacao}
        onChange={controlaOrdenacao}
        >
          <option value="nome">Nome</option>
          <option value="planeta">Planeta</option>
          <option value="maior-duracao">Maior duração</option>
          <option value="menor-duracao">Menor duração</option>
          <option value="data">Data</option>
        </select>
      </span>
      <button>Inscrever-se</button>
      
    </DivFilter>
  );
}
  