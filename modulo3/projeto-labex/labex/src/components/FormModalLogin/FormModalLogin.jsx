import { useState } from "react";
import { DivFormLogin, FormLogin, CloseButton } from "./styles";


export default function FormModalLogin(props) {
  
  return (
    <DivFormLogin show={props.show}>
      <FormLogin>
        <CloseButton onClick={() => props.close()}>Fechar</CloseButton>
        <h1>Login</h1>
        <input type='email' placeholder="Digite o e-mail"/>
        <input type='password' placeholder="Digite a senha"/>
        <button>Entrar</button>
      </FormLogin>
    </DivFormLogin>
  );
  }