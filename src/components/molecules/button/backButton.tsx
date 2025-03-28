
import { useNavigate} from "react-router-dom";
import Button from "../../atoms/button";

const BackButton = () => {
    const navigate = useNavigate();
    const handleOnClick = () => {
        //DeleteMediaPlaylist(props.fullPath)
        navigate('/');
      };

    return (
        <>
         <Button onClick={handleOnClick} text={"Back"}/>
        </>
    )
}

export default BackButton;