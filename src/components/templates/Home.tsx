// FileBrowserWithPlayer.jsx
import FileExplorer from '../organisms/fileExplorer/FileExplorer';

interface HomeProps {
    basePath : string;
    cutEditKey : string; 
}

const Home = (props : HomeProps) => {


  return (
    <>
    <FileExplorer basePath={props.basePath}/>
    <FileExplorer basePath={props.cutEditKey}/>
    </>
    
  );
};

export default Home;
