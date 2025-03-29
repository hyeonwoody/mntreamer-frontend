import Buttons from '../organisms/buttons/buttons';
import KeyboardListener from '../organisms/keyboardListener';
import VideoPlayer from '../organisms/videoPlayer/VideoPlayer';

interface VideoProps {
    fullPath : string
}

const Video = (props : VideoProps) => {


  return (
    <>
    <h2>{props.fullPath}</h2>
    
    <VideoPlayer fullPath={props.fullPath}/>
    <p className='text-red-500'>Vidoe</p>
    <Buttons className="bg-blue-500 hover:bg-blue-700 text-blue font-bold py-2 px-4 rounded" private={props.fullPath}></Buttons>
    </>
    
  );
};

export default Video;
