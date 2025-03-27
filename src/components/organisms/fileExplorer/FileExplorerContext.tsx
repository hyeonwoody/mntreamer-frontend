import React, {createContext, ReactNode, useContext, useState,} from "react";

interface FileExplorerContextProps {
  basePath : string;
  currentPath: string;
  setCurrentPath: React.Dispatch<React.SetStateAction<string>>;
}

export const GameContext = createContext<FileExplorerContextProps | undefined>(undefined);

export const useFileExplorerContext = (componentName: string) => {
    const ctx = useContext(GameContext);
    if (!ctx) {
      throw new Error(`${componentName} must be used within a FileExplorerProvider`);
    }
    return ctx;
}

const FileExplorerProvider: React.FC<{ children: ReactNode, basePath: string }> = ({children, basePath}) => {

    const [currentPath, setCurrentPath] = useState<string>(basePath);

    return (
        <GameContext.Provider value={{basePath, currentPath, setCurrentPath}}>
          {children}
        </GameContext.Provider>
    );
};

export default FileExplorerProvider;
