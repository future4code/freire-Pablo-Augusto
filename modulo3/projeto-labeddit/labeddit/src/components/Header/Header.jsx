import { HeaderContainer } from "./styles";
import CloseIcon from '@mui/icons-material/Close';
import logo from '../../assets/imagem-logo.svg';
import { CustomIconButton, TertiaryButton } from "../styledButtons";
import { useLocation } from "react-router-dom";
import useCoordinator from "../../hooks/useCoordinator";

export default function Header() {

    const { goToLogin } = useCoordinator();
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

    return <HeaderContainer>
        <div>
            <CustomIconButton size='medium' showbutton={showBackButton}>
                <CloseIcon fontSize='large' />
            </CustomIconButton>
        </div>
        <img src={logo} />
        <div>
            <TertiaryButton 
                variant="text"
                showbutton={showLogoutButton}
                >Logout
            </TertiaryButton>
            <TertiaryButton 
                variant="text" 
                showbutton={showLoginButton}
                onClick={goToLogin}
                >Entrar
            </TertiaryButton>
        </div>
    </HeaderContainer>
}