/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React,{useState,useEffect} from 'react';
import {SafeAreaView,FlatList,StyleSheet,View,Text,TextInput,Image,TouchableOpacity} from 'react-native';
import Header from './components/Header';
import datalar from './Datalar';

const App = () => {
    
  const [data,setData]=useState(datalar);
  const [filteredData,setFilteredData]=useState(data);
  const [search,setSearch]=useState('');

  const searchFilter = (text) => {
      if(text){

         let _data = filteredData.filter((x)=> x.title.toLowerCase().includes(text.toLowerCase()));
         _data.map(i => console.log(i.title));
         console.log(_data);
          setSearch(text);
          setFilteredData(_data)

      } else {
            setFilteredData(datalar);
          setSearch(text);
      }
  }


  const ItemView=({item})=>{
      return(
          <TouchableOpacity onPress={()=>{console.log(item.body);}}>

<Text style={styles.itemStyle}>
              {item.id}{'. '}{item.title.toUpperCase()}
          </Text>
          </TouchableOpacity>
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

         
            <TextInput 
            style={styles.textInputStyle}
            value={search}
            placeholder={"Arama Yap.."}
            underlineColorAndroid="transparent"
            onChangeText={(text)=>searchFilter(text)}
            
            />
          <FlatList
          data={filteredData}//filterData apiden gelen değer
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
