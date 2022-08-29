import { VFC, memo, useState, useEffect } from "react"


import { 
    Flex ,
    Center,
    Stack , 
    Box,
    Heading,
    Divider,
    FormControl,
    FormLabel,
    Input,
    FormHelperText,
    FormErrorMessage,
    Textarea
    
} from "@chakra-ui/react";

import { CloseIcon } from '@chakra-ui/icons'


import { DefaultButton } from "../../atoms/button/DefaultButton"

import { useChangeBlog } from "../../../hooks/Blog/useChangeBlog"


import { LoginUser, useLoginUser } from "../../../hooks/Providers/useLoginUserProvider";

import { SelectBlog, useSelectBlog } from "../../../hooks/Providers/useSelectBlogProvider"


export const ChangeBlog: VFC = memo(() => {
    
    const selectBlog: SelectBlog = useSelectBlog().selectBlog
    console.log(selectBlog);
    
    const { setSelectBlog } = useSelectBlog();
    
    const { changeBlog, loading, error } = useChangeBlog()
    
    const [ inputTitle, setInputTitle ] = useState(''); 
    
    const [ inputText, setInputText ] = useState('');
    
    useEffect(() => {
        setInputTitle(selectBlog.title)
        setInputText(selectBlog.text)
    })
    
    const onChangeTitle= (e) => setInputTitle(e.target.value)
    
    const onChangeText= (e) => setInputText(e.target.value)
    
    const onClickCencel = () => {
        setInputTitle('');
        setInputText('');
    }
    
    
    const onClickUpdate = () => {
        //post logic
        const id: number= selectBlog.id
        const userId: number = selectBlog.userId
        
        changeBlog(id, userId, inputTitle, inputText)
        
        //結果表示
        
        setInputTitle('');
        setInputText('');
    }
    
    const onClickClose = () => {
        setSelectBlog(null)
    }

    return (
        
            <Box
                bg="white"
                borderRadius="10px"
                shadow="md"
                w="30vw"
                h="70vh"
                p="1vh"
            >   
                <Box>
                <Heading as="h3" size="md" textAlign="center">change post</Heading>
                <CloseIcon 
                    cursor="pointer"
                    position='absolute'
                    top="10vh"
                    right="7vw"
                    onClick={onClickClose}
                />
                </Box>
                <Divider my={2} />
                <FormControl isRequired>
                    <FormLabel>new Title</FormLabel>
                    <Input 
                        value={inputTitle}
                        placeholder='pre title'
                        onChange={onChangeTitle}
                    />
                </FormControl>
                <FormControl isRequired>
                    <FormLabel>new Text</FormLabel>
                    <Textarea 
                        value={inputText}
                        placeholder='pre body'
                        h="30vh"
                        w="29vw"
                        onChange={onChangeText}
                    />
                </FormControl>
                <Divider my={1} />
                <Center ml="4vw" mr="4vw">
                    <DefaultButton
                        onClick={onClickCencel}
                        loading={false}
                        disabled={inputTitle === "" && inputText === ""}
                    >Cancel</DefaultButton>
                    <Divider mx={10} />
                    <DefaultButton
                        onClick={onClickUpdate}
                        loading={false}
                        disabled={inputTitle === "" || inputText === ""}
                    >Update</DefaultButton>
                </Center>
            </Box>
            
    );
});


export {};