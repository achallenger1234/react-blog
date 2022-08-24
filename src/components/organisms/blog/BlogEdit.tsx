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

export const BlogEdit: VFC = memo(() => {
    
    const loginUser: LoginUser = useLoginUser().loginUser
    console.log(loginUser);//email get ok
    
    const [ inputTitle, setInputTitle ] = useState(''); 
    
    const [ inputText, setInputText ] = useState('');
    
    const onChangeTitle= (e) => setInputTitle(e.target.value)
    
    const onChangeText= (e) => setInputText(e.target.value)
    
    const onClickCencel = () => {
        setInputTitle('');
        setInputText('');
    }
    
    const onClickPost = () => {
        //change logic
        
        setInputTitle('');
        setInputText('');
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
                <Heading as="h3" size="md" textAlign="center">change post</Heading>
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
                        onClick={onClickPost}
                        loading={false}
                        disabled={inputTitle === "" || inputText === ""}
                    >Update</DefaultButton>
                </Center>
            </Box>
            
    );
});


export {};