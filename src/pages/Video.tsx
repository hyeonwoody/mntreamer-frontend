// FileBrowserWithPlayer.jsx
import {My} from '../configuration/web/config'
import {Special} from '../configuration/special/config'
import Layout from '../components/templates/Video'
import { useLocation } from 'react-router-dom';
const my = new My();
const special = new Special();

const VideoPage = () => {
    const location = useLocation();
    const fullPath = location.state?.fullPath;

  return (
    <div>
      <Layout fullPath= {fullPath}/>
    </div>
  );
};

export default VideoPage;