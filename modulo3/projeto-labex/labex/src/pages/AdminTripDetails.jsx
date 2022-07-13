import { useNavigate } from "react-router-dom";

export default function AdminTripDetails() {
    const navigate = useNavigate();

    const goToHome = () => {
        navigate('/');
    }

    const goBack = () => {
        navigate(-1);
    }

    return (
      <div>
        <p>Admin Detalhes das Viagens</p>
        <p><button onClick={goToHome}>HomePública</button></p>
        <p><button onClick={goBack}>Voltar</button></p>
      </div>
    );
  }