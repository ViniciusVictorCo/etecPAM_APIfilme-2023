import React from "react";
import {View, Text, Image, TouchableOpacity} from 'react-native';
import { Entypo } from '@expo/vector-icons';
import style from "./style";

export default function Header(){
    return(
        <View style = {style.viewHeader}>
            <TouchableOpacity>
                {/* <Entypo name="menu" size={24} color="white" /> */}
            </TouchableOpacity>    
                {/* <IM style = {style.textHeader}>Filmaço.com</IM> */}

        </View>
    )
}