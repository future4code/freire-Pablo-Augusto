import React from "react";
import { ActionButton, Divider, PrimaryButton, SecondaryButton } from "../../components/styledComponents";

export default function Login() {
    
    return (
      <div>
        Página de Login
        <PrimaryButton 
        variant="outlined" 
        >
          Outro
        </PrimaryButton>
        <Divider/>
        <SecondaryButton
        variant="outlined">
          Pablo
        </SecondaryButton>
        <Divider/>
        <ActionButton variant="outlined">
          Postar
        </ActionButton>
        <Divider/>
        <ActionButton variant="outlined">
          Responder
        </ActionButton>
      </div>
    );
  }