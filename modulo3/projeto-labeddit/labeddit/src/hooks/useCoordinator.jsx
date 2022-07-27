import { useNavigate } from "react-router-dom";

const useCoordinator = () => {

    const navigate = useNavigate();

    const goToFeed = () => {
        navigate('/');
    }

    const goToLogin = () => {
        navigate('/login');
    }

    const goToRegistration = () => {
        navigate('/registration');
    }

    const goToPost = (id) => {
        navigate(`/post/${id}`);
    }

    return { goToFeed, goToLogin, goToRegistration, goToPost }
}

export default useCoordinator;