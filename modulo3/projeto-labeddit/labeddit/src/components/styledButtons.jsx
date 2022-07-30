// import { styled } from '@mui/material/styles';
import { Button, IconButton, TextField } from "@mui/material";
import { primaryDefault, secondaryDefault, primaryHover, secondaryHover, neutralHover } from '../constants/colors';
import styled from 'styled-components';

export const PrimaryButton = styled(Button)`
  && {
    background-image: linear-gradient(to right, ${secondaryDefault}, ${primaryDefault});
    border: none;
    color: white;
    font-weight: bold;
    text-transform: capitalize;
    border-radius: 20px;
    cursor: pointer;
    width: 100%;
    padding: 8px;
    &:hover {
        background-image: linear-gradient(to right, ${secondaryHover}, ${primaryHover});
        border: none;
    }
  }
`;

export const SecondaryButton = styled(Button)`
  && {
    border-color: ${primaryDefault};
    color: ${primaryDefault};
    font-weight: bold;
    text-transform: capitalize;
    border-radius: 20px;
    cursor: pointer;
    width: 100%;
    padding: 8px;
    &:hover {
        background-color: ${neutralHover};
        border: 1px solid ${primaryDefault};
    }
  }
`;

export const TertiaryButton = styled(Button)`
  && {
    display: ${props => props.showButton ? 'block' : 'none'};
    color: ${primaryDefault};
    text-transform: capitalize;
    font-weight: bold;
    font-size: 16px;
    width: 100%;
    &:hover {
        background-color: #e6ddd6;
    }
  }
`
export const CustomIconButton = styled(IconButton)`
  && {
    display: ${props => props.showButton ? 'block' : 'none'};
  }
`

export const ActionButton = styled(Button)`
  && {
    background-image: linear-gradient(to right, ${secondaryDefault}, ${primaryDefault});
    border: none;
    color: white;
    font-weight: bold;
    text-transform: capitalize;
    border-radius: 8px;
    cursor: pointer;
    width: 100%;
    &:hover {
        background-image: linear-gradient(to right, ${secondaryHover}, ${primaryHover});
        border: none;
    }
  }
`;

export const Divider = styled.hr`
  background-image: linear-gradient(to right, ${secondaryDefault}, ${primaryDefault});
  height: 1px;
  border: none;
  margin: 15px 0;
`;