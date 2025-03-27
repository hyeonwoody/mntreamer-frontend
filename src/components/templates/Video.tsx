// FileBrowserWithPlayer.jsx
import FileExplorer from '../organisms/fileExplorer/FileExplorer';
import VideoPlayer from '../organisms/VideoPlayer';

interface VideoProps {
    fullPath : string
}

const Video = (props : VideoProps) => {


  return (
    <>
    <h2>{props.fullPath}</h2>
    <VideoPlayer fullPath={props.fullPath}/>
    <p className='text-red-500'>Vidoe</p>
    </>
    
  );
};

export default Video;
