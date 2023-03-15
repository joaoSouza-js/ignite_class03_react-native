import {NavigationContainer,DefaultTheme} from '@react-navigation/native'
import { Box, useTheme } from 'native-base'
import { AppRoutes } from './appRoutes'
import { AuthRoutes } from './auth'

export function Router(){
    const {colors} = useTheme()
    const NavigationTheme =  DefaultTheme
    NavigationTheme.colors.background = colors.gray[700]

    return (
        <Box flex={1} backgroundColor='gray.700'>
            <NavigationContainer theme={NavigationTheme}>
                <AppRoutes/>
            </NavigationContainer>

        </Box>

    )
}