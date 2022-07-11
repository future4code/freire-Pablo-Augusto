import { useEffect, useState } from "react";
import { getMatches } from "../../services/Conexoes";
import Loader from "../Loader/Loader";
import { TelaMatches, Link, Match, DivMatches, SemMatches} from './styles';
import HeartBrokenIcon from '@mui/icons-material/HeartBroken';

export default function Matches() {

    const [matches, setMatches] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

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
                    <Link href='https://web-whatslab.surge.sh/' target='_blank'>
                    <Match key={match.id}>
                        <div><img src={match.photo} alt={`Foto de perfil de ${match.name}`}/></div>
                        {match.name}
                    </Match>
                    </Link>
                
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

            <DivMatches>
                {isLoading ? <Loader/> : matchesExibidos}
            </DivMatches> 
            
        </TelaMatches>
    );
}