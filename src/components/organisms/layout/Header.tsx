import { memo, VFC } from "react";

import { 
    Flex,
    Heading,
    Center,
    useDisclosure
    
    
} from "@chakra-ui/react";


import { LoginUser, useLoginUser } from "../../../hooks/Providers/useLoginUserProvider"

import { MenuIconButton } from "../../atoms/button/MenuIconButton";

export const Header: VFC = memo(() => {
    
    const { isOpen, onOpen, onClose } = useDisclosure();
    
    const loginUser: LoginUser = useLoginUser().loginUser
    console.log(loginUser);
    
    
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
                <Center>
                    <p>humberger</p>
                    <MenuIconButton onOpen={onOpen} />
                </Center>
                ) }

            </Flex>
        </>

    );
});