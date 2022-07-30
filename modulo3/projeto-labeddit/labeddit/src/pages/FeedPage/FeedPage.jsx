import React from "react";
import Header from "../../components/Header/Header";
import useCoordinator from "../../hooks/useCoordinator";

export default function Feed() {

  const { goToLogin } = useCoordinator(); 

    return (
      <div>
        <Header />
        Feed
        <button onClick={goToLogin}>Login</button>
      </div>
    );
  }