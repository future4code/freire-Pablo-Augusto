import React from "react";
import { Divider, PrimaryButton, SecondaryButton } from "../../components/styledButtons";
import { BodyLogin, ContainerLogin, DivTextFields, DivLogo } from "./styles";
import logo from '../../assets/imagem-logo.svg';
import useInput from "../../hooks/useInput";
import useCoordinator from "../../hooks/useCoordinator";

export default function Login() {

  const { goToRegistration } = useCoordinator();

  const [name, nameInput] = useInput({label: 'Nome', variant: 'outlined', type: 'text'});
  const [password, passwordInput] = useInput({label: 'Senha', variant: 'outlined', type: 'password'});

  const fazerLogin = () => {
    console.log('Logou');
  }

  return (
    <ContainerLogin>
      <BodyLogin>
        <DivLogo>
          <img src={logo} />
          <h1>LabEddit</h1>
          <span>O projeto de rede social da Labenu</span>
        </DivLogo>
        <DivTextFields>
          {nameInput}
          {passwordInput}
        </DivTextFields>
        <div>
          <PrimaryButton variant="outlined" onClick={fazerLogin}>
            Entrar
          </PrimaryButton>
          <Divider />
          <SecondaryButton variant="outlined" onClick={goToRegistration}>
            Crie uma conta!
          </SecondaryButton>
        </div>
      </BodyLogin>
    </ContainerLogin>
  );
}