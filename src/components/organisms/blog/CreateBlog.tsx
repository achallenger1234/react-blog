import { VFC, memo, useState } from "react"


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

import { LoginUser, useLoginUser } from "../../../hooks/Providers/useLoginUserProvider";

import { DefaultButton } from "../../atoms/button/DefaultButton"

import { useCreateBlog } from "../../../hooks/Blog/useCreateBlog"

export const CreateBlog: VFC = memo(() => {
    
    const loginUser: LoginUser = useLoginUser().loginUser
    console.log(loginUser);//email get ok
    
    const [ inputTitle, setInputTitle ] = useState(''); 
    
    const [ inputText, setInputText ] = useState('');
    
    const { insertBlog, loading, error } = useCreateBlog()
        
    const onChangeTitle= (e) => setInputTitle(e.target.value)
    
    const onChangeText= (e) => setInputText(e.target.value)
    
    const onClickCencel = () => {
        setInputTitle('');
        setInputText('');
    }
    
    const onClickPost = () => {
        //post logic
        const userId: number = loginUser.userId
        insertBlog(userId, inputTitle, inputText)
        
        //結果表示
        
        setInputTitle('');
        setInputText('');
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
            <Heading as="h3" size="md" textAlign="center">new post</Heading>
            <Divider my={2} />
            <FormControl isRequired>
                <FormLabel>Title</FormLabel>
                <Input 
                    value={inputTitle}
                    placeholder='morning routean'
                    onChange={onChangeTitle}
                />
            </FormControl>
            <FormControl isRequired>
                <FormLabel>Text</FormLabel>
                <Textarea 
                    value={inputText}
                    placeholder='I don`t like morning. So I don`t like mornig'
                    h="30vh"
                    w="29vw"
                    onChange={onChangeText}
                />
            </FormControl>
            <Divider my={1} />
            <Center ml="4vw" mr="4vw" >
                <DefaultButton 
                    onClick={onClickCencel}
                    loading={false}
                    disabled={inputTitle === "" && inputText === ""}
                >Cancel</DefaultButton>
                <Divider mx="3vw" />
                <DefaultButton
                    onClick={onClickPost}
                    loading={false}
                    disabled={inputTitle === "" || inputText === ""}
                >Post</DefaultButton>
                
            </Center>
        </Box>
    );
});


export {};