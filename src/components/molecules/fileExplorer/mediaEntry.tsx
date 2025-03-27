interface FileExplorerMediaEntryProps {
    index : number;
    name : string;
    onClickHandler : (index : number) => void
}

const FileExplorerMediaEntry = (props : FileExplorerMediaEntryProps) => {

    return (
        <>
        <li key={props.name} onClick={() => props.onClickHandler(props.index)} style={{ listStyleType: 'none' }}>
        🎬{props.name}
          </li>
        </>
        
    )
}

export default FileExplorerMediaEntry;