import { useEffect, useState } from "react";
import { getMatches } from "../../services/Conexoes";
import Loader from "../Loader/Loader";
import { TelaMatches, Match, DivMatches, SemMatches} from './styles';
import HeartBrokenIcon from '@mui/icons-material/HeartBroken';

export default function Matches() {

    const [matches, setMatches] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        getMatches().then((response) => {
            setMatches(response.matches)
            setIsLoading(false)
        })
    }, [])

    let matchesExibidos = '';
    if (matches.length !== 0) {
        matchesExibidos = matches.map((match) => {
            return (
                <Match key={match.id}>
                    <div><img src={match.photo} /></div>
                    {match.name}
                </Match>
            );
        });
    } else {
        matchesExibidos = <SemMatches>
            <p>Não há matches</p>
            <p>
                <HeartBrokenIcon 
                sx={{
                    fontSize: '120px',
                    color: 'gray'
                }}
                />    
            </p>
            </SemMatches>
    }
    

    return(
        <TelaMatches>
            <p>Meus matches</p>

            <DivMatches>
                {isLoading ? <Loader/> : matchesExibidos}
            </DivMatches> 
            
        </TelaMatches>
    );
}