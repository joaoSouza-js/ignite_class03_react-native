import { MaterialIcons } from '@expo/vector-icons';
import { SafeAreaView } from "react-native-safe-area-context";
import { HStack, IconButton, VStack, useTheme } from "native-base";
import { IHStackProps } from "native-base/lib/typescript/components/primitives/Stack/HStack";

import { Text } from "../../../components/Text";
import { Avatar } from "../../../components/Avatar";

interface HomeHeaderProps extends IHStackProps {
    avatarUrl: string,
    greeting: string,
    userName: string,
}

export function HomeHeader({avatarUrl,greeting, userName,...props}: HomeHeaderProps) {
    const {colors, sizes} = useTheme()
    return (
    
        <SafeAreaView 
            style={{
                backgroundColor:colors.gray[600],
                paddingBottom: sizes[8],
                paddingTop: sizes[5]
            }}
            
        >
            <HStack
                alignItems={'center'}
                paddingX={'8'}
                {...props}
            >
                <Avatar source={{uri: avatarUrl}}/>
                <VStack 
                    flexGrow={1}
                    paddingX={'4'}
                >
                    <Text>{greeting}</Text>
                    <Text fontFamily={'heading'}>{userName}</Text>
                </VStack>
                <IconButton
                    variant={'unstyled'}
                    _icon={{
                        width:8,
                        h:6,
                        as: MaterialIcons,
                        name:'logout',
                        size:'lg',
                        color:"gray.200",

                    }}
                />
                  
            </HStack>
        </SafeAreaView>

       
    )
}