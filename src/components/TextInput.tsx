import { Input, IInputProps, VStack, useTheme } from "native-base";
import { background } from "native-base/lib/typescript/theme/styled-system";
import { Text } from "./Text";

interface TextInputProps extends IInputProps {
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
                {...rest}
            />
            {error && (
                <Text>{error}</Text>

            )}

        </VStack>

        
    )
}