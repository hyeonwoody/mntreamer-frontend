import React, {createContext, ReactNode, RefObject, useContext, useRef, useState,} from "react";

interface VideoPlayerContextProps {
  markers : number[]
  setMarkers : React.Dispatch<React.SetStateAction<number[]>>
  begin : number
  setBegin : React.Dispatch<React.SetStateAction<number>>
  end : number
  setEnd : React.Dispatch<React.SetStateAction<number>>
  isHovered : boolean
  setIsHovered : React.Dispatch<React.SetStateAction<boolean>>
  playerRef : RefObject<HTMLVideoElement | null>
}

export const VideoPlayerContext = createContext<VideoPlayerContextProps | undefined>(undefined);

export const useVideoPlayerContext = (componentName: string) => {
    const ctx = useContext(VideoPlayerContext);
    if (!ctx) {
      throw new Error(`${componentName} must be used within a VideoPlayerProvider`);
    }
    return ctx;
}

const VideoPlayerProvider: React.FC<{ children: ReactNode}> = ({children}) => {

    const [markers, setMarkers] = useState<number[]>([]);
    const playerRef = useRef<HTMLVideoElement>(null);
    const [begin, setBegin] = useState<number>(0);
    const [end, setEnd] = useState<number>(0);
    const [isHovered, setIsHovered] = useState<boolean>(false)
    return (
        <VideoPlayerContext.Provider value={{markers, setMarkers, begin, setBegin, end, setEnd, isHovered, setIsHovered, playerRef}}>
          {children}
        </VideoPlayerContext.Provider>
    );
};

export default VideoPlayerProvider;
