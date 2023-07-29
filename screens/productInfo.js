import { Animated, Dimensions, Image, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, ToastAndroid, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faAngleLeft, faCartPlus, faCartShopping, faLocation, faMap, faMapLocation, faMapMarked, faMapMarker, faMapMarkerAlt, faMarker, faNairaSign } from '@fortawesome/free-solid-svg-icons'
import MapView from 'react-native-maps'
import { FlatList } from 'react-native'
import { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react'
import {foodItems} from './database'
import AsyncStorage from '@react-native-async-storage/async-storage'


 const ProductInfo= ({route, navigation}) => {
    const {productId} = route.params;
    const width = Dimensions.get('window').width
    const navigator = useNavigation();
    const [products, setproducts] = useState({})
    const itm = [require('../assets/food3.jpg'), require('../assets/food4.jpg'),require('../assets/food5.jpg')]
    const scrollX = new Animated.Value(0);

    let position = Animated.divide(scrollX, width)
    //renderProducts
    const renderProducts =({item, index})=>{
        return (
            <View style={{width: width, height: '100%'}}>
                <Image source={item} resizeMode={'cover'} 
                
                style={{width: '100%', height: 500,}}></Image>
            </View>
        )
    }

    // useEffect(()=>{
    //     const unsubscribe = db.collection("foods").onSnapshot((snapshot) => 
    //         setFoods(
    //             snapshot.docs.map((doc) => ({
    //                 id: doc.id,
    //                 data: doc.data(),
    //             }))
    //         )
    //     )
    //     return unsubscribe
    // },[])
    
    useEffect(()=>{
        const unsubscribe = navigation.addListener('focus', () => {
            getDataFromDb();
        });
        return unsubscribe;
    }, [navigation])

    const getDataFromDb = async () =>{
        for (let index = 0; index < foodItems.length; index++) {
            if(foodItems[index].id == productId){
                await setproducts(foodItems[index]);
                return;
            }            
        }
    }; 

    //add to cart

    const addToCart = async id =>{
        let itemArray = await AsyncStorage.getItem('cartItem');
        itemArray= JSON.parse(itemArray)
            if(itemArray){
                let array = itemArray
                array.push(id);
                try{
                    await AsyncStorage.setItem('cartItem', JSON.stringify(array));
                    ToastAndroid.show(
                        'Item Added Successfully to cart',
                        ToastAndroid.SHORT,
                    );
                    navigator.navigate('home')
                }catch(e){
                    return err();
                }
            }else{
                let array = [];
                array.push(id);
                try{
                    await AsyncStorage.setItem('cartItem', JSON.stringify(array));
                    ToastAndroid.show(
                        'Item Added Successfully to cart',
                        ToastAndroid.SHORT,
                    );
                    navigator.navigate('home')
                }catch(err){
                    return err();
                }
        }
    };


    
  return (
    <>
        <StatusBar backgroundColor={null} style={'light'}/>
        <TouchableOpacity onPress={()=> navigator.navigate('home')} style={styles.backButton}>
            <FontAwesomeIcon icon={faAngleLeft} size={15} />
        </TouchableOpacity>

    <ScrollView style={{height: '100%',width: '100%'}}>
        <View style={styles.previewer}>
        <ScrollView style={{width: '100%', height: '100%'}} >
            <View style={{width: '100%'}}>
                <FlatList data={products.foodImagePreview ? products.foodImagePreview : null} 
                horizontal 
                renderItem={renderProducts}
                decelerationRate={0.8}
                snapToInterval={width}
                bounces={false}
                onScroll={Animated.event(
                    [{nativeEvent: {contentOffset: {x: scrollX}}}],
                    {useNativeDriver: false}
                )}
                />
            </View>
        </ScrollView>


        <View style={{position: 'absolute', bottom: 10, flexDirection: 'row', backgroundColor: null, width: '100%', height: 20, alignItems: 'center', justifyContent: 'center'}}>

        {
            products.foodImagePreview ? products.foodImagePreview.map((data, index)=>{
                
                let opacity = position.interpolate({
                    inputRange: [index - 1, index, index + 1],
                    outputRange: [0.2, 1, 0.2],
                    extrapolate: 'clamp'
                });
                
                return(
                    <Animated.View 
                    key={index} style={{width: 50,
                    height: 3, opacity: 0.5, 
                    opacity,
                    marginHorizontal: 4,
                    backgroundColor: 'white', borderRadius: 100}}>
                        
                    </Animated.View>
                )
            })
            : null}
        </View>
        </View>


        <View style={{flexDirection: 'row', marginTop: 20, marginLeft: 10, marginBottom: 10}}>
            <FontAwesomeIcon icon={faCartShopping} size={25} style={{color: '#0043f9'}} />
            <Text style={{fontSize: 15, marginLeft: 5}}>shopping</Text>
        </View>

            <Text style={styles.ProductName}>{products.foodName}</Text>
            <Text style={styles.ProductDetail}>{products.foodDetails}</Text>
            {/* <View style={{marginLeft: 10, flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center', marginTop: 5}}>
            <View style={{width: '100%', justifyContent: 'center',  flexDirection: 'row' }}>
            <Text style={{color: 'grey', marginLeft: 10,}}>Price: </Text>
                <View style={{marginLeft: 10, flexDirection: 'row', alignSelf: 'flex-end', marginTop: 5}}>
            <FontAwesomeIcon icon={faNairaSign} size={20} style={{color: 'blue'}} />
            <Text style={styles.ProductPrice}> {products.foodPrice}</Text>
            </View>
            <Text style={{color: 'blue', }}>Tax: {products.Tax} ~ 0.00</Text>

            </View>
            </View> */}

            <View style={{width: width, marginTop: 10, flexDirection: 'row', height: 50, alignItems: 'center'}}>
            <Text style={{color: 'grey', marginLeft: 10, fontSize: 20}}>Price: </Text>

            <View style={{color: 'grey', flexDirection: 'row', alignItems: 'center', position: 'absolute', right: 10 }}>
            <FontAwesomeIcon icon={faNairaSign} size={35} style={{color: 'blue'}} />
            <Text style={styles.ProductPrice}> {products.foodPrice}</Text>
            </View>

            </View>
            


            <View style={{marginTop: 30, marginLeft: 10, flexDirection: 'row', alignItems: 'center', marginBottom: 20}}>
                <FontAwesomeIcon icon={faMapMarkerAlt} size={20} /> 
                <View style={{marginLeft: 10}} >
                <Text style={{color: 'gray'}}>available at:  </Text>
                <Text style={{color: 'gray'}}>all the branches </Text>
                </View>
            </View>

            <MapView style={{width: '100%', backgroundColor: 'whitesmoke', height: 300}} 
            mapType={'mutedStandard'}
            initialRegion={{
                latitude: 6.52243919590852,
                longitude: 3.311828582821019, //6.52243919590852, 3.311828582821019
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }}>

            </MapView>

    </ScrollView>
            <TouchableOpacity onPress={()=>addToCart(products.id)} style={styles.addToCart}>
               <FontAwesomeIcon icon={faCartPlus} size={20} style={{color: 'white'}}/>
               <Text style={{fontSize: 15, color: 'white', marginLeft: 10}}>ADD TO CART</Text>
            </TouchableOpacity>
</>
  )
}

const styles = StyleSheet.create({
    backButton: {
        height: 30,
        width: 30,
        backgroundColor: 'white',
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        left: 10,
        zIndex: 100,
        top: 10
    },

    previewer: {
        width: '100%',
        height: 400,
        backgroundColor: 'gainsboro',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        overflow: 'scroll'
    }, 

    ProductName:{
        fontSize: 40,
        fontWeight: 'bold',
        width: '100%',
        marginLeft: 10, 
    },
    
    ProductPrice:{
        fontSize: 35,
        fontWeight: 'bold',
        width: '100%',
        color: 'blue'
    },

    ProductDetail:{
        marginTop: 5,
        width: '100%',
        color: 'gray', 
        marginLeft: 10
    },

    addToCart: {
        position: 'absolute',
        width: '90%',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center', 
        backgroundColor: '#0043f9',
        borderRadius: 20,
        bottom: 10,
        alignSelf: 'center',
        flexDirection: 'row'
    }
})

export default ProductInfo;