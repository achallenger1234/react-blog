import { memo, VFC } from "react"

import { 
    Flex ,
    Text,
    Box
} from "@chakra-ui/react";

import { MyBlog } from "../organisms/blog/MyBlog";
import { AllBlog } from "../organisms/blog/AllBlog";
import { SerchBlog } from "../organisms/blog/SerchBlog";

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
                    height="85vh" 
                    width="70vw"
                >
                    <Box
                        position="fixed"
                        left="5vw"
                        top="10%"
                        w="60vw"
                        h="15vh"
                    >
                        <SerchBlog />                
                    </Box>
                    <Box
                        position="fixed"
                        left="5vw"
                        bottom="10%"
                        w="60vw"
                        h="65vh"
                    >
                        <AllBlog />                
                    </Box>
                </Flex>
                <Flex
                    position="fixed"
                    alignItems="center" 
                    justifyContent="center" 
                    top="10%"
                    bottom="5%"
                    right="0%"
                    height="85vh" 
                    width="30vw"
                >
                    <MyBlog />
                </Flex>
            </Flex>
        </HeaderFooterLayout>
        );
})