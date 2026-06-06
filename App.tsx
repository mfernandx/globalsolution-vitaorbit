import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator,} from "@react-navigation/native-stack";
import { InicioScreen } from "./src/screen/InicioScreen";
import { CadastroScreen } from "./src/screen/CadastroScreen";
import { LoginScreen } from "./src/screen/LoginScreen";
import { HomeScreen } from "./src/screen/HomeScreen";
import { AlertasScreen } from "./src/screen/AlertasScreen";
import { PerfilUsuarioScreen } from "./src/screen/PerfilUsuarioScreen";

const Stack = createNativeStackNavigator();

export default function App() {

    return (

      <NavigationContainer>
    
        <Stack.Navigator screenOptions={{headerShown: false,}}>

          <Stack.Screen name="Inicio" component={InicioScreen}/>
      
          <Stack.Screen name="Login" component={LoginScreen}/>
      
          <Stack.Screen name="Cadastro" component={CadastroScreen}/>

          <Stack.Screen name="Home" component={HomeScreen}/>

          <Stack.Screen name="Alertas" component={AlertasScreen}/>

          <Stack.Screen name="Perfil" component={PerfilUsuarioScreen}/>

        </Stack.Navigator>
    
      </NavigationContainer>
    
  );
}


// instalou o npm install @react-navigation/native
// instalou o npx expo install react-native-screens react-native-safe-area-context
// instalou o npm install @react-navigation/native-stack
// instalou o npm install @react-navigation/bottom-tabs
// instalou o npm install axios
// instalou o npx expo install @expo/vector-icons