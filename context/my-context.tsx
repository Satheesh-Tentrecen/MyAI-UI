// context/MyContext.tsx
import React, {
  createContext,
  useState,
  ReactNode,
  useContext,
  Dispatch,
  SetStateAction,
} from "react";

interface MyContextProps {
  prompt: string;
  setPrompt: React.Dispatch<React.SetStateAction<string>>;
  isChatStarted: boolean;
  setrIsChatStarted: React.Dispatch<React.SetStateAction<boolean>>;
  files: File[];
  setFiles: Dispatch<SetStateAction<File[]>>;
}

const MyContext = createContext<MyContextProps | undefined>(undefined);

export const MyProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [prompt, setPrompt] = useState<string>("");
  const [isChatStarted, setrIsChatStarted] = useState<boolean>(false);
  const [files, setFiles] = useState<File[]>([]);

  return (
    <MyContext.Provider
      value={{
        prompt,
        setPrompt,
        isChatStarted,
        setrIsChatStarted,
        files,
        setFiles,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export const useMyContext = () => {
  const context = useContext(MyContext);
  if (!context) {
    throw new Error("useMyContext must be used within a MyProvider");
  }
  return context;
};
