import React from "react";
import { BodyRegistration, ContainerRegistration, FormRegistration, DivTexto } from "./styles";
import { CustomTextField } from "../../components/styledInputs";
import { PrimaryButton } from "../../components/styledButtons";
import Header from "../../components/Header/Header";
import useForm from "../../hooks/useForm";

export default function Registration() {

  const [form, onChange, clear] = useForm({username: '', email: '', password: ''})

  const fazerCadastro = () => {
    console.log('Cadastrou')
  }

  return (
    <ContainerRegistration>
      <Header/>
      <BodyRegistration>
        <DivTexto>
        <h1>{'Olá, boas vindas ao LabEddit ;)'}</h1>
        </DivTexto>
        
        <FormRegistration id="form-cadastro" onSubmit={fazerCadastro}>
          <CustomTextField
            name='username'
            type='text'
            value={form.email}
            onChange={onChange}
            variant='outlined'
            label='Nome de usuário'
          />
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
        </FormRegistration>

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
          <PrimaryButton variant="outlined" form='form-cadastro'>
            Cadastrar
          </PrimaryButton>
        </div>
      </BodyRegistration>
    </ContainerRegistration>
  );
}