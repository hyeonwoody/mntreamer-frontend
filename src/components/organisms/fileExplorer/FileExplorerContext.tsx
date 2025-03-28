import React, {createContext, ReactNode, useContext, useState,} from "react";

interface FileExplorerContextProps {
  rootPath : string;
  currentPath: string;
  setCurrentPath: React.Dispatch<React.SetStateAction<string>>;
}

export const FileExplorerContext = createContext<FileExplorerContextProps | undefined>(undefined);

export const useFileExplorerContext = (componentName: string) => {
    const ctx = useContext(FileExplorerContext);
    if (!ctx) {
      throw new Error(`${componentName} must be used within a FileExplorerProvider`);
    }
    return ctx;
}

const FileExplorerProvider: React.FC<{ children: ReactNode, rootPath: string }> = ({children, rootPath}) => {

    const [currentPath, setCurrentPath] = useState<string>(rootPath);

    return (
        <FileExplorerContext.Provider value={{rootPath, currentPath, setCurrentPath}}>
          {children}
        </FileExplorerContext.Provider>
    );
};

export default FileExplorerProvider;
