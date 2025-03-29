import { useCallback, useEffect} from 'react'
import { ConfirmMediaRequest } from '../api/confirmApi';
import { useNavigate } from 'react-router-dom';
import { DeleteMedia } from '../api/deleteApi';
import { useVideoPlayerContext } from '../organisms/videoPlayer/VideoPlayerContext';
import { ExciseInOutRequest } from '../api/videoPlayerApi';
interface KeyboardListenerProps {
    fullPath: string;
}

const KeyboardListener = (props : KeyboardListenerProps) => {
    const navigate = useNavigate();
    const videoPlayerCtx = useVideoPlayerContext("keyboardListener")
    const {targetDuration, begin, setBegin, end, setMarkers,  setEnd, playerRef} = videoPlayerCtx
    

    const handleKeyPress = useCallback(async (event) => {
       
        if (event.ctrlKey && event.key === 'd') {
            console.log("DDDD")
            event.preventDefault();
                    if (end - begin > targetDuration) {
                        await ExciseInOutRequest(props.fullPath, begin, end);
                        window.location.reload();
                    }
                    return;
        }
        if (event.ctrlKey && event.key === 'b') {
            event.preventDefault();
            navigate("/");
                    return;

        }
        if (event.ctrlKey && event.key === 'x') {
            await DeleteMedia(props.fullPath);
                    navigate("/");
                    return;

        }
        if (event.ctrlKey && event.key === 'f') {
            event.preventDefault();
                    await ConfirmMediaRequest(props.fullPath);
                    navigate("/");
                    return;

        }
        if (playerRef.current) {
            event.preventDefault();
            const player = playerRef.current.getInternalPlayer();
            const currentTime = playerRef.current.getCurrentTime()
            switch (event.key) {
            case ' ':
                player.paused ? player.play() : player.pause();
                break;
            case 'ArrowRight':
                playerRef.current.seekTo(currentTime + 10);
                break;
            case 'ArrowLeft':
                playerRef.current.seekTo(currentTime - 10);
                break;
            case 'ArrowUp':
                playerRef.current.seekTo(((currentTime / targetDuration) + 1) * targetDuration);
                break;
            case 'ArrowDown':
                playerRef.current.seekTo(((currentTime / targetDuration) - 1) * targetDuration);
                break;
            case 'q':
                if (currentTime < 1) {
                    setBegin(0)
                    break
                }
                setBegin(currentTime)
                break;
            case 'e':
                setEnd(currentTime)
                break;
            case 'm':
                setMarkers((prevMarkers) => [...prevMarkers, currentTime]);
                break;
            }
        }
    }, [navigate, begin, end, targetDuration, playerRef,props.fullPath])
    

    useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
    }, [handleKeyPress]);

 
    return (
        <></>
    )

    
}

export default KeyboardListener;