
import Entry from '../../molecules/fileExplorer/entry';
import FileExplorerProvider from './FileExplorerContext';
import CurrentPath from '../../molecules/fileExplorer/currentPath';
import BackButton from '../../molecules/fileExplorer/backButton';
import { useEffect, useState } from 'react';


interface FileExplorerProps {
    sessionKey: string;
    rootPath : string;
}

const FileExplorer = (props : FileExplorerProps) => {
  


  return (
    <FileExplorerProvider rootPath = {props.rootPath}>
    <h2>File Explorer</h2>
      <CurrentPath sessionKey={props.sessionKey}/>
      <BackButton></BackButton>
      <Entry/>
    </FileExplorerProvider>
  );
};

export default FileExplorer;
