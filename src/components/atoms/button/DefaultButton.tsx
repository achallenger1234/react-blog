import React,  { ReactNode, VFC }  from 'react';

import { Button } from '@chakra-ui/react';

type Props = {
    children: ReactNode;
    disabled: boolean;
    loading: boolean
    onClick: () => void;
}

export const DefaultButton: VFC<Props> = (props) => { 
    
    const { 
        children,
        onClick,
        loading,
        disabled
    } = props;
    
    return(
        <Button
            colorScheme='teal'
            size='md'
            _hover={{ opacity: 0.8 }}
            onClick={onClick}
            isLoading={loading}
            disabled={disabled}
        >
            {children}
        </Button>
        );
}
