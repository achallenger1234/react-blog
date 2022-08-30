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

import { useAllBlogs } from "../../../hooks/Blog/useAllBlogs"

export const AllBlog: VFC = memo(() => {
    
    const { blogs, getAllBlogs } = useAllBlogs();
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
                            <AccordionIcon />
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