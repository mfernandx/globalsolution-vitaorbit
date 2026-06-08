import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { InicioScreen } from "./src/screen/InicioScreen";
import { CadastroScreen } from "./src/screen/CadastroScreen";
import { LoginScreen } from "./src/screen/LoginScreen";
import Navegador from "./src/components/Navegador";
import { MonitoramentoSinaisScreen } from "./src/screen/MonitoramentoSinaisScreen";
import { MonitoramentoSintomasScreen } from "./src/screen/MonitoramentoSintomasScreen";
import { EmergenciaScreen } from "./src/screen/EmergenciaScreen";
import { AuthProvider } from "./src/context/AuthContext";

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <AuthProvider>

            <NavigationContainer>

                <Stack.Navigator screenOptions={{ headerShown: false }}>
                    
                    <Stack.Screen name="Inicio" component={InicioScreen} />

                    <Stack.Screen name="Login" component={LoginScreen} />

                    <Stack.Screen name="Cadastro" component={CadastroScreen} />

                    <Stack.Screen name="Home" component={Navegador} />

                    <Stack.Screen name="MonitoramentoSinais" component={MonitoramentoSinaisScreen}/>

                    <Stack.Screen name="MonitoramentoSintomas" component={MonitoramentoSintomasScreen}/>

                    <Stack.Screen name="Emergencia" component={EmergenciaScreen} />

                </Stack.Navigator>

            </NavigationContainer>

        </AuthProvider>
  );
}

// instalou o npm install @react-navigation/native
// instalou o npx expo install react-native-screens react-native-safe-area-context
// instalou o npm install @react-navigation/native-stack
// instalou o npm install @react-navigation/bottom-tabs
// instalou o npm install axios
// instalou o npx expo install @expo/vector-icons
