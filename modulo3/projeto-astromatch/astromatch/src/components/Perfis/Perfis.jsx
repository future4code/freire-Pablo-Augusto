import { useEffect, useState } from "react";
import { choosePerson, getProfileToChoose } from "../../services/Conexoes";
import Loader from "../Loader/Loader";
import { TelaPerfis, BoxImagem, BoxTexto, Botoes } from "./styles";

export default function Perfis() {

    const [perfilAleatorio, setPerfilAleatorio] = useState({});
    const [apertouBotao, setApertouBotao] = useState(false);
    const [isLoading, setIsLoading] = useState(true)
    
    const escolher = (id, opcao) => {
        choosePerson(id, opcao).then(() => {
            setApertouBotao(!apertouBotao);
            setIsLoading(true);
            console.log("Escolheu", apertouBotao)
        });   
        
    }

    useEffect(() => {
        getProfileToChoose().then((response) => {
            setPerfilAleatorio(response.profile || {});
            //setPerfilAleatorio(response.profile || vazio);
            setIsLoading(false);
            console.log("UseEffect", apertouBotao)
        });
    },[apertouBotao]);
    
    
    console.log(perfilAleatorio)
    return(
        <TelaPerfis>
            {
            isLoading ?
            <Loader/> :
            <div>
                <BoxImagem img={perfilAleatorio.photo}>
                    <img src={perfilAleatorio.photo} alt={perfilAleatorio.photo_alt} />
                    <BoxTexto>
                        <p>{perfilAleatorio.name}, {perfilAleatorio.age}</p>
                        <p>{perfilAleatorio.bio}</p>
                    </BoxTexto>
                </BoxImagem>
                <Botoes>
                    <button onClick={() => escolher(perfilAleatorio.id, false)}>Não</button>
                    <button onClick={() => escolher(perfilAleatorio.id, true)}>Sim</button>
                </Botoes>
            </div>
            }
        </TelaPerfis>
    );
}