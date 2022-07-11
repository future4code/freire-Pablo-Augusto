import axios from 'axios';
import { ToastContainer, toast, Zoom} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const matchNotification = () => {
    toast('♡ Deu match ! ♡', {
        className: 'deu-match',
        position: toast.POSITION.TOP_CENTER,
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined
    });
}

export async function getProfileToChoose() {
    try {
        const response = await axios.get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/pablo/person');
        return response.data;
    }
    catch(error) {
        console.log(error.message);
    }
}


export async function choosePerson(id, opcao) {

    const body = {
        id: id,
        choice: opcao
    }

    try {
        const response = await axios
        .post(
            'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/pablo/choose-person',
            body
            );
        return response.data.isMatch && matchNotification();
    }
    catch(error) {
        console.log(error.message);
    }
}

export async function clearAll() {
    try {
        await axios.put('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/pablo/clear');
    }
    catch(error) {
        console.log(error.message);
    }
}

export async function getMatches() {
    try {
        const response = await axios
        .get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/pablo/matches');
        return response.data;
    }
    catch(error) {
        console.log(error.message);
    }
}