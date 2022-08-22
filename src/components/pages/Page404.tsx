import { memo, VFC } from "react"
import { HeaderFooterLayout } from "../templates/HeaderFooterLayout";


export const Page404: VFC = memo(() => {
    return (
        <HeaderFooterLayout>
            <p>Page404</p>
        </HeaderFooterLayout>
        );
})