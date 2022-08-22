import { VFC, memo} from "react"


import { 
    Flex ,
    Center,
    Stack , 
} from "@chakra-ui/react";

import { LoginUser, useLoginUser } from "../../../hooks/Providers/useLoginUserProvider";

export const MyBlog: VFC = memo(() => {
    
    const loginUser: LoginUser = useLoginUser().loginUser
    console.log(loginUser);//email get ok
    
    
    return (
        <Stack>
            <Center>Hello!{loginUser.email}</Center>            
            <Center>create</Center>         
            <Center>update</Center>
            <Center>delete</Center>
        </Stack>
    );
});


export {};