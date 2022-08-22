import { memo, VFC } from "react"
import { HeaderFooterLayout } from "../templates/HeaderFooterLayout";


export const BlogPage: VFC = memo(() => {
    return (
        <HeaderFooterLayout>
            <p>BlogPage</p>
        </HeaderFooterLayout>
        );
})