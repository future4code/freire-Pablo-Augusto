import axios from "axios";
import { BASE_URL } from '../constants/urls';
import { goToFeed } from "../routes/Coordinator";


export default function Logar(body, clear, navigate) {

  axios.post(`${BASE_URL}/users/login`, body)
  .then((response) => {
    localStorage.setItem('token', response.data.token)
    clear();
    goToFeed(navigate);
  })
  .catch((error) => {
    alert(error.message)
  })
}