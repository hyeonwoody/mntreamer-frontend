// FileBrowserWithPlayer.jsx
import {My} from '../configuration/web/config'
import {Special} from '../configuration/special/config'
import Layout from '../components/templates/Home'
import { FileExplorerCtx } from '../components/templates/Home';

const my = new My();
const special = new Special();
const HomePage = () => {

  const fileExplorerCtxArr: FileExplorerCtx[] = [
    {
      rootPath: special.path,
      currentPathSessionKey: "NATIVE_CURRENT_PATH",
    },
    {
      rootPath: special.cutEditKey,
      currentPathSessionKey: "REFINE_CURRENT_PATH",
    }
  ];
  return (
    <div>
      <Layout ctx={fileExplorerCtxArr}/>
    </div>
  );
};

export default HomePage;
