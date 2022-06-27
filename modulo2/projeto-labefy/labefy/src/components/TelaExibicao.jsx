import React from "react";
import styled from "styled-components";
import { cor4 } from "../constants/Valores";
import { DeletarPlaylist, PegarMusicasPlaylist, PegarTodasPlaylists } from "../services/Conexoes";
import Spinner from "./Spinner";

const Playlist = styled.div`
    background-color: ${cor4};
`

export default class TelaExibicao extends React.Component {

    state = {
        playlists: [],
        playlistDetalhada: {},
        estaCarregando: true
    }

    componentDidMount() {

        PegarTodasPlaylists().then((result) => {
            this.setState({playlists: result})
            this.setState({estaCarregando: false})
        }).catch(() => {
            this.setState({estaCarregando: false})
        })
    }

    componentDidUpdate() {
        
        PegarTodasPlaylists().then((result) => {
            this.setState({playlists: result})
            this.setState({estaCarregando: false})
        }).catch(() => {
            this.setState({estaCarregando: false})
        })
    }

    apagarPlaylist = (id) => {
        if (window.confirm("Confirmar exclusão?")) {
            DeletarPlaylist(id)
        }
        
    }

    exibirDetalhesPlaylist = (id) => {
        this.props.trocarExibicao("detathes-playlist")
        PegarMusicasPlaylist(id).then((resposta) => {
            this.setState({playlistDetalhada: resposta.data.result})
        })
    }

    tratarLink = (urlVideo) => {
        const linkTratado = urlVideo.replace("watch?v=", "embed/")
        return linkTratado
    }


    render() {
        console.log(this.state.playlistDetalhada)
        let playlistsExibidas = ''
        let telaDetalhes = ''
        let telaExibida = ''
        
        if (this.state.playlists) {
            playlistsExibidas = this.state.playlists.map((playlist) => {
                return (
                    <Playlist key={playlist.id}>
                        <span onClick={() => this.exibirDetalhesPlaylist(playlist.id)}>Nome: {playlist.name}</span>
                        <button onClick={() => this.apagarPlaylist(playlist.id)}>Apagar</button>
                    </Playlist>
                )
            })
        } else {
            playlistsExibidas = ''
        }

        if (this.state.playlistDetalhada.tracks) {
            telaDetalhes = this.state.playlistDetalhada.tracks.map((track) => {
                return <div key={track.id}>
                    <iframe 
                    width="300" 
                    height="250"
                    src="https://www.youtube.com/embed/XEEasR7hVhA"
                    title="YouTube video player"                    
                    >
                    </iframe>
                    <p>{track.artist} - {track.name}</p>
                    <p><button>Excluir</button></p>
                </div>
                
            })
        } else {
            telaDetalhes = <Spinner/>
        }

        switch (this.props.exibindo) {
            case "lista-playlists":
                telaExibida = this.state.estaCarregando ? <Spinner/> : playlistsExibidas
                break
            case "detathes-playlist":
                telaExibida = telaDetalhes
                break
            default:
                break
        }

        return (
        <div>
            <div>
                {telaExibida}
            </div>
            
        </div>
        )
    }
}