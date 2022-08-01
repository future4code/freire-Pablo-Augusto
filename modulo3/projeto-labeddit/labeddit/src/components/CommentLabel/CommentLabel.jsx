import { DivComm } from "./styles";
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';

export default function CommentLabel(props) {
    return <DivComm>
        <ChatOutlinedIcon />
        <span>{props.commentCount ? props.commentCount : '0'}</span>
    </DivComm>
}