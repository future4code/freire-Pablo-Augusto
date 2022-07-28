import { TextField } from "@mui/material";
import React from "react";
import { Divider, PrimaryButton, SecondaryButton } from "../../components/styledComponents";
import { CustomTextField } from "../../components/styledComponents2";
import { BodyLogin, ContainerLogin } from "./styles";

export default function Login() {

  return (
    <BodyLogin>
      <ContainerLogin>
        LOGO
        <div>
          <CustomTextField label='Nome' variant="outlined" type='text' />
          <CustomTextField label='Senha' variant="outlined" type='password' />
        </div>
        <div>
          <PrimaryButton variant="outlined">
            Entrar
          </PrimaryButton>
          <Divider />
          <SecondaryButton variant="outlined">
            Crie uma conta!
          </SecondaryButton>
        </div>
      </ContainerLogin>
    </BodyLogin>
  );
}