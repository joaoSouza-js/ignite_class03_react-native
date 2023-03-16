import { useState } from "react";
import * as FileSystem from 'expo-file-system';
import {  TouchableOpacity } from "react-native";
import * as ImagePicker from 'expo-image-picker';
import { AppRoutesParamList } from "@routes/appRoutes";
import { Box, ScrollView, Skeleton, Toast, useToast, VStack } from "native-base";
import {BottomTabScreenProps} from '@react-navigation/bottom-tabs'


import { Text } from "@components/Text";
import { Button } from "@components/Button";
import { Header } from "@components/Header";
import { Avatar } from "@components/Avatar";
import { TextInput } from "@components/TextInput";
import { PasswordTextInput } from "@components/PasswordTextInput";


export function Profile(route: BottomTabScreenProps<AppRoutesParamList,'Profile'>){
    const [photoIsLoading, setPhotoIsLoading] = useState(true)
    const [userAvatar, setUserAvatar] = useState<string| undefined>();
    const toast = useToast()
    
    async function handlePickImage(){
        setPhotoIsLoading(true)

        try {
            const imageResponse = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true,
                quality:1,
                aspect: [4,4],
                selectionLimit: 1
            })
     
    
            if (imageResponse.canceled || !imageResponse.assets[0].uri ) return;

            const imageSelected = imageResponse.assets[0].uri
            const photoInfo = await FileSystem.getInfoAsync(imageSelected)

            if(photoInfo.exists && (photoInfo.size  / 1024 /1024 ) >    5) {
                return toast.show({
                    title: 'Está foto é muito grande, Escolha uma de até 5Mb',
                    backgroundColor: 'red.400',
                    placement: 'top',
                    
                    
                })
                
            }
            setUserAvatar(photoInfo.uri)

            
        } catch (error) {
            console.log(error)
        }
        finally {
            setPhotoIsLoading(false)
        }
    }
    
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
                            source={{ uri: userAvatar}}
                        />

                    )}
                    <TouchableOpacity
                        onPress={handlePickImage}
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