import React, {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState
} from "react";


export type LoginUser = {
    email: string;
};

type LoginUserContextType = {
  loginUser: LoginUser | null;
  setLoginUser: Dispatch<SetStateAction<LoginUser | null>>;
};

const LoginUserContext = createContext<LoginUserContextType>(
  {} as LoginUserContextType
);

// ログインユーザー情報を保持するcontext
export const LoginUserProvider = (props: { children: ReactNode }) => {
  const { children } = props;
  const [loginUser, setLoginUser] = useState<LoginUser | null>(null);

  return (
    <LoginUserContext.Provider value={{ loginUser, setLoginUser }}>
      {children}
    </LoginUserContext.Provider>
  );
};

export const useLoginUser = (): LoginUserContextType =>
  useContext(LoginUserContext);
