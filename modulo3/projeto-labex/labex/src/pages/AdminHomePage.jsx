import { useNavigate } from "react-router-dom";

export default function AdminHomePage() {
    
    const navigate = useNavigate();

    const goToHome = () => {
        navigate('/');
    }

    const goToTripDetails = () => {
        navigate('/admin-tripdetails');
    }

    return (
      <div>
        <p>Página Home do Admin</p>
        <p><button onClick={goToHome}>HomePública</button></p>
        <p><button onClick={goToTripDetails}>Trip Details</button></p>
      </div>
      
    );
  }