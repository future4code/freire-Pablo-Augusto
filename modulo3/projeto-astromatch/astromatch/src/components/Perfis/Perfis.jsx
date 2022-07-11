import { Button } from "@mui/material";
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import FavoriteBorderSharpIcon from '@mui/icons-material/FavoriteBorderSharp';
import { useEffect, useState } from "react";
import { choosePerson, getProfileToChoose } from "../../services/Conexoes";
import Loader from "../Loader/Loader";
import { TelaPerfis, BoxImagem, BoxTexto, Botoes } from "./styles";


export default function Perfis() {

    const [perfilAleatorio, setPerfilAleatorio] = useState({});
    const [apertouBotao, setApertouBotao] = useState(false);
    const [isLoading, setIsLoading] = useState(true)
    
    const escolher = (id, opcao) => {
        setIsLoading(true);
        choosePerson(id, opcao).then(() => {
            setApertouBotao(!apertouBotao);
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
                        <Button 
                        variant='text' 
                        onClick={() => escolher(perfilAleatorio.id, false)}
                        sx={{
                            color: 'red',
                            borderRadius: '50%',
                            width: '62px',
                            height: '62px',
                            border: '3px solid red'
                        }}
                        ><AddOutlinedIcon
                        sx={{
                            width: '50px',
                            height: '50px',
                            transform: 'rotate(45deg)',
                            transition: '0.3s',
                            '&:hover': {
                                transform: 'scale(1.2) rotate(45deg)'
                            }
                        }}/>
                        </Button>
                        <Button 
                        variant='text' 
                        onClick={() => escolher(perfilAleatorio.id, true)}
                        sx={{
                            color: 'green',
                            borderRadius: '50%',
                            width: '62px',
                            height: '62px',
                            border: '3px solid green'
                        }}
                        ><FavoriteBorderSharpIcon
                        sx={{
                            width: '40px',
                            height: '40px',
                            transition: '0.3s',
                            '&:hover': {
                                transform: 'scale(1.15)'
                            }                            
                        }}/>
                        </Button>
                    </Botoes>
                </div>        
            }
        </TelaPerfis>
    );
}