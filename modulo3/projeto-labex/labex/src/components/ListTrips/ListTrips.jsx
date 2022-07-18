import { useRequestData } from "../../hooks/useRequestData";
import { URL_Base } from '../../constants/URL';
import { CardViagem, DivViagensListadas } from "./styles";

export default function ListTrips() {

    const [viagens, isLoadingViagens] = useRequestData(`${URL_Base}/trips`);
    console.log(viagens)

    const viagensListadas = viagens && viagens.trips.map((viagem) => {
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
        { isLoadingViagens ? <p>Carregando...</p> : <DivViagensListadas>{viagensListadas}</DivViagensListadas>}
        
      </div>
    );
  }
  