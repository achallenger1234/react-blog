import { VFC, memo, useState, ChangeEvent} from "react"


import { 
    Box ,
    Center,
    Stack , 
    Input,
    Divider,
    Button
} from "@chakra-ui/react";

import { Search2Icon, CloseIcon } from '@chakra-ui/icons'

import { SerchtBlog, useSerchBlog } from "../../../hooks/Providers/useSerchBlogProvider"


// import { useSerchAllBlogs } from "../../../hooks/Blog/useSerchAllBlogs";

// import { useSerchMyBlogs } from "../../../hooks/Blog/useSerchMyBlogs";




// type Props = {
//     allsearchFlag: boolean;
// }



// export const SerchBlog: VFC<Props> = memo((props) => {
    
    // const { serchAllBlogs, getSerchAllBlogs } = useSerchAllBlogs();
    
    // const { serchMyBlogs, getSerchMyBlogs  }  = useSerchMyBlogs();
    
    // const allsearchFlag = props;
    // const onClickSerch = () => {
    //     //serch logic
    //     // allsearchFlag ? {
    //     //     //useAllSerch
    //     // } : {
    //     //     //useMySerch
    //     // }
        
    // }
    

export const SerchBlog: VFC = memo(() => {


    const selectBlogObj: SerchtBlog = useSerchBlog().serchText
    console.log(selectBlogObj);
    
    const { setSerchBlog } = useSerchBlog();
    
    const [serchText, setSerchText] = useState('');
    

    

        
    
    const onChangeSerchText = (e: ChangeEvent<HTMLInputElement>) => {
        setSerchText(e.target.value)
        console.log(e.target.value)
    }
    
    const onClickSerch = () => {

        const serchBlog: SerchtBlog = {
            serchText,
        }
        setSerchBlog(serchBlog)
        
        console.log("setok")
        
    }

    const onClickClose = () => {
        setSerchBlog(null);
        setSerchText('');
    }
    
    return (
        <>
            
            <Button  
                leftIcon={<Search2Icon />}
                disabled={serchText === ""}
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
                value={serchText}
                onChange={onChangeSerchText}
            />
            
                <CloseIcon 
                    cursor="pointer"
                    position='absolute'
                    top="8vh"
                    right="9vw"
                    onClick={onClickClose}
                />
        </>
    );
});


export {};