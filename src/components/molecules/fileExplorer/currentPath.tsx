
import { useEffect } from "react";
import { useFileExplorerContext } from "../../organisms/fileExplorer/FileExplorerContext";

interface FileExplorerCurrentPathProps{
    sessionKey : string
}

const FileExplorerCurrentPath = (props : FileExplorerCurrentPathProps) => {
    const fileExplorerEntryContext = useFileExplorerContext(props.sessionKey)
    const {rootPath, currentPath, setCurrentPath} = fileExplorerEntryContext

    useEffect (()=>{
        const sessionCurrentPath = sessionStorage.getItem(props.sessionKey)
        if (sessionCurrentPath) {
            setCurrentPath(sessionCurrentPath)
        } else {
            setCurrentPath(rootPath)
        }
    },[])

    useEffect (()=>{
        sessionStorage.setItem(props.sessionKey, currentPath)
    },[currentPath])

    return (
        <>
        <p>{currentPath}</p>
        </>
        
    )
}

export default FileExplorerCurrentPath;