import { useEffect, useState } from "react";
import styled from "styled-components";
import { getMatches } from "../../services/Conexoes";

const Div = styled.div`
    & ul li {
        
        width: fit-content;
        margin-left: 25px;
    }
`

export default function Matches() {

    const [matches, setMatches] = useState([]);

    useEffect(() => {
        getMatches().then((response) => {
            setMatches(response.matches)
            console.log(response.matches)
        })
    }, [])

    return(
        <Div>
            Lista de matches
            <ul>
                {
                    matches.map((match) => {
                        return <li key={match.id}>{match.name}, {match.age}</li>
                    })
                }
            </ul>
        </Div>
    );
}