import React from "react";
import {View,SafeAreaView,StyleSheet} from "react-native";

const Detay = () =>{
    

    return(
        <SafeAreaView>
            <View style={styles.container}>Detay sayfamıza hoşgeldiniz</View>
        </SafeAreaView>
    )
}

const styles=StyleSheet.create({

    container:{
        color:"red",

    },

})

export default Detay;