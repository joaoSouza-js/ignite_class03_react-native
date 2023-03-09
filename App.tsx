
import {useFonts,Roboto_400Regular, Roboto_700Bold} from '@expo-google-fonts/roboto'
import { NativeBaseProvider, VStack,StatusBar } from 'native-base';
import { Loader } from '@components/Loader';
import { SignIn } from '@screens/SignIn';
import { theme } from '@styles/theme';
import { SignUp } from '@screens/SignUp';


export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  })

  
  return ( 
    <NativeBaseProvider theme={theme}>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor='transparent'
        animated
        translucent
      />
      <VStack 
        flex={1}
        backgroundColor={'gray.700'}
      >
        {fontsLoaded ? <SignUp/> : <Loader /> }
        
      </VStack>
    </NativeBaseProvider>
  );
}


