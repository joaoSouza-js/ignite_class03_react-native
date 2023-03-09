import {Button as NativeBaseButton, IButtonProps} from 'native-base'
import { ReactNode } from 'react'
import { Text } from './Text'

interface ButtonProps extends IButtonProps{
    children?: ReactNode,
    variant?: 'solid' | 'outline'
}

export function Button({children, variant='solid', ...rest }: ButtonProps){
    return (
        <NativeBaseButton
        height='14'
        width='full'
        rounded='md'
        alignItems={'center'}
        
        backgroundColor={variant === 'outline' ?  'transparent': 'green.700' }
        borderWidth='1'
        borderColor={variant === 'outline' ?  'green.500': 'green.700' }
        _pressed={{
            backgroundColor: variant === 'outline' ? 'gray.900' :'green.500',
            borderColor:  variant === 'outline' ? 'green.700' : 'green.700'
          
        }}
       

        {...rest}
        >
            <Text
                color={variant === 'outline' ? 'green.500' : 'white'}
                fontFamily='heading'
                fontSize='md'
            >
                {children}

            </Text>

        </NativeBaseButton>
    )
}