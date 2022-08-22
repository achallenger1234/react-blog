import { memo, VFC } from "react";

import { 
    Heading,
    Center
    
    
} from "@chakra-ui/react";

export const Footer: VFC = memo(() => {
    return ( 
        <Center 
            bg='green.100' 
            color='white.500'
            mb={0}
            position='fixed'
            bottom={0}
            h="5%"
            w="100%"
        >
            <Heading
                m={6}
                size='xs'
                
            >
                &copy; 2022 ABAC.com
            </Heading>
        </Center>
    );
});