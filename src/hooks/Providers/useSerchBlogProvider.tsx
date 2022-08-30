import React, {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState
} from "react";


export type SerchtBlog = {
    serchText: string;
};

type SerchBlogContextType = {
  serchText: SerchtBlog | null;
  setSerchBlog: Dispatch<SetStateAction<SerchtBlog | null>>;
};

const SerchBlogContext = createContext<SerchBlogContextType>(
  {} as SerchBlogContextType
);

// セレクトブログ情報を保持するcontext
export const SerchBlogProvider = (props: { children: ReactNode }) => {
  const { children } = props;
  const [serchText, setSerchBlog] = useState<SerchtBlog | null>(null);

  return (
    <SerchBlogContext.Provider value={{ serchText, setSerchBlog }}>
      {children}
    </SerchBlogContext.Provider>
  );
};

export const useSerchBlog = (): SerchBlogContextType =>
  useContext(SerchBlogContext);
