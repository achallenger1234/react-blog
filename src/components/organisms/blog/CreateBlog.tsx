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

export const CreateBlog: VFC = memo(() => {
    
    const loginUser: LoginUser = useLoginUser().loginUser
    console.log(loginUser);//email get ok
    
    const [ inputTitle, setInputTitle ] = useState(); 
    
    const [ inputText, setInputText ] = useState();
    
    const onChangeTitle= (e) => setInputTitle(e.target.value)
    
    const onChangeText= (e) => setInputText(e.target.value)
    
    const onClickCencel = () => {
        
    }
    
    const onClickPost = () => {
        
    }

    return (
        <Box
            bg="white"
            borderRadius="10px"
            shadow="md"
            w="30vw"
            h="65vh"
            p="1vh"
        >
            <Heading as="h3" size="md" textAlign="center">new post</Heading>
            <Divider my={2} />
            <FormControl isRequired>
                <FormLabel>Title</FormLabel>
                <Input 
                    placeholder='morning routean'
                    onChange={onChangeTitle}
                />
            </FormControl>
            <FormControl isRequired>
                <FormLabel>Text</FormLabel>
                <Textarea 
                    placeholder='I don`t like morning. So I don`t like mornig'
                    h="30vh"
                    w="29vw"
                    onChange={onChangeText}
                />
                <Divider my={1} />
                <Center ml="4vw" mr="4vw">
                    <DefaultButton
                        onClick={onClickCencel}
                        loading={false}
                        disabled={inputTitle === "" && inputText === ""}
                    >Cancel</DefaultButton>
                    <Divider mx={10} />
                    <DefaultButton
                        onClick={onClickPost}
                        loading={false}
                        disabled={inputTitle === "" || inputText === ""}
                    >Post</DefaultButton>
                    
                </Center>
            </FormControl>
        </Box>
    );
});


export {};