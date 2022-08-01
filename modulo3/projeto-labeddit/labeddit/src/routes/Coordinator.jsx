export const goToFeed = (navigate) => {
    navigate("/");
  };
  
  export const goToLogin = (navigate) => {
    navigate("/login");
  };
  
  export const goToRegistration = (navigate) => {
    navigate("/registration");
  };
  
  export const goToPost = (navigate, id) => {
    navigate(`/post/${id}`);
  };
  
  export const goBack = (navigate) => {
    navigate(-1);
  };