

import { memo, VFC, useState, ChangeEvent } from "react"

import { 
    Flex,
    Box,
    Heading,
    Divider,
    Stack,
    Input,
    
} from "@chakra-ui/react";

import { DefaultButton } from "../atoms/button/DefaultButton"
import { HeaderFooterLayout } from "../templates/HeaderFooterLayout";

import { useAuth } from "../../hooks/Login/useAuth";

export const LoginPage: VFC = memo(() => {
    
    const [userEmail, setUserEmail] = useState('');
    
    const [userPassword, setUserPassword] = useState('');
    
    const { login, loading } = useAuth();
    
    const onChangeUserEmail = (e: ChangeEvent<HTMLInputElement>) => {
        setUserEmail(e.target.value);
    }
    
    const onChangeUserPassword = (e: ChangeEvent<HTMLInputElement>) => {
        setUserPassword(e.target.value);
    }
    
    const onClickLogin = () => {
        login(userEmail, userPassword);
    }
    
    return (
        <HeaderFooterLayout>
            <Flex alignItems="center" justifyContent="center" height="100vh">
                <Box
                    m={0}
                    position='fixed'
                    top='30vh'
                    bg="white" 
                    w="sm" 
                    p={6} 
                    borderRadius="md" 
                    shadow="md"
                >
                    <Heading as="h1" size="lg" textAlign="center">
                        Login
                    </Heading>
                    <Divider my={2} />
                    <Stack spacing={6} py={4} px={10}>
                        <Input
                            placeholder="EMAIL"
                            value={userEmail}
                            onChange={onChangeUserEmail}
                        />
                        <Input
                            value={userPassword}
                            placeholder="PASSWORD"
                            onChange={onChangeUserPassword}
                        />
                        <DefaultButton
                            onClick={onClickLogin}
                            loading={loading}
                            disabled={userEmail === "" || userPassword === ""}
                        >
                            Enter
                        </DefaultButton>
                    </Stack>
                </Box>
            </Flex>
        </HeaderFooterLayout>
        );
})