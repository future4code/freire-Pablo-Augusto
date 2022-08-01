import React from "react";
import { Divider, PrimaryButton, SecondaryButton } from "../../components/styledButtons";
import { CustomTextField } from "../../components/styledInputs";
import { BodyLogin, ContainerLogin, FormLogin, DivLogo } from "./styles";
import logo from '../../assets/imagem-logo.svg';
import useForm from "../../hooks/useForm";
import { goToRegistration } from "../../routes/Coordinator";
import Logar from "../../services/Logar";
import { useUnprotectedPage } from "../../hooks/useUnprotectedPage";
import { useNavigate } from "react-router-dom";

export default function Login() {
  useUnprotectedPage();
  
  const navigate = useNavigate();
  
  const [form, onChange, clear] = useForm({email: '', password: ''});


  const fazerLogin = (event) => {
    event.preventDefault();
    Logar(form, clear, navigate);
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
        
        <FormLogin onSubmit={fazerLogin}>
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
        
        
        <div>
          <PrimaryButton variant="outlined" type="submit">
            Entrar
          </PrimaryButton>
        </div>
        </FormLogin>
        <div>
          <Divider />
          <SecondaryButton variant="outlined" onClick={() => goToRegistration(navigate)}>
            Crie uma conta!
          </SecondaryButton>
        </div>
      </BodyLogin>
    </ContainerLogin>
  );
}