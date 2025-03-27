import { useEffect, useState } from "react";
import { useFileExplorerContext } from "../../organisms/fileExplorer/FileExplorerContext";
import { FetchFilesRequest } from "./entryApi";
import FileExplorerFolderEntry from "./folderEntry";
import FileExplorerMediaEntry from "./mediaEntry";
import { useNavigate} from "react-router-dom";

const FileExplorerEntry = () => {
    const [files, setFiles] = useState([]);
    const [folders, setFolders] = useState([]);
    const fileExplorerEntryContext = useFileExplorerContext("entry")
    const {basePath, currentPath, setCurrentPath} = fileExplorerEntryContext

    const navigate = useNavigate();

    const handleFiles = (fileEntries) => {
        const fileList = [];
        const folderList = [];
        fileEntries.forEach (file => {
          if (file.isDirectory) {
            folderList.push(file)
            return;
          }
            fileList.push(file)
        })
        setFiles(fileList)
        setFolders(folderList)
    } 

    const handleFolderClick = (folderName : string) => {
        setCurrentPath(`${currentPath}${folderName}/`);
    };

    const handleMediaClick = (index : number) => {
        console.log (files[index].name)
        navigate('/video', { state: { fullPath: files[index].path } });
    };

    useEffect(() => {
        FetchFilesRequest(currentPath, handleFiles)
      }, [currentPath]);

    return (
        <>
        <ul>
        {folders.map((folder, index) => (
          <FileExplorerFolderEntry index={index} name={folder.name} onClickHandler={handleFolderClick}></FileExplorerFolderEntry>
        ))}
      </ul>
      <h3>Files:</h3>
      <ul>
        {files.map((file, index) => (
          <FileExplorerMediaEntry index={index} name={file.name} onClickHandler={handleMediaClick}></FileExplorerMediaEntry>
        ))}
      </ul>
        </>
        
    )
}

export default FileExplorerEntry;