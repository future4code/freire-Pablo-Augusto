import axios from 'axios';

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
        return response.data.isMatch && alert('Deu match!')
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