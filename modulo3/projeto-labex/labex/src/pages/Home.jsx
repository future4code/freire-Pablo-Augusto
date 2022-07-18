import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import FormModalLogin from "../components/FormModalLogin/FormModalLogin";
import ListTrips from "../components/ListTrips/ListTrips";
import { Header } from "./styles";

export default function Home() {
    const navigate = useNavigate();
    const [showFormLogin, setShowFormLogin] = useState(false);
    const [refresh, setRefresh] = useState(false)
    const token = localStorage.getItem('token');
    

    const goToAdminHomePage = () => {
        navigate('/admin-home')
    }

    const switchFormularioLogin = () => {
        setShowFormLogin(!showFormLogin);
    }

    const fazerLogout = () => {
        if (window.confirm('Deseja mesmo fazer logout?')) {
            localStorage.removeItem('token');
            setRefresh(!refresh);
        }     
    }

    useEffect(()=>{}, [showFormLogin, refresh])

    console.log(token)
    return (
      <div>
        <FormModalLogin show={showFormLogin} close={switchFormularioLogin}/>
        <Header>
            <h1>LabeX </h1>
            {
            token ?
            <span>
                <button onClick={fazerLogout}>Logout</button>
                <button onClick={goToAdminHomePage}>Admin Home</button>
            </span> :
            <button onClick={switchFormularioLogin}>Fazer login</button>
            }        
        </Header>
        <p>Página Home pública</p>
        <ListTrips/>
        
      </div>
    );
  }