import { useState } from 'react'
import {Entypo} from '@expo/vector-icons'
import { SafeAreaView } from 'react-native-safe-area-context'
import {VStack, Image, Center, Icon, ScrollView} from 'native-base'

import { Text } from '@components/Text'
import { Button } from '@components/Button'
import { Heading } from '@components/Heading'
import { TextInput } from '@components/TextInput'

import  LogoSvg from '@assets/logo.svg'
import backgroundImage from '@assets/background.png'

export function SignIn(){
    const [passWordIsHiding, setPassWordIsHiding] = useState(true)
    
    function handleChangePasswordVisibility(){
        passWordIsHiding 
            ? setPassWordIsHiding(false) 
            : setPassWordIsHiding(true)
    }

    return (
        <ScrollView  
            contentContainerStyle={{flexGrow:1}}
            showsVerticalScrollIndicator={false}
        >
            <VStack flex={1}>
                <Image
                    alt='pessoar treinando'
                    source={backgroundImage}
                    position='absolute'
                    resizeMode='cover'
                />
                <SafeAreaView>
                    <Center marginTop={16}>
                    <LogoSvg/>
                        <Text
                            fontSize={'sm'}
                        >Treine sua mente e o seu corpo</Text>
                    </Center>
                </SafeAreaView>

                <Center
                    marginTop={4}
                    flex={1}
                    paddingX={10}
                 
                    marginBottom={4}
                >
                    <Heading>Acesse sua conta</Heading>
                    <TextInput 
                        marginTop={8}
                        keyboardType='email-address'
                        placeholder='E-mail'
                        autoCapitalize='none'
                    />
                    <TextInput
                        marginTop={4}
                        secureTextEntry={passWordIsHiding}
                        placeholder='Senha'
                        InputRightElement={
                            <Icon
                                size={'md'}
                                marginRight={'4'}
                                color={passWordIsHiding ? 'gray.100' : 'white'} 
                                onPress={() => handleChangePasswordVisibility()}
                                as={<Entypo name={passWordIsHiding ? 'eye-with-line' : 'eye'}/>}
                            />
                        }
                    />
                    <Button variant={'solid'} marginTop={4} >Acessar</Button>
                </Center>

                <Center
             
                    padding={10}
                    marginTop={'auto'}
                >
                    <Text marginBottom={2} marginTop={4}>Ainda não tem acesso?</Text>
                    <Button variant='outline'>Criar conta</Button>
                </Center>
            
            </VStack>

        </ScrollView>
    )
} 