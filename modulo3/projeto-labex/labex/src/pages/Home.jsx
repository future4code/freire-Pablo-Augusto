import { useNavigate } from "react-router-dom";

export default function Home() {
    const navigate = useNavigate();

    const goToAdminHomePage = () => {
        navigate('/admin-home')
    }
    return (
      <div>
        <p>Página Home pública</p>
        <p><button onClick={goToAdminHomePage}>AdminHome</button></p>
      </div>
    );
  }