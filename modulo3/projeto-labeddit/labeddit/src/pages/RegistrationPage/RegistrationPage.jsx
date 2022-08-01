import React from "react";
import { BodyRegistration, ContainerRegistration, FormRegistration, DivTexto } from "./styles";
import { CustomTextField } from "../../components/styledInputs";
import { PrimaryButton } from "../../components/styledButtons";
import Header from "../../components/Header/Header";
import useForm from "../../hooks/useForm";
import { useUnprotectedPage } from "../../hooks/useUnprotectedPage";
import { useNavigate } from "react-router-dom";
import Cadastrar from "../../services/Cadastrar";

export default function Registration() {
  useUnprotectedPage();
  const [form, onChange, clear] = useForm({username: '', email: '', password: ''})

  const navigate = useNavigate();

  const fazerCadastro = (event) => {
    event.preventDefault();
    Cadastrar(form, clear, navigate);
  }

  return (
    <ContainerRegistration>
      <Header/>
      <BodyRegistration>
        <DivTexto>
        <h1>{'Olá, boas vindas ao LabEddit ;)'}</h1>
        </DivTexto>
        
        <FormRegistration onSubmit={fazerCadastro}>
          <div>
            <CustomTextField
              name='username'
              type='text'
              value={form.username}
              onChange={onChange}
              variant='outlined'
              label='Nome de usuário'
              required
            />
            <CustomTextField
              name='email'
              type='email'
              value={form.email}
              onChange={onChange}
              variant='outlined'
              label='E-mail'
              required
            />
            <CustomTextField
              name='password'
              type='password'
              value={form.password}
              onChange={onChange}
              variant='outlined'
              label='Senha'
              required
            />
          </div>

          <DivTexto>
            <p>
              Ao continuar, você concorda com o nosso <span>Contrato de usuário</span> e nossa <span>Política de Privacidade</span>
            </p>
            <p>
              <input type='checkbox' id='subscription' />
              <label htmlFor='subscription'>
                Eu concordo em receber e-mails sobre coisas legais no LabEddit
              </label>
            </p>
          </DivTexto>
          <div>
            <PrimaryButton variant="outlined" type="submit">
              Cadastrar
            </PrimaryButton>
          </div>
        </FormRegistration>
      </BodyRegistration>
    </ContainerRegistration>
  );
}