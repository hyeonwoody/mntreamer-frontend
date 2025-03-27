interface FileExplorerFolderEntryProps {
    index : number;
    name : string;
    onClickHandler : (name : string) => void
}

const FileExplorerFolderEntry = (props : FileExplorerFolderEntryProps) => {

    return (
        <>
        <li key={props.name} onClick={() => props.onClickHandler(props.name)} style={{ listStyleType: 'none' }}>
        📁{props.name}
          </li>
        </>
        
    )
}

export default FileExplorerFolderEntry;