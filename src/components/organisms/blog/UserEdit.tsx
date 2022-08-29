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

import { useChangeUser } from "../../../hooks/User/useChangeUser"

export const UserEdit: VFC = memo(() => {
    
    const loginUser: LoginUser = useLoginUser().loginUser
    console.log(loginUser);//email get ok
    
    const { changeUser, loading, error } = useChangeUser();
    
    const [ inputNewName, setInputNewName ] = useState(''); 
    
    const [ inputOldPassword, setInputOldPassword ] = useState('');
    
    const [ inputNewPassword, setInputNewPassword ] = useState('');
    
    const onChangeNewName= (e) => setInputNewName(e.target.value)
    const onChangeOldPassword= (e) => setInputOldPassword(e.target.value)
    const onChangeNewPassword= (e) => setInputNewPassword(e.target.value)
    
    const onClickCencel = () => {
        setInputNewName('');
        setInputOldPassword('');
        setInputNewPassword('');
    }
    
    const onClickPost = () => {
        //logic
        console.log('chamgeUserMettod')        
        changeUser(inputNewName, inputOldPassword, inputNewPassword)
        
        setInputNewName('');
        setInputOldPassword('');
        setInputNewPassword('');
    
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
                <Heading as="h3" size="md" textAlign="center">user edit</Heading>
                <Divider my={2} />
                <FormControl isRequired>
                    <FormLabel>new name</FormLabel>
                    <Input 
                        value={inputNewName}
                        onChange={onChangeNewName}
                    />
                </FormControl>
                <FormControl isRequired>
                    <FormLabel>old password</FormLabel>
                    <Input 
                        value={inputOldPassword}
                        onChange={onChangeOldPassword}
                    />
                </FormControl>
                <FormControl isRequired>
                    <FormLabel>new password</FormLabel>
                    <Input 
                        value={inputNewPassword}
                        onChange={onChangeNewPassword}
                    />
                </FormControl>
                <Divider my={27} />
                <Center ml="4vw" mr="4vw">
                    <DefaultButton
                        onClick={onClickCencel}
                        loading={false}
                        disabled={inputNewName === "" && inputOldPassword === "" &&  inputNewPassword === ""}
                    >Cancel</DefaultButton>
                    <Divider mx={10} />
                    <DefaultButton
                        onClick={onClickPost}
                        loading={false}
                        disabled={inputNewName === "" || inputOldPassword === ""  || inputNewPassword === "" }
                    >change</DefaultButton>
                </Center>
            </Box>
            
        
    );
});


export {};