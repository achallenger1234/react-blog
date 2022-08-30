import { VFC, memo, useState, useRef } from "react"


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
    Textarea,
    Button,
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
    useDisclosure
    
} from "@chakra-ui/react";
import { CloseIcon , DeleteIcon} from '@chakra-ui/icons'
import { LoginUser, useLoginUser } from "../../../hooks/Providers/useLoginUserProvider";

import { DefaultButton } from "../../atoms/button/DefaultButton"

import { useChangeUser } from "../../../hooks/User/useChangeUser"

import { useDeleteUser } from "../../../hooks/User/useDeleteUser"

export const EditUser: VFC = memo(() => {
    
    const loginUser: LoginUser = useLoginUser().loginUser
    console.log(loginUser);//email get ok
    
    const { changeUser, loading, error } = useChangeUser();
    
    const [ inputNewName, setInputNewName ] = useState(loginUser.email); 
    
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
    
    const cancelRef = useRef()
    
    const { isOpen, onOpen, onClose } = useDisclosure()
    
    const { deleteUser } = useDeleteUser();


    const onClickDeleteButton = () => {
        deleteUser();
    }

    return (
        <>
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
                    <Divider mx="3vw" />
                    <DefaultButton
                        onClick={onClickPost}
                        loading={false}
                        disabled={inputNewName === "" || inputOldPassword === ""  || inputNewPassword === "" }
                    >change</DefaultButton>
                </Center>
                <Center my="0">
                    <Heading m="4%" as="h3" size="sm" textAlign="center">This Blog: </Heading>
                    <Button  
                        leftIcon={<DeleteIcon />}
                        onClick={onOpen}
                        colorScheme='teal'
                        size='sm'
                        _hover={{ opacity: 0.8 }}
                        px="1vw"
                        m="0"
                    >
                    Delete
                    </Button>
                </Center>
            </Box>
            <AlertDialog
                isOpen={isOpen}
                leastDestructiveRef={cancelRef}
                onClose={onClose}
            >
                <AlertDialogOverlay>
                  　<AlertDialogContent>
                        <AlertDialogHeader fontSize='lg' fontWeight='bold'>
                            Delete User
                        </AlertDialogHeader>
        
                        <AlertDialogBody>
                            Are you sure? You can't undo this action afterwards.
                        </AlertDialogBody>
        
                        <AlertDialogFooter>
                            <Button ref={cancelRef} onClick={onClose}>
                                Cancel
                            </Button>
                            <Button colorScheme='red' onClick={onClickDeleteButton} ml={3}>
                                Delete
                            </Button>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialogOverlay>
            </AlertDialog>
            
        </>
    );
});


export {};