import React from "react";
import { Divider, PrimaryButton, SecondaryButton } from "../../components/styledButtons";
import { CustomTextField } from "../../components/styledInputs";
import { BodyLogin, ContainerLogin, FormLogin, DivLogo } from "./styles";
import logo from '../../assets/imagem-logo.svg';
import useForm from "../../hooks/useForm";
import useCoordinator from "../../hooks/useCoordinator";

export default function Login() {

  const { goToRegistration } = useCoordinator();

  
  const [form, onChange, clear] = useForm({email: '', password: ''});


  const fazerLogin = () => {
    console.log('Logou');
  }
  document.title = "Labeddit - Login"
  return (
    <ContainerLogin>
      <BodyLogin>
        <DivLogo>
          <img src={logo} />
          <h1>LabEddit</h1>
          <span>O projeto de rede social da Labenu</span>
        </DivLogo>
        
        <FormLogin id="form-login" onSubmit={fazerLogin}>
          <CustomTextField
            name='email'
            type='email'
            value={form.email}
            onChange={onChange}
            variant='outlined'
            label='E-mail'
          />
          <CustomTextField
            name='password'
            type='password'
            value={form.password}
            onChange={onChange}
            variant='outlined'
            label='Senha'
          />
        </FormLogin>
        
        <div>
          <PrimaryButton variant="outlined" form='form-login'>
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