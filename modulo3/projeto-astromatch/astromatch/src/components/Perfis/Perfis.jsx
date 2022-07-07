import styled from "styled-components";

const Div = styled.div`
    & ul li {
        
        width: fit-content;
        margin-left: 25px;
    }
`

export default function Perfis() {
    return(
        <Div>
            <p>Lista de perfis</p>
            <ul>
                <li>Leonardo DiCaprio</li>
                <li>Ariana Grande</li>
                <li>Jennifer Aniston</li>
                <li>Scarlett Johansson</li>
                <li>Keanu Reeves</li>
                <li>Jessica Alba</li>
                <li>Chris Evans</li>
                <li>Chris Hemsworth</li>
                <li>Emma Watson</li>
                <li>Ryan Reynolds</li>
                <li>Nicolas Cage</li>
                <li>Beyoncé</li>
            </ul>
        </Div>
    );
}