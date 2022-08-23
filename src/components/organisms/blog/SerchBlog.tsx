import { VFC, memo} from "react"


import { 
    Box ,
    Center,
    Stack , 
    Input
} from "@chakra-ui/react";


export const SerchBlog: VFC = memo(() => {
    
    return (
        <Input
            placeholder='Search' 
            size='lg'
            mt="4vh"
            w="50vw"
            variant='flushed'
            borderColor='Gray.700'
        />
    );
});


export {};