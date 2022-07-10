import FavoriteIcon from '@mui/icons-material/Favorite';
import { pulse, PulsatingDiv } from "./styles";


export default function Loader() {
    return (
        <PulsatingDiv>
            <svg width={0} height={0}>
                <linearGradient id="linearColors" gradientTransform="rotate(45)">
                    <stop offset='10%' stopColor="#ffb7b7" />
                    <stop offset='90%' stopColor="#ff2020" />
                </linearGradient>
            </svg>
            <FavoriteIcon
            sx={{
                fill: "url(#linearColors)",
                width: '50px',
                height: '50px',
                animation: `${pulse} 1s linear infinite`
            }}
            />
        </PulsatingDiv>
    );
}