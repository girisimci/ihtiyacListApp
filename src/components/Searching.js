/*import React,{useState,useEffect} from 'react';
import {SafeAreaView,FlatList,StyleSheet,View,Text} from 'react-native';

const Searching = () =>{

    const [filterData,setFilterData]=useState([]);
    const [masterData,setMasterData]=useState([]);

    useEffect(()=>{
        fetchPosts();
        return()=>{

        }
    },[])

    const fetchPosts = () => {
        const apiURL='https://jsonplaceholder.typicode.com/posts';
        fetch(apiURL)
        .then((response)=>response.json())
        .then((responseJson)=>{
            setFilterData(responseJson);
            setMasterData(responseJson);
        }).catch((error)=>{
            console.error(error);
        })
    }


    const ItemView=({item})=>{
        return(
            <Text style={styles.itemStyle}>
                {item.id}{'. '}{item.title.toUpperCase()}
            </Text>
        )
    }



    const ItemSeparatorView=()=>{
        return(

            <View
            style={{height:0.5,width:'100%',backgroundColor:'#c8c8c'}}
            />

        )
    }

    return(
        <SafeAreaView style={{flex:1}}>
            <View style={styles.container}>
            <FlatList
            data={filterData}
            keyExtractor={(item,index)=>index.toString()}
            ItemSeparatorComponent={ItemSeparatorView}
            renderItem={ItemView}
            />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'white',
    },
    itemStyle:{
        padding:15
    }
})

export default Searching;*/