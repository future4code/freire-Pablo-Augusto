import { createTheme } from "@mui/system";

export const primaryButtonTheme =  createTheme({
    
    backgroundImage: 'linear-gradient(to left, #ff9346, #ff5473)',
    border: 'none',
    color: 'white',
    fontWeight: 'bold',
    textTransform: 'capitalize',
    width: '200px',
    borderRadius: '20px',
    cursor: 'pointer',
    width: '100%',
    '&:hover': {
        backgroundImage: 'linear-gradient(to left, #ee883f, #e84764)',
        border: 'none'
    }   
});