import axios from 'axios';
import { useState } from 'react';

export const Logar = (url, email, senha) => {
    const [resposta, setResposta] = useState(undefined);
    const [isLoading, setIsLoading] = useState(false);
    
    const body = {
        email: email,
        password: senha
    }

    
    setIsLoading(true);
    axios
    .post(url, body)
    .then((response) => {
        setResposta(response.data);
        setIsLoading(false);
    })
    .catch((error) => {
        alert('Usuário ou senha inválidos!')
        console.log(error.message)
    })
    

    return [resposta, isLoading]

}