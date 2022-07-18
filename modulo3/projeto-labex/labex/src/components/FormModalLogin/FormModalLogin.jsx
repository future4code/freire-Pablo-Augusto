import { useState } from "react";
import { useForm } from "../../hooks/useForm";
import { DivFormLogin, FormLogin, CloseButton } from "./styles";


export default function FormModalLogin(props) {

  const [form, controlaCampo, limpaCampos] = useForm({email: '', password: ''});

  // const controlaCampo = (event) => {
  //   const {name, value} = event.target;
  //   setForm({...form, [name]: value});
  // }

  const fechaForm = () => {
    limpaCampos();
    props.close();
  }

  const fazerLogin = (event) => {
    event.preventDefault();
    console.log(form)
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
        <button>Entrar</button>
        </form>
      </FormLogin>
    </DivFormLogin>
  );
  }