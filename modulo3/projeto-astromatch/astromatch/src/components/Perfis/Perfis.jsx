import { useEffect, useState } from "react";
import { choosePerson, getProfileToChoose } from "../../services/Conexoes";
import styled from "styled-components";

const Botoes = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
`

export default function Perfis() {

    const [perfilAleatorio, setPerfilAleatorio] = useState({});
    const [apertouBotao, setApertouBotao] = useState(false);
    // const vazio = {
    // }
    
    const escolher = (id, opcao) => {
        choosePerson(id, opcao).then(() => {
            setApertouBotao(true);
        });   
        
    }

    useEffect(() => {
        getProfileToChoose().then((response) => {
            setPerfilAleatorio(response.profile);
            //setPerfilAleatorio(response.profile || vazio);
            setApertouBotao(false)
        });
        
    },[apertouBotao]);
    
    
    console.log(perfilAleatorio)
    return(
        <div>
            <p>Lista de perfis</p>
            <div>
                <p><img src={perfilAleatorio.photo} alt={perfilAleatorio.photo_alt} /></p>
                <h2>{perfilAleatorio.name}, {perfilAleatorio.age}</h2>
                <p>{perfilAleatorio.bio}</p>
            </div>
            <Botoes>
                <button onClick={() => escolher(perfilAleatorio.id, false)}>Não</button>
                <button onClick={() => escolher(perfilAleatorio.id, true)}>Sim</button>
            </Botoes>
        </div>
    );
}