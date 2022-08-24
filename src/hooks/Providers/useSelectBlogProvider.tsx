import React, {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState
} from "react";


export type SelectBlog = {
    id: number;
};

type SelectBlogContextType = {
  SelectBlog: SelectBlog | null;
  setSelectBlog: Dispatch<SetStateAction<SelectBlog | null>>;
};

const SelectBlogContext = createContext<SelectBlogContextType>(
  {} as SelectBlogContextType
);

// セレクトブログ情報を保持するcontext
export const SelectBlogProvider = (props: { children: ReactNode }) => {
  const { children } = props;
  const [SelectBlog, setSelectBlog] = useState<SelectBlog | null>(null);

  return (
    <SelectBlogContext.Provider value={{ SelectBlog, setSelectBlog }}>
      {children}
    </SelectBlogContext.Provider>
  );
};

export const useSelectBlog = (): SelectBlogContextType =>
  useContext(SelectBlogContext);
