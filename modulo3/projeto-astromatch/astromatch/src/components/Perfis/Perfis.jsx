import { Button } from "@mui/material";
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import FavoriteBorderSharpIcon from '@mui/icons-material/FavoriteBorderSharp';
import { useEffect, useState } from "react";
import { choosePerson, getProfileToChoose } from "../../services/Conexoes";
import Loader from "../Loader/Loader";
import { TelaPerfis, BoxImagem, BoxTexto, Botoes } from "./styles";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Perfis() {

    const [perfilAleatorio, setPerfilAleatorio] = useState({});
    const [apertouBotao, setApertouBotao] = useState(false);
    const [isLoading, setIsLoading] = useState(true)

    const escolher = (id, opcao) => {
        setIsLoading(true);
        choosePerson(id, opcao).then(() => {
            setApertouBotao(!apertouBotao);         
        });   
        
    }

    useEffect(() => {
        getProfileToChoose().then((response) => {
            setPerfilAleatorio(response.profile || {});
            setIsLoading(false);
        });
    },[apertouBotao]);    

    return(
        
        <TelaPerfis>
            <>
            <ToastContainer/>
            </>
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
                            color: '#ff4646',
                            borderRadius: '50%',
                            width: '62px',
                            height: '62px',
                            border: '3px solid #ff4646'
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
                            color: '#1c9d1c',
                            borderRadius: '50%',
                            width: '62px',
                            height: '62px',
                            border: '3px solid #1c9d1c'
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