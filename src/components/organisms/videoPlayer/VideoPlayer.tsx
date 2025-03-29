import React, { useState } from 'react'
import VideoPlayerMolecule from '../../molecules/videoPlayer'
import VideoPlayerProvider from './VideoPlayerContext';
import VideoPlayerMarker from '../../molecules/videoPlayerMarker';
import VideoPlayerInOut from '../../molecules/videoPlayerInOut';
import KeyboardListener from '../keyboardListener';

interface VideoPlayerProps {
    fullPath: string
}

const VideoPlayer = (props : VideoPlayerProps) => {
  return (
    <VideoPlayerProvider>
      <KeyboardListener fullPath={props.fullPath}/>
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