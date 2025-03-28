import { DeleteMedia } from "../../api/deleteApi";
import Button from "../../atoms/button";
import { useNavigate} from "react-router-dom";

interface DeleteButtonProps {
    className : string
    fullPath: string
}

const DeleteButton = (props : DeleteButtonProps) => {
    const navigate = useNavigate();
    const handleOnClick = async () => {
        await DeleteMedia(props.fullPath)
        navigate('/');
      };

    return (
        <>
         <Button onClick={handleOnClick} text={"Delete"}/>
        </>
    )
}

export default DeleteButton;