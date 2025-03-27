import { useCallback, useState } from "react";
import { useVideoPlayerContext } from "../organisms/VideoPlayerContext";


const VideoPlayerMarker = () => {
    const [hoveredMarker, setHoveredMarker] = useState<number|null>(null);

    const videoPlayerCtx = useVideoPlayerContext("marker")
    const {begin, end, isHovered, playerRef} = videoPlayerCtx
    

    const handleOnClick = useCallback((timestamp) => {
        if (playerRef.current) {
          playerRef.current.seekTo(timestamp);
        }
      }, [playerRef]);

    return (
        <>
          {begin !== 0 && isHovered && <div
    key={0}
    className={`absolute bottom-0 cursor-pointer transition-all duration-200 ${
      hoveredMarker === 0 ? 'w-1 h-4' : 'w-0.5 h-2'
    }`}
    onClick={() => handleOnClick(begin)}
    onMouseEnter={() => setHoveredMarker(0)}
    onMouseLeave={() => setHoveredMarker(null)}
    style={{
      left: `${(begin / playerRef.current.getDuration()) * 100}%`,
      backgroundColor: 'blue'
    }}
  />}


  {end !== 0 && isHovered && <div
    key={1}
    className={`absolute bottom-0 cursor-pointer transition-all duration-200 ${
      hoveredMarker === 1 ? 'w-1 h-4' : 'w-0.5 h-2'
    }`}
    onClick={() => handleOnClick(end)}
    onMouseEnter={() => setHoveredMarker(1)}
    onMouseLeave={() => setHoveredMarker(null)}
    style={{
      left: `${(end / playerRef.current.getDuration()) * 100}%`,
      backgroundColor: 'blue'
    }}
  />}

{ begin !== 0 && end !== 0 && (!isHovered) && <div
      className="absolute bottom-0 h-2"
      style={{
        left: `${(begin / playerRef.current.getDuration()) * 100}%`,
        width: `${((end - begin) / playerRef.current.getDuration()) * 100}%`,
        backgroundColor: 'rgba(143, 101, 223, 0.3)'
      }}
    />
}
      </>
    )
}

export default VideoPlayerMarker;