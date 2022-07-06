import React, { FC } from "react";
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, Image } from "react-native";
import { useFonts, Cinzel_400Regular, Cinzel_600SemiBold } from '@expo-google-fonts/cinzel';


const width = Dimensions.get("screen").width
const height = Dimensions.get("screen").height

export const AcessPage: FC = () =>{

    const [fontsLoaded] = useFonts({
        Cinzel_400Regular,
        Cinzel_600SemiBold
    })

    if(!fontsLoaded){
        return <View/>
    }

    return (
        <>
            <View style={style.fundo}>
                <Image source={require("../../assets/logo.png")} style={style.logo}/>
                    <Text style={style.texto}> Acesse com a sua digital </Text>
                    <TouchableOpacity style={style.botao}>
                        <Text style={style.textoBotao}> Acessar </Text>
                    </TouchableOpacity>
            </View>
        </>
    )
}

const style = StyleSheet.create({
    fundo: {
        width: width,
        height: height,
        backgroundColor: "#285564",
        alignItems: "center"
    },
    botao:{
        borderStyle:"solid",
        borderWidth: 4,
        borderColor: "#19065a",
        borderRadius: 35,
        paddingVertical: 20,
        width: "75%",
        top: height - 200,
        alignContent: "center",
        alignItems: "center"
    },
    texto:{
        top: height - 220,
        fontFamily: "Cinzel_400Regular",
        fontSize: 14 
    },
    textoBotao:{
        fontFamily: "Cinzel_600SemiBold",
        fontSize: 15
    },
    logo:{
        top: height-700,
        width: "100%",
        height: "50%",
        position: "absolute"
    }
})