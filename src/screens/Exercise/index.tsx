import {  HStack,  Image,  ScrollView,  VStack } from "native-base";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";

import { Text } from "@components/Text";
import { Button } from "@components/Button";
import { ExerciseHeader } from "./components/ExerciseHeader";

import WeightSvg from '@assets/series.svg'
import RepetitionsSvg from '@assets/repetitions.svg'
import { AppRoutesParamList } from "@routes/appRoutes";

export function Exercise(route: BottomTabScreenProps<AppRoutesParamList, 'Exercise'>){
    return (
        <VStack flex={1}>
            <ExerciseHeader
                exerciseName="Puxada Frontal"
                muscle="Constas"
            />
            <ScrollView contentContainerStyle={{flexGrow:1, paddingBottom:10}}>
                <VStack
                    flexGrow={1}
                    padding={8}
                >
                    <Image
                        alt="Puxada Frontal"
                        source={{
                            uri: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                        }}
                        width={'full'}
                        height={'60%'}
                        rounded='lg'
                        resizeMode="cover"
                    />
                    <VStack
                        padding={'4'}
                        rounded={'lg'}
                        marginTop={'4'}
                        paddingTop={'5'}
                        justifyContent={'center'}
                        backgroundColor={'gray.600'}
                    >
                        <HStack
                        
                            justifyContent={'space-around'}
                        >
                            
                            <HStack
                                alignItems={'center'}
                            >
                                <WeightSvg/>
                                <Text fontSize={'lg'} color='gray.200' marginLeft={1}>3 séries</Text>
                            </HStack>
                            <HStack
                                alignItems={'center'}
                            >
                                <RepetitionsSvg/>
                                <Text fontSize={'lg'} color='gray.200' marginLeft={1}>12 repetições</Text>
                            </HStack>
                        </HStack>
                        
                        <Button marginTop={4}>Marcar como realizado</Button>
                    </VStack>
                </VStack>

            </ScrollView>
        </VStack>
    )
}