import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FormModalLogin from "../components/FormModalLogin/FormModalLogin";
import ListTrips from "../components/ListTrips/ListTrips";
import { Header } from "./styles";

export default function Home() {
    const navigate = useNavigate();
    const [showFormLogin, setShowFormLogin] = useState(false);

    const goToAdminHomePage = () => {
        navigate('/admin-home')
    }

    const switchFormularioLogin = () => {
        setShowFormLogin(!showFormLogin);
    }
    return (
      <div>
        <FormModalLogin show={showFormLogin} close={switchFormularioLogin}/>
        <Header>
            <h1>LabeX</h1>
            <button onClick={switchFormularioLogin}>Fazer login</button>
        </Header>
        <p>Página Home pública</p>
        <ListTrips/>
        
      </div>
    );
  }