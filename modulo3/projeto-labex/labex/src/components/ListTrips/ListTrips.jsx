import { useRequestData } from "../../hooks/useRequestData";
import { URL_Base } from '../../constants/URL';
import { CardViagem, DivViagensListadas } from "./styles";
import { Filter } from "../Filter/Filter";
import { useState } from "react";

export default function ListTrips() {

    const [viagens, isLoadingViagens] = useRequestData(`${URL_Base}/trips`);
    const [busca, setBusca] = useState('');
    const [ordenacao, setOrdenacao] = useState('nome');

    const controlaBusca = (valor) => {
        setBusca(valor);
    }

    const controlaOrdenacao = (valor) => {
        setOrdenacao(valor);
    }

    const viagensListadas = viagens && viagens.trips
    .filter((viagem) => {
        return(
        viagem.name.toLowerCase().includes(busca.toLocaleLowerCase()) ||
        viagem.description.toLowerCase().includes(busca.toLocaleLowerCase()) ||
        viagem.planet.toLowerCase().includes(busca.toLocaleLowerCase())
        );
    })
    .sort((viagem1, viagem2) => {
        switch(ordenacao) {
            case 'nome':
                return viagem1.name.localeCompare(viagem2.name);
            case 'planeta':
                return viagem1.planet.localeCompare(viagem2.planet);
            case 'menor-duracao':
                return viagem1.durationInDays - viagem2.durationInDays;
            case 'maior-duracao':
                return viagem2.durationInDays - viagem1.durationInDays;
            case 'data':
                const data1 = new Date(viagem1.date);
                const data2 = new Date(viagem2.date);
                return data1.getTime() - data2.getTime();
            default:
                return viagem1.name.localeCompare(viagem2.name);
        }
    })
    .map((viagem) => {
        return <CardViagem key={viagem.id}>
            <span>Nome: {viagem.name}</span>
            <span>Descrição: {viagem.description}</span>
            <span>Planeta: {viagem.planet}</span>
            <span>Duração: {viagem.durationInDays} dias</span>
            <span>Data: {viagem.date}</span>
        </CardViagem>
    })
    return (
      <div>
        Lista de viagens
        <br/>
        <br/>
        <br/>
        <Filter controlaBusca={controlaBusca} controlaOrdenacao={controlaOrdenacao}/>
        <br/>
        <br/>
        <br/>
        { isLoadingViagens ? <p>Carregando...</p> : <DivViagensListadas>{viagensListadas}</DivViagensListadas>}
        
      </div>
    );
  }
  