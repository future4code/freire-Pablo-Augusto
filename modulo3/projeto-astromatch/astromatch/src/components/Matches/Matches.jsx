import { useEffect, useState } from "react";
import { getMatches } from "../../services/Conexoes";
import Loader from "../Loader/Loader";
import { TelaMatches, Match, DivMatches} from './styles'

export default function Matches() {

    const [matches, setMatches] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        getMatches().then((response) => {
            setMatches(response.matches)
            setIsLoading(false)
        })
    }, [])

    const matchesExibidos = matches.map((match) => {
        return (
            <Match key={match.id}>
                <div><img src={match.photo} /></div>
                {match.name}
            </Match>
        );
    })

    return(
        <TelaMatches>
            <p>Meus matches</p>

            <DivMatches>
                {isLoading ? <Loader/> : matchesExibidos}
            </DivMatches> 
            
        </TelaMatches>
    );
}