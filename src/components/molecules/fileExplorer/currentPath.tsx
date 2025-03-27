
import { useFileExplorerContext } from "../../organisms/fileExplorer/FileExplorerContext";

const FileExplorerCurrentPath = () => {
    const fileExplorerEntryContext = useFileExplorerContext("currentPath")
    const {currentPath} = fileExplorerEntryContext


    return (
        <>
        <p>{currentPath}</p>
        </>
        
    )
}

export default FileExplorerCurrentPath;