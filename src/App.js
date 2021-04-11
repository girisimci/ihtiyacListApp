/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React,{useState,useEffect} from 'react';
import {SafeAreaView,FlatList,StyleSheet,View,Text,TextInput,Image} from 'react-native';
import Header from './components/Header';

const App = () => {
 
  const [filterData,setFilterData]=useState([]);
  const [masterData,setMasterData]=useState([]);
  const [search,setSearch]=useState('');

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
          <Header/>
          <View style={styles.container}>

         
            <TextInput style={styles.textInputStyle}/>

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
      display:'flex',
     
  },
  itemStyle:{
      padding:15
  },
  textInputStyle:{
    backgroundColor:'#F6F6F6',
    borderRadius:30,
    height:50,
    borderWidth:1,
    paddingLeft:20,
    margin:5,
    borderColor:'#009688',

    
  }
})

export default App;
