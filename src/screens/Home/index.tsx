import { useState } from "react";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import {  FlatList, HStack, VStack } from "native-base";

import { Text } from "@components/Text";
import { Card } from "./components/Card";
import { Heading } from "@components/Heading";
import { MuscleGroup } from "./components/MuscleGroup";

import { AppRoutesParamList } from "@routes/appRoutes";
import { HomeHeader } from "@screens/Home/components/HomeHeader";

type musclesProps = 'constas'| 'bicipes'| 'ombro'| 'pernas'

export function Home(route: BottomTabScreenProps<AppRoutesParamList, 'Home'>){
    const musclesGroups = ['constas','bicipes','ombro', 'pernas'] as const

    const [muscleGroupsSelected, setMusclesGroupsSelected] = useState<musclesProps>('constas')

    function handleSelectMuscle(muscleGroup: musclesProps){
        setMusclesGroupsSelected(muscleGroup)
    }
    function handleNavigateToExerciseScreen(){
        route.navigation.navigate('Exercise',{id: 'hi hi'})
    }
    
  
    return (
        <VStack flex={1}>
            <HomeHeader
                avatarUrl='https://github.com/joao472762.png'
                greeting={'Olá'}
                userName={'João Souza'}
            />
            <VStack 
                paddingX={'8'} 
                marginTop={10}
                >
                <FlatList
                    maxHeight={12}
                    minHeight={10}
                    data={musclesGroups}
                    keyExtractor={item => item}
                    horizontal
                    showsVerticalScrollIndicator={false}
                    renderItem={({item:musclesGroup}) => (
                        <MuscleGroup 
                            isSelected={muscleGroupsSelected.toLocaleLowerCase() === musclesGroup.toLocaleLowerCase()}
                            onPress={() => handleSelectMuscle(musclesGroup)}
                            key={musclesGroup}
                        >
                            {musclesGroup}
                        </MuscleGroup>

                    )}
                    
                />
                   
               
                <HStack
                    paddingX={2}
                    marginTop={10}
                    alignItems='center'
                    justifyContent='space-between'

                >
                    <Heading
                        color={'gray.200'}
                        fontSize='md'
                    >
                        Exercícios
                    </Heading>
                    <Text
                        color={'gray.200'}
                        fontSize={'sm'}
                    >
                        {musclesGroups.length}
                    </Text>

                </HStack>
                <FlatList marginTop={5}
                    data={musclesGroups}
                    keyExtractor={item => item}
                    _contentContainerStyle={{
                        paddingBottom: '20'
                    }}
                    showsVerticalScrollIndicator={false}
                    renderItem={({item})=> (
                        <Card
                           onPress={handleNavigateToExerciseScreen} 
                            title="Puxada frontal"
                            description="3 séries x 12 repetições"  
                            exerciseUrl="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"              
                        />
                    )}

                />

            </VStack>
            
        </VStack>
    )
}