
// @ts-nocheck

import { VFC, memo, useEffect, useState, ChangeEvent } from "react"

import {
    Heading,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
    Center,
    Flex
} from '@chakra-ui/react'

import { EditIcon, DeleteIcon  } from '@chakra-ui/icons'

import { useMyBlogs } from "../../../hooks/Blog/useMyBlogs"


import { SelectBlog, useSelectBlog } from "../../../hooks/Providers/useSelectBlogProvider"

export const MyBlog: VFC = memo(() => {
    const { blogs, getAllBlogs } = useMyBlogs();
    useEffect(() => getAllBlogs(), [getAllBlogs]);
    const { setSelectBlog } = useSelectBlog();
    
    const onClickEdit = (id) => {
        console.log("editbutton")
        console.log(id)
        setSelectBlog(id)
    }
    return ( 
        <Accordion 
            allowToggle
            overflow="auto"
        >
            {blogs.map(obj => (
                <AccordionItem key={obj.id}>
                    <Center w="55vw">
                        <AccordionButton value={obj.id} >
                            <Box flex='1' textAlign='left' w="40vw">
                                {obj.userId} : {obj.title}
                            </Box>
                            <AccordionIcon ml="1vw"/>
                        </AccordionButton>
                    </Center>
                    <AccordionPanel pb={4} ml="2vw" w="55vw">
                        <Center>
                          {obj.body}
                        <EditIcon ml="1vw" type="button" onClick={() => onClickEdit(obj.id)}/>
                        <DeleteIcon ml="1vw" />
                         </Center>
                    </AccordionPanel>
                </AccordionItem>            
            ))}
        </Accordion>
    );
});


export {};