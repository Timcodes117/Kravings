import { StatusBar, StyleSheet, Text, View, TouchableOpacity, SafeAreaView, ScrollView, Image, Platform, Alert, ToastAndroid} from 'react-native'
import React, { useLayoutEffect, useEffect } from 'react'
import {Avatar} from 'react-native-elements'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faBars, faBell, faCartShopping, faCutlery, faFile, faGear, faHome, faMap, faMapMarker, faMapMarkerAlt, faMortarPestle, faNairaSign, faSearch, faSearchLocation, faShoppingBasket, faStreetView, faToolbox, faTools } from '@fortawesome/free-solid-svg-icons'
import { faCuttlefish, faSnapchat } from '@fortawesome/free-brands-svg-icons'
import Foods from './foods'
import { useNavigation } from '@react-navigation/native';
import Search from './search'
import Cart from './cart'
import Notification from './notifications'
import Settings from './settings'
import Map from './map'
import styles from './theme'
import { useState } from 'react'
import {foodItems} from './database'
import {
  AdMobBanner,
  AdMobInterstitial,
  PublisherBanner,
  AdMobRewarded,
} from 'expo-ads-admob';
import { BlurView } from 'expo-blur'
import AsyncStorage from '@react-native-async-storage/async-storage'



const Interstitial = async() =>{
  await AdMobInterstitial.setAdUnitID('ca-app-pub-9976753474067424/5961976066'); // Test ID, Replace with your-admob-unit-id
  try{
    await AdMobInterstitial.requestAdAsync({ servePersonalizedAds: true});
    await AdMobInterstitial.showAdAsync();
  }catch(e){
      console.log('err: ', JSON.stringify(e))
  }
}

const Home = ({navigation}) => {
  const navigator = useNavigation();
  const [currentPage, setCurrentPage] = useState('home')
  const [is_notify, setIsNotify] = useState(false)
  const [is_cart, setIsCart] = useState(false)
  const [products, setproducts] = useState([])
  const [accessory, setaccessory] = useState([])


  const [myAdId, setMyAdId] = useState('ca-app-pub-9976753474067424/8697682555')
  const setHomeState = () => setCurrentPage('home');
  const setCartState = () => setCurrentPage('cart');
  const setNotifyState = () => setCurrentPage('notification');
  const seMapState = () => setCurrentPage('map');
  const setSettingsState = () => setCurrentPage('settings');
  
  useEffect(()=>{
    Interstitial();
    checkCart();
    Platform.OS == 'android' ? setMyAdId('ca-app-pub-9976753474067424/8697682555') : setMyAdId('ca-app-pub-9976753474067424/5961976066')
    
    // getCartList();
    const unsubscribe = navigation.addListener('focus', ()=>{
      getDataFromDB();
    });

    return unsubscribe
},[navigation])
  
const checkOut = async () =>{
  try{
    await AsyncStorage.removeItem('cartItem')
  }catch(e){
    return e
  }

  ToastAndroid.show('cleared cart', ToastAndroid.SHORT)

}


const checkCart = async () =>{
  let cartItems = await AsyncStorage.getItem('cartItem');
  cartItems = JSON.parse(cartItems);
  
  if(cartItems){
    setIsCart(true)
    checkCart();

  }else{
    setIsCart(false)

  }
}
// const getCartList = async () =>{
//   let items = await AsyncStorage.getItem('cartItem')
//   items = JSON.parse(items);

//   let productData = []
//   if(items){
//     foodItems.forEach(data => {
//       if(items.includes(data.id)){
//         setIsCart(true)
//       }
//     });
    
//     setIsCart(true)
//   }else{
//     setIsCart(false)
//     //zario travezz 
//     }
//   setIsCart(false)
// }; 

//database fetching
const getDataFromDB = () =>{
        let productList = []
        let accessotyList = []
      
        
        for (let index = 0; index < foodItems.length; index++) {
          if(foodItems[index].category = "food"){
            productList.push(foodItems[index])
          }else if(foodItems[index].category == "accessory"){
            accessotyList.push(foodItems[index])
          }
        }

        setproducts(productList)
        setaccessory(accessotyList)

        
}

const FoodView = ({data})=>{
  return(
    <TouchableOpacity style={styles.fv} onPress={()=> navigator.navigate('productInfo', {productId: data.id})}>
          <Image source={data.foodImage} style={styles.thumbnail} />
          <View style={{alignItems: 'center', justifyContent: 'center'}}>
            <Text style={{fontWeight: '700', fontSize: 15, color: 'rgb(8,0,45)'}}>{data.foodName} </Text>
            <Text style={{fontSize: 12, color: 'gray'}}><FontAwesomeIcon icon={faNairaSign} size={10}/> {data.foodPrice} </Text>
          </View>
        </TouchableOpacity>
  )
}

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={'white'} barStyle={'dark-content'}/>
      <View style={[styles.header, currentPage == 'home' ? {height: 170}: {height: 100}]}>
        <View style={[currentPage === 'home' ? {flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', backgroundColor: null, width: '100%', maxWidth: 500, marginLeft: 30}: {flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', backgroundColor: null, width: '100%', maxWidth: 500, marginLeft: 30}]}>
          
          {
          currentPage == 'home' ?
          <>
          <FontAwesomeIcon icon={faCutlery} size={30} style={styles.gI} /><Text style={[{fontSize: 30, fontWeight: '700'}, styles.gI]}> Kravings</Text>
          </> : null
        }
        {
          currentPage == 'cart' ?
          <View style={{flex: 1, alignItems: 'center', flexDirection: 'row'}}>
          <FontAwesomeIcon icon={faCartShopping} size={30} style={styles.gI} /><Text style={[styles.headerSection, {fontSize: 25}]}> cart</Text>
          </View> : null
        }
        {
          currentPage == 'notification' ?
          <>
          <FontAwesomeIcon icon={faBell} size={30} style={styles.gI} /><Text style={styles.headerSection}> Notification</Text>
          </> : null
        }
        {
          currentPage == 'map' ?
          <>
          <FontAwesomeIcon icon={faMapMarkerAlt} size={30} style={styles.gI} /><Text style={styles.headerSection}> Map</Text>
          </> : null
        }
        {
          currentPage == 'settings' ?
          <>
          <FontAwesomeIcon icon={faGear} size={30} style={styles.gI} /><Text style={styles.headerSection}>Settings</Text>
          </> : null
        }

        {/* notification */}  

        {
          currentPage == 'home' ?
          <>
          <TouchableOpacity style={[styles.headerBellIcon, {backgroundColor: 'grey', height: 40, width: 40, marginRight: 10, borderRadius: 100}]} />
         
          </>: null
      }    
      <View>
        
      </View>
      </View>
        </View>
        <SafeAreaView style={{flex: 1, alignItems: 'center'}}>
      <ScrollView style={[styles.sv, currentPage === 'home' ? {marginTop: 120}: {marginTop: 100}]}>
        {
          currentPage == 'home' ?
          <>
          {
            currentPage == 'home' ?
            <AdMobBanner
            bannerSize="40x40"
            adUnitID="ca-app-pub-9976753474067424/5078794331" // Test ID, Replace with your-admob-unit-id
            servePersonalizedAds // true or false
            style={{alignSelf: 'center'}}
             /> : null
          }
          <View style={[styles.sv, {justifyContent: 'center',flexDirection: 'row',
        flexWrap: 'wrap',}]}>
          <View style={styles.userCard}>
            {/* <Text style={{fontSize: 30, marginLeft: 10, fontWeight: 'bold', color: 'black'}} numberOfLines={1}>Hi, Name</Text> */}
          {
            currentPage === 'home' ? 
    
            <TouchableOpacity style={styles.fakeSearch} onPress={()=> checkOut()}>
              <FontAwesomeIcon icon={faSearch} style={{marginLeft: 10}}></FontAwesomeIcon>
            <Text style={{color: 'grey', height: 20, fontSize: 10, left: 20}}>type your search</Text>
          </TouchableOpacity> : null
          }
            
          {/* <Text style={{fontSize: 30, fontWeight: '700', marginLeft: 20}}>Items</Text> */}
          </View>
          {/* <Foods />  */}
          {
            products.map(data=>{
              return(
                <FoodView data={data} key={data.id} />
                )
              })
            }
        </View>
            </>: null
        }
        {
          currentPage == 'cart' ?
          <Cart /> : null
        }
        {
          currentPage == 'notification' ?
          <Notification /> : null
        }
        {
          currentPage == 'map' ?
          <Map /> : null
        }
        {
          currentPage == 'settings' ?
          <Settings /> : null
        }
      </ScrollView>
      {
        Platform.OS == 'android'?
        <View style={styles.navmenu}>   
          <TouchableOpacity onPressOut={setHomeState} style={{width: 30, height: 30, alignItems: 'center', justifyContent: 'center'}}><FontAwesomeIcon icon={faHome} size={20} style={ currentPage == 'home' ? {color: 'rgb(8,0,45)'} : {color: 'gray'} } /></TouchableOpacity>
          <TouchableOpacity onPressOut={setCartState} style={{width: 30, height: 30, alignItems: 'center', justifyContent: 'center'}}><FontAwesomeIcon icon={faShoppingBasket} size={20} style={ currentPage == 'cart' ? {color: 'rgb(8,0,45)'} : {color: 'gray'} }/><View style={is_cart ? styles.ballon : {}}></View></TouchableOpacity>
          <TouchableOpacity onPressOut={setNotifyState} style={{width: 30, height: 30, alignItems: 'center', justifyContent: 'center'}}><FontAwesomeIcon icon={faBell} size={20} style={ currentPage == 'notification' ? {color: 'rgb(8,0,45)'} : {color: 'gray'} } /><View style={is_notify ? styles.ballon : {}}></View></TouchableOpacity>
          <TouchableOpacity onPressOut={seMapState} style={{width: 30, height: 30, alignItems: 'center', justifyContent: 'center'}}><FontAwesomeIcon icon={faStreetView} size={20} style={ currentPage == 'map' ? {color: 'rgb(8,0,45)'} : {color: 'gray'} } /><View style={is_notify ? styles.ballon : {}}></View></TouchableOpacity>
          <TouchableOpacity onPressOut={setSettingsState} style={{width: 30, height: 30, alignItems: 'center', justifyContent: 'center'}}><FontAwesomeIcon icon={faGear} size={20} style={ currentPage == 'settings' ? {color: 'rgb(8,0,45)'} : {color: 'gray'} } /></TouchableOpacity>
        </View> 
        : 
        <View style={styles.navmenu}>
          <TouchableOpacity onPressOut={setHomeState}><FontAwesomeIcon icon={faHome} size={20} style={ currentPage == 'home' ? {color: 'rgb(8,0,45)'} : {color: 'gray'} } /></TouchableOpacity>
          <TouchableOpacity onPressOut={setCartState}><FontAwesomeIcon icon={faShoppingBasket} size={20} style={ currentPage == 'cart' ? {color: 'rgb(8,0,45)'} : {color: 'gray'} }/><View style={is_cart ? styles.ballon : {}}></View></TouchableOpacity>
          <TouchableOpacity onPressOut={setNotifyState}><FontAwesomeIcon icon={faBell} size={20} style={ currentPage == 'notification' ? {color: 'rgb(8,0,45)'} : {color: 'gray'} } /><View style={is_notify ? styles.ballon : {}}></View></TouchableOpacity>
          <TouchableOpacity onPressOut={seMapState}><FontAwesomeIcon icon={faStreetView} size={20} style={ currentPage == 'map' ? {color: 'rgb(8,0,45)'} : {color: 'gray'} } /><View style={is_notify ? styles.ballon : {}}></View></TouchableOpacity>
          <TouchableOpacity onPressOut={setSettingsState}><FontAwesomeIcon icon={faGear} size={20} style={ currentPage == 'settings' ? {color: 'rgb(8,0,45)'} : {color: 'gray'} } /></TouchableOpacity>
        </View>
        
      }
        </SafeAreaView>
    </SafeAreaView>
  )
}

export default Home
