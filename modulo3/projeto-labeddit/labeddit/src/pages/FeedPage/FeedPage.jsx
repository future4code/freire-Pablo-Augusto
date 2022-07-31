import React from "react";
import CardPost from "../../components/CardPost/CardPost";
import Header from "../../components/Header/Header";
import useCoordinator from "../../hooks/useCoordinator";

export default function Feed() {

  const { goToLogin } = useCoordinator(); 

    return (
      <div>
        <Header />
        Feed
        <button onClick={goToLogin}>Login</button>
        <br/>
        <br/>
        <br/>
        <CardPost/>
      </div>
    );
  }