import { DivComm } from "./styles";
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import { useNavigate } from "react-router-dom";
import { goToPost } from "../../routes/Coordinator";

export default function CommentLabel(props) {

    const navigate = useNavigate();

    return <DivComm onClick={() => goToPost(navigate, props.id)}>
        <ChatOutlinedIcon />
        <span>{props.commentCount ? props.commentCount : '0'}</span>
    </DivComm>
}