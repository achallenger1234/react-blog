import { memo, VFC } from "react";

import { 
    Flex,
    Heading,
    Center
    
    
} from "@chakra-ui/react";

export const Header: VFC = memo(() => {
    return (        <>
            <Flex 
                bg='green.100' 
                color='green.900'
                h={20}
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
                <Center>
                    <Heading
                        m={6}
                    >
                        ヘッダー
                    </Heading>
                </Center>
            </Flex>
        </>

    );
});