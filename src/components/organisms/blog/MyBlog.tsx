import { VFC, memo, useEffect} from "react"

import {
    Heading,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
    Center
} from '@chakra-ui/react'

import { EditIcon, DeleteIcon  } from '@chakra-ui/icons'

import { useMyBlogs } from "../../../hooks/Blog/useMyBlogs"

export const MyBlog: VFC = memo(() => {
    const { blogs, getAllBlogs } = useMyBlogs();
    useEffect(() => getAllBlogs(), [getAllBlogs]);
    return ( 
        <Accordion 
            allowToggle
            overflow="auto"
        >
            {blogs.map(obj => (
                <AccordionItem key={obj.id}>
                    <Heading w="55vw">
                        <AccordionButton>
                            <Box flex='1' textAlign='left' w="40vw">
                                {obj.userId}     : {obj.title}
                            </Box>
                            <AccordionIcon ml="1vw"/>
                            <EditIcon ml="1vw"/>
                            <DeleteIcon ml="1vw" />
                        </AccordionButton>
                    </Heading>
                    <AccordionPanel pb={4} ml="2vw" w="55vw">
                        <Center>
                          {obj.body}
                         </Center>
                    </AccordionPanel>
                </AccordionItem>            
            ))}
        </Accordion>
    );
});


export {};