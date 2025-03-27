
import Entry from '../../molecules/fileExplorer/entry';
import FileExplorerProvider from './FileExplorerContext';
import CurrentPath from '../../molecules/fileExplorer/currentPath';
import BackButton from '../../molecules/fileExplorer/backButton';


interface FileExplorerProps {
    basePath : string;
}

const FileExplorer = (props : FileExplorerProps) => {
  return (
    <FileExplorerProvider basePath = {props.basePath}>
    <h2>File Explorer</h2>
      <CurrentPath></CurrentPath>
      <BackButton></BackButton>
      <Entry />
    </FileExplorerProvider>
  );
};

export default FileExplorer;
