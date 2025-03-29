import { useCallback, useEffect, useState } from "react";
import { useVideoPlayerContext } from "../organisms/videoPlayer/VideoPlayerContext";


const VideoPlayerMarker = () => {
    const [hoveredMarker, setHoveredMarker] = useState(null);

    const videoPlayerCtx = useVideoPlayerContext("marker")
    const {markers, playerRef} = videoPlayerCtx
    
    const handleOnClick = useCallback((timestamp) => {
        if (playerRef.current) {
          playerRef.current.seekTo(timestamp);
        }
      }, [playerRef]);


      useEffect(()=>{
        console.log(markers.length)
      },[markers])

    return (
        <>
          {markers.map((time, index) => (
            <div
              key={index}
              className={`absolute bottom-0 bg-red-500 cursor-pointer transition-all duration-200 ${
                hoveredMarker === index ? 'w-1 h-4' : 'w-0.5 h-2'
              }`}
              onClick={() => handleOnClick(time)} 
              onMouseEnter={()=> setHoveredMarker(index)}
              onMouseLeave={()=> setHoveredMarker(null)}
              style={{
                left: `${(time / playerRef.current.getDuration()) * 100}%`
              }}
            />
          ))}
          </>
      )
}

export default VideoPlayerMarker;