
// @ts-nocheck

import { memo, VFC, useState } from "react"

import { 
    Flex ,
    Text,
    Box
} from "@chakra-ui/react";


import { SerchBlog } from "../organisms/blog/SerchBlog";
import { MyBlog } from "../organisms/blog/MyBlog";

import { UserEdit } from "../organisms/blog/UserEdit";
import { BlogEdit } from "../organisms/blog/BlogEdit";

import { HeaderFooterLayout } from "../templates/HeaderFooterLayout";




import { useLoginUser, LoginUser } from "../../hooks/Providers/useLoginUserProvider";

import { SelectBlog, useSelectBlog } from "../../hooks/Providers/useSelectBlogProvider"

export const EditPage: VFC = memo(() => {
    
    const [blogEditFlag, setblogEditFlag] = useState(true)
    
    const SelectBlog: SelectBlog = useSelectBlog().SelectBlog
    
    console.log(SelectBlog)
    
    
    return (
    <HeaderFooterLayout iconFlag={false}>
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
                width="65vw"
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
                    w="57vw"
                    h="65vh"
                    mr="3vw"
                    overflow="auto"
                    
                >
                    <MyBlog />                
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
                width="40vw"
            >
                {SelectBlog == null ? (<UserEdit />) : (<BlogEdit />)}
            </Flex>
        </Flex>
    </HeaderFooterLayout>
    );

    
})