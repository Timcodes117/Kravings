import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useNavigation } from '@react-navigation/native';
import {foodItems} from './database'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faA, faAdd, faMinusCircle, faPlusCircle, faPlusMinus, faSubtract, faTrashCan } from '@fortawesome/free-solid-svg-icons';
const Cart = ({navigation})=> {
  const [isItems, setIsItems]= useState(false)
  const [products, setproducts] = useState()
  const [total, setTotal] = useState({})
  const navigator = useNavigation();



  useEffect(()=>{
        getDataFromDb();
}, [])


const getDataFromDb = async () =>{
  let items = await AsyncStorage.getItem('cartItem')
  items = JSON.parse(items);

  let productData = []
  if(items){
    foodItems.forEach(data => {
      if(items.includes(data.id)){
        productData.push(data);
        return;
      }
    });
    setproducts(productData)
    getTotal(productData)
  }else{
    setproducts(false)
    getTotal(false)
  }
}; 

const getTotal = (productData) => {
  let total = 0;
  for (let index = 0; index < productData.length; index++) {
    let ProductPrice = productData[index].ProductPrice;
    total = total + ProductPrice;
  }
  setTotal(total);
}

// remove data from async storage
const removeDataFromCart = async id =>{
  let itemArray = await AsyncStorage.getItem('cartItem');
  itemArray = JSON.parse(itemArray);
  if(itemArray){
    let array = itemArray
    for (let index = 0; index < array.length; index++) {
      if(array[index] == id){
        array.splice(index, 1);
      }

      await AsyncStorage.setItem('cartItem', JSON.stringify(array));
      getDataFromDb();
      
    }
  }
};

const renderProducts = (data, index)=>
{
  return(
    // <Text key={index}> {data.foodName}</Text> 
    <View key={data.key}  style={{
      flexDirection: 'row',
      alignItems: 'center',
      // justifyContent: 'center',
      marginTop: 20
    }}>

      <View key={data.key}  style={{
        flex: 40
      }}>
      
      <TouchableOpacity key={data.key} onPress={()=> navigator.navigate('productInfo', {productId: data.id})} style={{
        width: 120,
        height: 100,
        backgroundColor: 'gainsboro',
        borderBottomLeftRadius: 20,
        borderTopLeftRadius: 20,
         marginLeft: 20,
         alignItems: 'center',
         justifyContent: 'center'
      }}>
      <Image source={data.foodImage}  style={{
        width: 120,
        height: 100,
        backgroundColor: 'gainsboro',
        borderBottomLeftRadius: 20,
        borderTopLeftRadius: 20,
      }}></Image>

      </TouchableOpacity>
</View>
      <View key={data.key} style={{
        flexDirection: 'column',
        flex: 60
      }}>
      <Text style={{fontSize: 20, fontWeight: 'bold'}} numberOfLines={1}> {data.foodName}</Text> 
      <Text style={{fontSize: 12, color: 'grey'}}> {data.foodPrice}</Text> 
      <View style={{flexDirection: 'row', marginTop: 20}}>
      <View style={{
        width: '50%',
        height: 20, 
        alignItems: 'center',
        justifyContent: 'space-evenly',
        flexDirection:'row'
      }}>
        <TouchableOpacity style={{backgroundColor: null, borderColor: 'gray', borderWidth: 1, height: 20, width: 20,borderRadius: 100,
      alignItems: 'center', justifyContent: 'center'}}><FontAwesomeIcon icon={faAdd} size={10} style={{color: 'grey'}}></FontAwesomeIcon></TouchableOpacity>
        <Text>1</Text>
        <TouchableOpacity style={{backgroundColor: null, borderColor: 'gray', borderWidth: 1, height: 20, width: 20,borderRadius: 100,
      alignItems: 'center', justifyContent: 'center'}}><FontAwesomeIcon icon={faSubtract} size={10} style={{color: 'grey'}}></FontAwesomeIcon></TouchableOpacity>
      </View>
        <TouchableOpacity key={data.key}
        onPress={() => removeDataFromCart(data.id)}
         style={{position: 'absolute', right: 20}}><FontAwesomeIcon icon={faTrashCan} size={20} style={{color: 'red'}}></FontAwesomeIcon></TouchableOpacity>
        </View>
      </View>
    </View>

  )
}

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView style={styles.sv}>
        <View style={{alignItems: 'center'}}><Text style={{fontSize: 15, fontWeight: 'bold'}}>Order Details</Text></View>
          <View>
            {
              products ?
                products.map(renderProducts)
              : <Text> 'no items here'</Text>
            }          
            </View>
      <View style={{marginBottom: 300}}></View>

      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  
  safe: {
    width: '100%',
    flex: 1,
    alignItems: 'center',
  },
  
  sv: {
    width: '100%',
  }
})

export default Cart