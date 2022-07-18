import { useState } from "react";
import { URL_Base } from "../../constants/URL";
import { useForm } from "../../hooks/useForm";
import { DivFormLogin, FormLogin, CloseButton } from "./styles";
import axios from 'axios';


export default function FormModalLogin(props) {

  const [form, controlaCampo, limpaCampos] = useForm({email: '', password: ''});
  const [respostaLogin, setRespostaLogin] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const fechaForm = () => {
    limpaCampos();
    props.close();
  }

  const fazerLogin = (event) => {
    event.preventDefault();
    
    const body = {
      email: form.email,
      password: form.password
    }

    setIsLoading(true);
    axios
    .post(`${URL_Base}/login`, body)
    .then((response) => {
        setRespostaLogin(response.data);
        localStorage.setItem('token', response.data.token)
        setIsLoading(false);
        fechaForm();
    })
    .catch((error) => {
        alert('Usuário ou senha inválidos!')
        console.log(error.message)
    })

    
  }
  
  return (
    <DivFormLogin show={props.show}>
      <FormLogin>
        <CloseButton onClick={() => fechaForm()}>Fechar</CloseButton>
        <h1>Login</h1>
        <form onSubmit={fazerLogin}>
        <input
        name='email' 
        type='email'
        value={form.email}
        onChange={controlaCampo}
        placeholder="Digite o e-mail"
        required
        />
        <input
        name='password'
        type='password' 
        value={form.password}
        onChange={controlaCampo}
        placeholder="Digite a senha"
        required
        pattern="^.{6,}"
        title="Sua senha deve ter no mínimo 6 caracteres"
        />
        <button>{ isLoading ? 'Caregando...' : 'Entrar' }</button>
        </form>
      </FormLogin>
    </DivFormLogin>
  );
  }