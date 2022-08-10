import { useEffect } from "react";
import { useState } from "react";
import { URL_Base } from "../constants/URL";
import { useNavigate } from "react-router-dom";
import { useRequestData } from "../hooks/useRequestData";
import { CardViagemAdmin, Header } from "./styles";

export default function AdminHomePage() {
    
    const [viagens, isLoadingViagens] = useRequestData(`${URL_Base}/trips`)
    const navigate = useNavigate();
    const [refresh, setRefresh] = useState(false);
    const token = localStorage.getItem('token');

    const goToHome = () => {
        navigate('/');
    }

    const goToTripDetails = () => {
        navigate('/admin-tripdetails');
    }

    const fazerLogout = () => {
      if (window.confirm('Deseja mesmo fazer logout?')) {
          localStorage.removeItem('token');
          setRefresh(!refresh);
      }     
    }

    useEffect(() => {
      if (token === null) {
        goToHome();
      }
    }, [refresh])

    const viagensExibidas = viagens && viagens.trips.map((viagem) => {
      return <CardViagemAdmin key={viagem.id}>
        <span>{viagem.name}</span>
        <button>Excluir</button>
      </CardViagemAdmin>
    })

    return (
      <div>
        <Header>
          <h1>LabeX</h1>
          <h2>Painel Administrativo</h2>
          <span>
            <button onClick={fazerLogout}>Logout</button>
            <button onClick={goToHome}>HomePública</button>
          </span>
        </Header>
        <div>
          { isLoadingViagens ? 'Carregando...' : <div>{viagensExibidas}</div>}
        </div>       
        
      </div>
      
    );
  }