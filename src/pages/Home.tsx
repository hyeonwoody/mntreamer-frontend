// FileBrowserWithPlayer.jsx
import {My} from '../configuration/web/config'
import {Special} from '../configuration/special/config'
import Layout from '../components/templates/Home'
const my = new My();
const special = new Special();

const HomePage = () => {


  return (
    <div>
      <Layout basePath={special.path} cutEditKey={special.cutEditKey}/>
    </div>
  );
};

export default HomePage;
