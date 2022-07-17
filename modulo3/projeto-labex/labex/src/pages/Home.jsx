import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FormModalLogin from "../components/FormModalLogin/FormModalLogin";

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
        <p>Página Home pública</p>
        <p><button onClick={switchFormularioLogin}>Fazer login</button></p>
      </div>
    );
  }