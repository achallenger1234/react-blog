import { VFC, memo} from "react"

import { 
    Wrap,
    WrapItem ,
    Center
} from "@chakra-ui/react";


export const AllBlog: VFC = memo(() => {
    return ( 
        <Wrap>
            <WrapItem>
                <Center>view all blogs</Center>
            </WrapItem>
        </Wrap>
    );
});


export {};