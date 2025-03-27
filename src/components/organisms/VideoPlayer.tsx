import React, { useState } from 'react'
import VideoPlayerMolecule from '../molecules/videoPlayer'
import VideoPlayerProvider from './VideoPlayerContext';
import VideoPlayerMarker from '../molecules/videoPlayerMarker';
import VideoPlayerInOut from '../molecules/videoPlayerInOut';

interface VideoPlayerProps {
    fullPath: string
}

const VideoPlayer = (props : VideoPlayerProps) => {
  return (
    <VideoPlayerProvider>
        <div className='relative'>
        
                <VideoPlayerMolecule fullPath={props.fullPath}/>
                <div className="absolute bottom-0 mb-4 ml-4  w-full">
                    <VideoPlayerMarker />
                </div>
                <div className="absolute bottom-0 mb-4 ml-4 w-full">
                    <VideoPlayerInOut />
                </div>
        </div>
    </VideoPlayerProvider>
    
  );
};

export default VideoPlayer;