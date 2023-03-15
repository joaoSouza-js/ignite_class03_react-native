import { useState } from 'react'
import {Entypo} from '@expo/vector-icons'
import { SafeAreaView } from 'react-native-safe-area-context'
import {VStack, Image, Center, Icon, ScrollView} from 'native-base'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

import { Text } from '@components/Text'
import { Button } from '@components/Button'
import { Heading } from '@components/Heading'
import { TextInput } from '@components/TextInput'

import  LogoSvg from '@assets/logo.svg'
import backgroundImage from '@assets/background.png'
import { AuthRoutesParamList } from '@routes/auth'
import { PasswordTextInput } from '@components/PasswordTextInput'

export function SignIn({ navigation}: NativeStackScreenProps<AuthRoutesParamList,'SignIn'>){
    const [passWordIsHiding, setPassWordIsHiding] = useState(true)
    const [buttonIsDisabled, seButtonIsDisabled] = useState(false)

    
    
    function handleChangePasswordVisibility(){
        passWordIsHiding 
            ? setPassWordIsHiding(false) 
            : setPassWordIsHiding(true)
    }

     function navigateToSignUpScreen() {
         navigation.navigate('SignUp')
        
    }

    return (
        <ScrollView
        
            contentContainerStyle={{flexGrow:1}}
            showsVerticalScrollIndicator={false}
        >
            <VStack 
                flex={1}
            >
                <Image
                    alt='pessoar treinando'
                    source={backgroundImage}
                    defaultSource={backgroundImage}
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
                    <PasswordTextInput
                        marginTop={4}
                        placeholder='Senha'
                        
                    />
                    <Button variant={'solid'} marginTop={4} >Acessar</Button>
                </Center>

                <Center
             
                    padding={10}
                    marginTop={'auto'}
                >
                    <Text marginBottom={2} marginTop={4}>Ainda não tem acesso?</Text>
                    <Button
                       
                        isLoading={buttonIsDisabled}
                       
                        onPress={() => navigateToSignUpScreen()} 
                        variant='outline'
                    >
                        Criar conta
                    </Button>
                </Center>
            
            </VStack>

        </ScrollView>
    )
} 