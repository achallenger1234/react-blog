import { VFC, memo} from "react"


import { 
    Box ,
    Center,
    Stack , 
    Input,
    Divider,
    Button
} from "@chakra-ui/react";

import { Search2Icon } from '@chakra-ui/icons'




import { useSerchAllBlogs } from "../../../hooks/Blog/useSerchAllBlogs";

import { useSerchMyBlogs } from "../../../hooks/Blog/useSerchMyBlogs";




type Props = {
    allsearchFlag: boolean;
}



export const SerchBlog: VFC<Props> = memo((props) => {
    
    const { serchAllBlogs, getSerchAllBlogs } = useSerchAllBlogs();
    
    const { serchMyBlogs, getSerchMyBlogs  }  = useSerchMyBlogs();
    
    const allsearchFlag = props;
    const onClickSerch = () => {
        //serch logic
        // allsearchFlag ? {
        //     //useAllSerch
        // } : {
        //     //useMySerch
        // }
        
    }
    
    return (
        <>
            
            <Button  
                leftIcon={<Search2Icon />}
                onClick={onClickSerch}
                colorScheme='teal'
                size='sm'
                _hover={{ opacity: 0.8 }}
                px="1vw"
                m="0"
            >
            Serch
            </Button>

            <Input
                size='lg'
                mt="4vh"
                ml="1vw"
                w="40vw"
                variant='flushed'
                borderColor='Gray.700'
            />
        </>
    );
});


export {};