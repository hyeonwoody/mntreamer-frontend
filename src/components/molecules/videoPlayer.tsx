import { useEffect, useState } from 'react'
import { GetUrl, FetchTargetDuration } from '../api/videoPlayerApi';
import ReactPlayer from 'react-player';
import { useVideoPlayerContext } from '../organisms/videoPlayer/VideoPlayerContext';
import KeyboardListener from '../organisms/keyboardListener';
interface VideoPlayerProps {
    fullPath: string;
}

const VideoPlayer = (props : VideoPlayerProps) => {
    const [url, setUrl] = useState<string>();

    const videoPlayerCtx = useVideoPlayerContext("marker")
    const {playerRef, setIsHovered, setTargetDuration} = videoPlayerCtx

    KeyboardListener({fullPath : props.fullPath})

    useEffect(() => {
        const url = GetUrl(props.fullPath)
        console.log("FEW : ", url)
        setUrl(url);
        
        FetchTargetDuration(props.fullPath)
          .then(duration => {
            if (duration !== undefined) {
              setTargetDuration(duration);
            }
          })
          .catch(error =>            console.error("Error setting target duration:", error));
      }, [props.fullPath]);


    return (
        <div onMouseEnter={()=> setIsHovered(true)}
        onMouseLeave={()=> setIsHovered(false)}>
        
  <ReactPlayer
    ref={playerRef}
    url={url}
    controls
    playing
    width={"100%"}
    height={"auto"}
    
  />
</div>
    )

};

export default VideoPlayer;