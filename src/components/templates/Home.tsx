
import FileExplorer from '../organisms/fileExplorer/FileExplorer';

export interface FileExplorerCtx {
  rootPath: string;
  currentPathSessionKey: string;
}

export interface HomeProps {
    ctx : FileExplorerCtx[]
}

const Home = (props : HomeProps) => {


  return (
    <>
    {props.ctx.map((item, index) => (
      <FileExplorer key={index} sessionKey={item.currentPathSessionKey} rootPath={item.rootPath}/>
    ))}
  
    </>
    
  );
};

export default Home;
