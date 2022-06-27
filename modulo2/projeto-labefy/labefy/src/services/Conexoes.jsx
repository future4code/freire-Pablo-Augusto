import axios from "axios";

export async function PegarTodasPlaylists () {
    try {
        const response = await axios
            .get(
                "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",
                {
                    headers: {
                        Authorization: "pablo-augusto-freire"
                    }
                }
            )
        return response.data.result.list
    }
    
    catch(error) {
        alert(error.message)
    }
    
}

export function CriaPlaylist (nomePlaylist) {

    const body = {
        name: nomePlaylist
    }

    axios
    .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",
        body,
        {
            headers: {
                Authorization: "pablo-augusto-freire"
            }
        }
    )
    .then(() => {
        alert(`Playlist ${nomePlaylist} criada com sucesso!`)
    })
    .catch((error) => {
        alert(error.message)
    })
}

export function DeletarPlaylist (idPlaylist) {
    axios
    .delete(
        `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${idPlaylist}`,
        {
            headers: {
                Authorization: "pablo-augusto-freire"
            }
        }
    )
    .then(() => {
        alert("A Playlist foi deletada!")
    })
    .catch((error) => {
        alert(error.message)
    })
    
}

export async function PegarMusicasPlaylist (idPlaylist) {
    try {
        const response = await axios
        .get(
            `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${idPlaylist}/tracks`,
            {
                headers: {
                    Authorization: "pablo-augusto-freire"
                }
            }
        )
        console.log(response)
        return response
    }
    
    catch(error) {
        console.log(error.message)
    }
}