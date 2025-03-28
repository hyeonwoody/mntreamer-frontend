import Button from "../../atoms/button";
import { useNavigate} from "react-router-dom";

interface ConfirmButtonProps {
    className : string
    fullPath: string
}

const ConfirmButton = () => {
    const navigate = useNavigate();
    const handleOnClick = async () => {
        await ConfirmMedia(props.fullPath)
        navigate('/');
      };

    return (
        <>
         <Button onClick={handleOnClick} text={"Confirm"}/>
        </>
    )
}

export default ConfirmButton;