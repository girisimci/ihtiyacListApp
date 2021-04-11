import React from 'react';
import {
  View,
Text,
StyleSheet,
} from 'react-native';

const Header=()=>{
    
    return(
        <View style={styles.viewTop}>
            <Text>Mehmet Sait Işık</Text>
        </View>
    )


}

const styles = StyleSheet.create({
    viewTop:{
        backgroundColor:'red'
    }
    });

export default Header;