import { useCallback, useEffect} from 'react'
import { ConfirmMediaRequest } from '../api/confirmApi';
import { useNavigate } from 'react-router-dom';
import { DeleteMedia } from '../api/deleteApi';

interface KeyboardListenerProps {
    fullPath: string;
}

const KeyboardListener = (props : KeyboardListenerProps) => {
    const navigate = useNavigate();
   
    
    const handleKeyPress = useCallback(async (event) => {
        if (event.ctrlKey && event.key === 'b') {
            event.preventDefault();
                navigate('/')
            return 
        }
        if (event.ctrlKey && event.key === 'x') {
            event.preventDefault();
            await DeleteMedia(props.fullPath)
                navigate('/')
            return 
        }
        if (event.ctrlKey && event.key === 'f') {
            event.preventDefault();
            console.log("CONFIRM")
                await ConfirmMediaRequest(props.fullPath)
                navigate('/')
            return 
        }
    },[])
    
    useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
    }, [handleKeyPress]);

    return (
        <></>
    )

    
}

export default KeyboardListener;