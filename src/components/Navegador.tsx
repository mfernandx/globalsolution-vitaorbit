import React from "react";
import {createBottomTabNavigator,} from "@react-navigation/bottom-tabs";
import {Ionicons,} from "@expo/vector-icons";
import { HomeScreen } from "../screen/HomeScreen";
import { RegistrosScreen } from "../screen/RegistrosScreen";
import { AlertasScreen } from "../screen/AlertasScreen";
import { PerfilUsuarioScreen } from "../screen/PerfilUsuarioScreen";


const Tab = createBottomTabNavigator();

export default function Navegador() {

    return (

        <Tab.Navigator

            screenOptions={({ route }) => ({

            headerShown: false,
            tabBarActiveTintColor:"#6366F1",
            tabBarInactiveTintColor:"#A0A7B8",

            tabBarStyle: {
              height: 65,
              paddingBottom: 8,
              paddingTop: 6,
              shadowColor: '#000',
              shadowOpacity: 0.08,
              shadowRadius: 10,
              elevation: 8,
            },

            tabBarIcon: ({color,size,}) => {

                let iconName: keyof typeof Ionicons.glyphMap = "home";

                if (route.name === "Home") {
                  iconName = "home";
                }

                else if (route.name === "Registros") {
                  iconName = "clipboard";
                }

                else if (route.name === "Alertas") {
                  iconName = "notifications";
                }

                else if (route.name === "Perfil") {
                  iconName = "person";
                }

                return (
                  <Ionicons name={iconName} size={size} color={color}/>
                );
            },
            })}
        >

            <Tab.Screen name="Home" component={HomeScreen}/>

            <Tab.Screen name="Registros" component={RegistrosScreen}/>

            <Tab.Screen name="Alertas" component={AlertasScreen}/>

            <Tab.Screen name="Perfil" component={PerfilUsuarioScreen}/>

        </Tab.Navigator>


    );
}


