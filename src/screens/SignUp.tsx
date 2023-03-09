import { useState } from 'react'
import { Entypo } from '@expo/vector-icons'
import { SafeAreaView } from 'react-native-safe-area-context'
import { VStack, Image, Center, Icon, ScrollView } from 'native-base'

import { Text } from '@components/Text'
import { Button } from '@components/Button'
import { Heading } from '@components/Heading'
import { TextInput } from '@components/TextInput'

import LogoSvg from '@assets/logo.svg'
import backgroundImage from '@assets/background.png'

export function SignUp(){
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
                    flex={1}
                    marginTop={4}
                    paddingX={10}
                    marginBottom={4}
                >
                    <Heading>Crie sua conta</Heading>
                    <TextInput
                        marginTop={8}
                        placeholder='Nome'
                    />
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
                                as={<Entypo name={passWordIsHiding ? 'eye-with-line' : 'eye'} />}
                            />
                        }
                    />
                    <Button variant={'solid'} marginTop={4} >Criar e acessar</Button>
                </Center>

                <Center
                    padding={10}
                    marginTop={'auto'}
                >
                    <Button 
                        marginTop={4} 
                        variant='outline'
                    >
                        Voltar para o login
                    </Button>
                </Center>
            
            </VStack>

        </ScrollView>
    )
} 