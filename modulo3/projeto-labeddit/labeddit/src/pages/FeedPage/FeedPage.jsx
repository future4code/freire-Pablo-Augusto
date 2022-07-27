import React from "react";
import useCoordinator from "../../hooks/useCoordinator";

export default function Feed() {

  const { goToLogin } = useCoordinator(); 

    return (
      <div>
        Feed
        <button onClick={goToLogin}>Login</button>
      </div>
    );
  }