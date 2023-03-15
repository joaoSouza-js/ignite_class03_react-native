import { useState } from "react";
import { TouchableOpacity } from "react-native";
import { AppRoutesParamList } from "@routes/appRoutes";
import { Box, ScrollView, Skeleton, VStack } from "native-base";
import {BottomTabScreenProps} from '@react-navigation/bottom-tabs'


import { Text } from "@components/Text";
import { Button } from "@components/Button";
import { Header } from "@components/Header";
import { Avatar } from "@components/Avatar";
import { TextInput } from "@components/TextInput";
import { PasswordTextInput } from "@components/PasswordTextInput";


export function Profile(route: BottomTabScreenProps<AppRoutesParamList,'Profile'>){
    const [photoIsLoading, setPhotoIsLoading] = useState(true)
    
    const PhotoSize = 33
    return (
        <ScrollView
            contentContainerStyle={{ flexGrow: 1 }}
            showsVerticalScrollIndicator={false}
        >
            <VStack 
                flex={1}
                backgroundColor='gray.900'
            >
                <Header title="Perfil"/>

                <VStack
                    padding={8}
                    flex={1}
                    alignItems='center' 
                >  
                    {photoIsLoading ? (
                        <Skeleton
                            
                            height={PhotoSize}
                            rounded='full'
                            endColor={'gray.400'}
                            startColor={'gray.500'}
                            width={PhotoSize}
                        />

                    ): (
                        <Avatar
                            size={PhotoSize}
                            source={{ uri: 'httpsdd://github.com/joao472762.png'}}
                        />

                    )}
                    <TouchableOpacity
                        hitSlop={{
                            right: 40,
                            left: 40,
                            top: 10,
                            bottom: 10
                        }}
                        style={{
                            marginTop:12
                        }}
                    >
                        <Text
                            fontFamily={'heading'}
                            color={"green.500"}
                        >
                            Alterar  foto
                        </Text>

                    </TouchableOpacity>
                    

                    <VStack marginTop={10} flex={1} width={'full'}>
                        <Box>
                            <TextInput
                                backgroundColor={'gray.600'}
                                placeholder="Nome"
                                />
                            <TextInput
                                
                                keyboardType="email-address"
                                isDisabled={true}
                                value='fulano@gmail.com'
                                marginTop={4}
                                backgroundColor={'gray.600'}
                                placeholder="email"
                            />

                        </Box>

                        <Box marginTop={12}>
                            <Text color={"gray.200"}>Alterar senha</Text>

                            <PasswordTextInput
                                
                                marginTop={4}
                                placeholder={'Senha antiga'}
                                backgroundColor={'gray.600'}
                             
                            />

                            <PasswordTextInput
                                marginTop={4}
                                placeholder={'Nova Senha'}
                                backgroundColor={'gray.600'}
                                marginBottom={4}
                            />
                            


                        </Box>

                        <Button marginTop={'auto'} >Atualizar</Button>
                    </VStack>
                    
                </VStack>
            </VStack>

        </ScrollView>
    )
}