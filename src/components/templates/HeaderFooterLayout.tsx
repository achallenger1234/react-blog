// @ts-nocheck

import { memo, ReactNode, VFC } from "react";

import { Header } from "../organisms/layout/Header";
import { Footer } from "../organisms/layout/Footer";

type Props = {
    children: ReactNode;
    iconFlag: boolean;
}

export const HeaderFooterLayout: VFC<Props> = memo(props => {
    const { children, iconFlag } = props;
    return ( 
        <>
            <Header iconFlag={iconFlag} />
                {children}
            <Footer />
        </>
    );
});