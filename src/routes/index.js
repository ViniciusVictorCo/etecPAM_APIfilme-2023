import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Stack from './stack'
import About from '../screens/About'
import Singup from '../screens/Singup'

export default function Routes(){
    const Drawer = createDrawerNavigator();
    return(

        <Drawer.Navigator>

            <Drawer.Screen name ='home' component = {Stack}/>
            <Drawer.Screen name ='sobre' component = {About} />
            <Drawer.Screen name ='registre-se' component = {Singup} />


        </Drawer.Navigator>

    )
}