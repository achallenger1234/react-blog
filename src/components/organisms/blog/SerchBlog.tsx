import { VFC, memo} from "react"


import { 
    Box ,
    Center,
    Stack , 
    Input,
    Divider
} from "@chakra-ui/react";

import { Search2Icon } from '@chakra-ui/icons'


export const SerchBlog: VFC = memo(() => {
    
    const onClickSerch = () => {
        //serch logic
    }
    
    return (
        <>
            <Search2Icon 
                cursor="pointer"
                onClick={onClickSerch}
            />
            <Input
                placeholder='Search' 
                size='lg'
                mt="4vh"
                ml="1vw"
                w="50vw"
                variant='flushed'
                borderColor='Gray.700'
            />
        </>
    );
});


export {};