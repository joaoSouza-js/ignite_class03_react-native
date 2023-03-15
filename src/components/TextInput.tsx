import { Input, IInputProps, VStack, useTheme } from "native-base";
import { Text } from "./Text";

export interface TextInputProps extends IInputProps {
    error?: string;
}
export function TextInput({error,...rest}: TextInputProps){
    const {colors} = useTheme()
    return (
        <VStack
            width={"full"}
        >
            <Input
                backgroundColor={"gray.700"}
                fontFamily='body'
                borderRadius={'md'}
                height={14}
                px={4}
                borderColor='gray.700'
                fontSize={'md'}
                color='white'
                placeholderTextColor={colors.gray[300]}
                _focus={{
                    borderWidth: 1,
                    borderColor: 'green.500',
                    
                }}
                _disabled={{
                    color: 'gray.200',
                    
                }}
                
                {...rest}
            />
            {error && (
                <Text>{error}</Text>

            )}

        </VStack>

        
    )
}