import React, { useCallback, useEffect, useRef, useState } from 'react'
import { ExciseInOutRequest, FetchUrlRequest, GetUrl, FetchTargetDuration } from './videoPlayerApi';
import ReactPlayer from 'react-player';
import { useVideoPlayerContext } from '../organisms/VideoPlayerContext';


interface VideoPlayerProps {
    fullPath: string;
}

const VideoPlayer = (props : VideoPlayerProps) => {
    const [url, setUrl] = useState<string>();
    const [targetDuration, setTargetDuration] = useState<number>();

    const videoPlayerCtx = useVideoPlayerContext("marker")
    const {markers, setMarkers, begin, setBegin, end,  setEnd,setIsHovered, playerRef} = videoPlayerCtx

    const [currentTime, setCurrentTime] = useState(0)
    
   
    
    const handleKeyPress = useCallback((event) => {
    if (playerRef.current) {
        const player = playerRef.current.getInternalPlayer();

        if (event.ctrlKey && event.key === 'd') {
            event.preventDefault();
            console.log('Ctrl + D pressed')
            console.log('begin : ' +begin, 'end : ', end)
            ExciseInOutRequest(props.fullPath, begin, end)
            return
        }

        switch (event.key) {
        case ' ':
            event.preventDefault();
            player.paused ? player.play() : player.pause();
            break;
        case 'ArrowRight':
            playerRef.current.seekTo(playerRef.current.getCurrentTime() + 10);
            break;
        case 'ArrowLeft':
            playerRef.current.seekTo(playerRef.current.getCurrentTime() - 10);
            break;
        case 'ArrowUp':
            playerRef.current.seekTo(playerRef.current.getCurrentTime() + 60);
            break;
        case 'ArrowDown':
            playerRef.current.seekTo(playerRef.current.getCurrentTime() - 60);
            break;
            
        case 'q':
            setBegin(currentTime)
            if (currentTime > (end ?? Infinity)) {
                setEnd(0)
            }
            break;
        case 'e':
            setEnd(currentTime)
            if (currentTime < (begin ?? Infinity)) {
                setBegin(0)
            }
            break;
        case 't':
            console.log(`tCurrent timestamp: ${currentTime} seconds`);
            break;
        case 'm':
            setMarkers([...markers, currentTime])
            break;
        }
    }
    }, [currentTime]);
    useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
    }, [handleKeyPress]);
    useEffect(() => {
        setUrl(GetUrl(props.fullPath));
        FetchTargetDuration(props.fullPath)
        .then (duration => {
            if (duration !== undefined) {
                setTargetDuration(duration)
            }
        })
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
    onProgress={({playedSeconds}) => setCurrentTime(playedSeconds)}
  />
</div>
    )

};

export default VideoPlayer;