import { TextField } from '@mui/material';
import { styled } from '@mui/material/styles';
import { primaryDefault } from '../constants/colors';

export const CustomTextField = styled(TextField)({
    '& label.Mui-focused': {
        color: primaryDefault
    },
    '& .MuiOutlinedInput-root': {
        '&.Mui-focused fieldset': {
          borderColor: primaryDefault,
        },  
    }
})