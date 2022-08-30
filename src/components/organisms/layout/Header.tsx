import { memo, VFC } from "react";

import { useNavigate } from "react-router-dom"

import { 
    Flex,
    Heading,
    Center,
} from "@chakra-ui/react";






import { LoginUser, useLoginUser } from "../../../hooks/Providers/useLoginUserProvider"

import { SerchtBlog, useSerchBlog } from "../../../hooks/Providers/useSerchBlogProvider"

import { MenuIconButton } from "../../atoms/button/MenuIconButton"

import { LogoutButton } from "../../atoms/button/LogoutButton"

type Props = {
  iconFlag: boolean
};

export const Header: VFC = memo((props: Props) => {

    const { iconFlag } = props;
    
    const navigate = useNavigate();
    
    const { setLoginUser } = useLoginUser();
    
    
    const loginUser: LoginUser = useLoginUser().loginUser
    
    const { setSerchBlog } = useSerchBlog();
    

    
    const onClickEdit = () => {
        setSerchBlog(null)
        navigate('/edit');
    }
    
    const onClickHome = () => {
        setSerchBlog(null)
        navigate('/blog');
    }
    
    const onclickLogout = () => {
        setLoginUser(null);
        setSerchBlog(null)    
        navigate('/');
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
                <Center  mr="1vw">
                    {iconFlag ? (
                        <MenuIconButton onOpen={onClickEdit} iconFlag={iconFlag}/>
                    ) : (
                        <MenuIconButton onOpen={onClickHome} iconFlag={iconFlag}/>
                    )}
                    <LogoutButton onOpen={onclickLogout} />
                </Center>
                ) }

            </Flex>
        </>

    );
});