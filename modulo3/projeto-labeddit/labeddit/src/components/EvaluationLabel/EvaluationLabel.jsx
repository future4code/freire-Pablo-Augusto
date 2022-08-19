import { DivEval } from "./styles";
import ThumbDownAltOutlinedIcon from '@mui/icons-material/ThumbDownAltOutlined';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';

export default function EvaluationLabel(props) {
    return <DivEval>
        <ThumbUpAltIcon color='success' />
        <span>{props.voteSum ? props.voteSum : '0'}</span>
        <ThumbDownAltIcon color='error' />
    </DivEval>
}