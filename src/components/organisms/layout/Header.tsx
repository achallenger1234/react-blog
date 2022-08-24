import { memo, VFC } from "react";

import { useNavigate } from "react-router-dom"

import { 
    Flex,
    Heading,
    Center,
    useDisclosure
    
    
} from "@chakra-ui/react";



import { LoginUser, useLoginUser } from "../../../hooks/Providers/useLoginUserProvider"

import { MenuIconButton } from "../../atoms/button/MenuIconButton"

export const Header: VFC = memo(() => {
    
    const navigate = useNavigate();
    
    const { isOpen, onOpen, onClose } = useDisclosure();
    
    const loginUser: LoginUser = useLoginUser().loginUser
    console.log(loginUser);
    
    const onClickEdit = () => {
        navigate('/edit');
    }
    
    
    return (        
        <>
            <Flex 
                position='fixed'
                top={0}
                bg='green.100' 
                color='green.900'
                h="10%"
                w="100%"
                align="center"
                justify="space-between"
            >
                <Center>
                    <Heading
                        m={6}
                    >
                        Chakra-Blog
                    </Heading>
                </Center>
                {loginUser == null ? (
                    <p></p>
                ) : (
                <Center  mr="2vw">
                    <MenuIconButton onOpen={onClickEdit}/>
                </Center>
                ) }

            </Flex>
        </>

    );
});