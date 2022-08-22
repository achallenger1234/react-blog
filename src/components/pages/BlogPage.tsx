import { memo, VFC } from "react"

import { 
    Flex ,
    Text
} from "@chakra-ui/react";

import { MyBlog } from "../organisms/blog/MyBlog";
import { AllBlog } from "../organisms/blog/AllBlog";


import { HeaderFooterLayout } from "../templates/HeaderFooterLayout";




import { useLoginUser, LoginUser } from "../../hooks/Providers/useLoginUserProvider";

export const BlogPage: VFC = memo(() => {
    
    return (
        <HeaderFooterLayout>
            <Flex                 
                position="fixed"
                alignItems="center" 
                justifyContent="center" 
                top="10%"
                bottom="5%"
                height="85%" 
                width="100vw"
            >
                <Flex
                    position="fixed"
                    alignItems="center" 
                    justifyContent="center" 
                    top="10%"
                    bottom="5%"
                    left="0%"
                    height="85%" 
                    width="50vw"
                >
                    <MyBlog 
                    />
                </Flex>
                <Flex
                    position="fixed"
                    alignItems="center" 
                    justifyContent="center" 
                    top="10%"
                    bottom="5%"
                    right="0%"
                    height="85%" 
                    width="50vw"
                >
                    <AllBlog />
                </Flex>
            </Flex>
        </HeaderFooterLayout>
        );
})