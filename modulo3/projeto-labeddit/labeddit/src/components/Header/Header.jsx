import { HeaderContainer } from "./styles";
import CloseIcon from '@mui/icons-material/Close';
import logo from '../../assets/imagem-logo.svg';
import { CustomIconButton, TertiaryButton } from "../styledButtons";
import { useLocation, useNavigate } from "react-router-dom";
import { goToLogin, goBack } from '../../routes/Coordinator';

export default function Header() {

    const navigate = useNavigate();

    let location = useLocation();
    let showBackButton = false;
    let showLoginButton = false;
    let showLogoutButton = false;

    switch(location.pathname) {
        case '/':
            showLogoutButton = true;
            break;
        case '/registration':
            showLoginButton = true;
            break;
        case '/post/:id': // Aqui vai ter que entrar a id do Post
            showLogoutButton = true;
            showBackButton = true;
            break;
        default:
            showLoginButton = true;
            break;
    }

    const fazerLogout = () => {
        localStorage.removeItem('token');
        goToLogin(navigate);
    }


    return <HeaderContainer>
        <div>
            <CustomIconButton size='medium' showbutton={showBackButton} onClick={() => goBack(navigate)}>
                <CloseIcon fontSize='large' />
            </CustomIconButton>
        </div>
        <img src={logo} />
        <div>
            <TertiaryButton 
                variant="text"
                showbutton={showLogoutButton}
                onClick={fazerLogout}
                >Logout
            </TertiaryButton>
            <TertiaryButton 
                variant="text" 
                showbutton={showLoginButton}
                onClick={() => goToLogin(navigate)}
                >Entrar
            </TertiaryButton>
        </div>
    </HeaderContainer>
}