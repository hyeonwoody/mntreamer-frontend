
import { useFileExplorerContext } from "../../organisms/fileExplorer/FileExplorerContext";


const FileExplorerBackButton = () => {
    const fileExplorerEntryContext = useFileExplorerContext("currentPath")
    const {basePath, currentPath, setCurrentPath} = fileExplorerEntryContext

    const handleBackClick = () => {
        const newPath = currentPath.split('/').slice(0, -2).join('/') + '/';
        setCurrentPath(newPath);
      };

    return (
        <>
         <button onClick={handleBackClick} disabled={currentPath === basePath}>Back</button>
        </>
        
    )
}

export default FileExplorerBackButton;