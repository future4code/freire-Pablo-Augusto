import React from "react";
import { BodyRegistration, ContainerRegistration, DivTextFields, DivTexto } from "./styles";
import useInput from "../../hooks/useInput";
import { PrimaryButton } from "../../components/styledButtons";
import logo from '../../assets/imagem-logo.svg'

export default function Registration() {

  const [name, nameInput] = useInput({label: 'Nome de usuário', variant: 'outlined', type: 'text'});
  const [email, emailInput] = useInput({label: 'E-mail', variant: 'outlined', type: 'email'});
  const [password, passwordInput] = useInput({label: 'Senha', variant: 'outlined', type: 'password'});

  const fazerCadastro = () => {
    console.log('Cadastrou')
  }

  return (
    <ContainerRegistration>
      <BodyRegistration>
        <DivTexto>
        <h1>{'Olá, boas vindas ao LabEddit ;)'}</h1>
        </DivTexto>
        
        <DivTextFields>
          {nameInput}
          {emailInput}
          {passwordInput}
        </DivTextFields>
        <DivTexto>
          <p>
            Ao continuar, você concorda com o nosso <span>Contrato de usuário</span> e nossa <span>Política de Privacidade</span>
          </p>
          <p>
            <input type='checkbox' id='subscription' />
            <label for='subscription'>
              Eu concordo em receber e-mails sobre coisas legais no LabEddit
            </label>
          </p>
        </DivTexto>
        <div>
          <PrimaryButton variant="outlined" onClick={fazerCadastro}>
            Cadastrar
          </PrimaryButton>
        </div>
      </BodyRegistration>
    </ContainerRegistration>
  );
}