import React from 'react';
import {
  View,
Text,
StyleSheet,Image
} from 'react-native';

const Header=()=>{
    
    return(
        <View style={styles.viewTop}>
            <Image
            style={{borderColor:'black',alignSelf:'center'}} 
            source={require('../assets/icos.png')}/>           
        </View>
    )


}

const styles = StyleSheet.create({
    viewTop:{
        backgroundColor:'#FF9458',
        display:'flex',
        justifyContent:'center',
        borderBottomLeftRadius:40,
        borderBottomRightRadius:40,
        borderColor:'black',
        borderWidth:1,
        
    },
    textSt:{
        alignSelf:'center',
        fontFamily:'robato',
        fontSize:20
    }
    });

export default Header;