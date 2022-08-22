import { memo, VFC } from "react"

import { 
    Flex ,
    Text
} from "@chakra-ui/react";

import { HeaderFooterLayout } from "../templates/HeaderFooterLayout";




import { useLoginUser, LoginUser } from "../../hooks/Providers/useLoginUserProvider";

export const BlogPage: VFC = memo(() => {
    const a = useLoginUser().loginUser
    console.log(a);//email get ok
    
    return (
        <HeaderFooterLayout>
            <Flex>
                <Text>Hello!{a.email}</Text>
                <Text>BlogPage</Text>
            </Flex>
        </HeaderFooterLayout>
        );
})