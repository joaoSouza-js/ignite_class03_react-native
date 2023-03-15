import { Entypo } from '@expo/vector-icons';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native'
import {  HStack, Icon,  Image, useTheme, VStack, } from "native-base";

import { Text } from "@components/Text";
import { Heading } from "@components/Heading";

interface CardProps extends TouchableOpacityProps {
    exerciseUrl: string,
    title: string,
    description: string
}
export function Card({ description, exerciseUrl, title, ...rest }: CardProps) {
    const { colors, sizes } = useTheme()
    return (
        <TouchableOpacity
            {...rest}
        >
            <HStack
                backgroundColor={ colors.gray[500]}
                rounded={'md'}
                marginBottom={3}
                padding={ 2}
                paddingRight={4}
                alignItems={ 'center'}
                
            >
                <Image
                    width={"16"}
                    height={"16"}
                    resizeMode='cover'
                    rounded={'md'}
                    alt={title}
                    source={{ uri: exerciseUrl }}
                />
                <VStack flex={1} justifyContent='center' paddingLeft={4}>
                    <Heading color={'white'} fontSize='lg'>{title}</Heading>
                    <Text numberOfLines={2} color={'gray.200'} fontSize='sm'>{description}</Text>
                </VStack>

                <Icon
                lineHeight={ 0}
                    as={Entypo}
                name={ 'chevron-thin-right'}
                size={ 'md'}
                color={ 'gray.300'}
                />
            

            </HStack>
        </TouchableOpacity>
    )
}