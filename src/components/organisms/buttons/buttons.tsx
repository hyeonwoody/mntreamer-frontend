import BackButton from "../../molecules/button/backButton";
import ConfirmButton from "../../molecules/button/confirmButton";
import DeleteButton from "../../molecules/button/deleteButton";

interface ButtonProps {
    className : string
    private : string
}


const Buttons = (props : ButtonProps) => {
    return (
        <>
        <BackButton/>
        <ConfirmButton/>
        <DeleteButton className={props.className} fullPath={props.private}></DeleteButton>
        </>
    )
}

export default Buttons;