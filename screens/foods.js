import { View, Text, Image, StyleSheet} from 'react-native'
import React from 'react'
import {
  AdMobBanner,
  AdMobInterstitial,
  PublisherBanner,
  AdMobRewarded,
  setTestDeviceIDAsync,
} from 'expo-ads-admob';

export default function Foods() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'space-evenly', flexDirection: 'row', flexWrap: 'wrap', width: '100%'}}>
      <View style={styles.fv}>
          <Image source={require('../assets/food.jpg')} style={styles.thumbnail} />
          <View style={{alignItems: 'center', justifyContent: 'center'}}>
            <Text style={{fontWeight: '700', color: 'rgb(8,0,45)'}}>NAME: </Text>
            <Text>PRICE: </Text>
          </View>
        </View>
        
        <View style={styles.fv}>
          <Image source={require('../assets/food3.jpg')} style={styles.thumbnail} />
          <View style={{alignItems: 'center', justifyContent: 'center'}}>
            <Text style={{fontWeight: '700', color: 'rgb(8,0,45)'}}>NAME: </Text>
            <Text>PRICE: </Text>
          </View>
          
        </View>
        <View style={styles.fv}>
          <Image source={require('../assets/food1.jpg')} style={styles.thumbnail} />
          <View style={{alignItems: 'center', justifyContent: 'center'}}>
            <Text style={{fontWeight: '700', color: 'rgb(8,0,45)'}}>NAME: </Text>
            <Text>PRICE: </Text>
          </View>
        </View>
      
        <View style={styles.fv}>
          <Image source={require('../assets/food8.jpg')} style={styles.thumbnail} />
          <View style={{alignItems: 'center', justifyContent: 'center'}}>
            <Text style={{fontWeight: '700', color: 'rgb(8,0,45)'}}>NAME: </Text>
            <Text>PRICE: </Text>
          </View>
          
        </View>
        <View style={styles.fv}>
          <Image source={require('../assets/food15.jpg')} style={styles.thumbnail} />
          <View style={{alignItems: 'center', justifyContent: 'center'}}>
            <Text style={{fontWeight: '700', color: 'rgb(8,0,45)'}}>NAME: </Text>
            <Text>PRICE: </Text>
          </View>
        </View>
        <View style={styles.fv}>
          <Image source={require('../assets/pizza1.jpg')} style={styles.thumbnail} />
          <View style={{alignItems: 'center', justifyContent: 'center'}}>
            <Text style={{fontWeight: '700', color: 'rgb(8,0,45)'}}>NAME: </Text>
            <Text>PRICE: </Text>
          </View>
        </View>
        <View style={styles.fv}>
          <Image source={require('../assets/food13.jpg')} style={styles.thumbnail} />
          <View style={{alignItems: 'center', justifyContent: 'center'}}>
            <Text style={{fontWeight: '700', color: 'rgb(8,0,45)'}}>NAME: </Text>
            <Text>PRICE: </Text>
          </View>
        </View>
        <View style={styles.fv}>
          <Image source={require('../assets/food18.jpg')} style={styles.thumbnail} />
          <View style={{alignItems: 'center', justifyContent: 'center'}}>
            <Text style={{fontWeight: '700', color: 'rgb(8,0,45)'}}>NAME: </Text>
            <Text>PRICE: </Text>
          </View>
        </View>
        <View style={styles.fv}>
          <Image source={require('../assets/food4.jpg')} style={styles.thumbnail} />
          <View style={{alignItems: 'center', justifyContent: 'center'}}>
            <Text style={{fontWeight: '700', color: 'rgb(8,0,45)'}}>NAME: </Text>
            <Text>PRICE: </Text>
          </View>
        </View>
        <View style={styles.fv}>
          <Image source={require('../assets/food.jpg')} style={styles.thumbnail} />
          <View style={{alignItems: 'center', justifyContent: 'center'}}>
            <Text style={{fontWeight: '700', color: 'rgb(8,0,45)', }}>NAME: </Text>
            <Text>PRICE: </Text>
          </View>
        </View>
    </View>
  )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'whitesmoke'
    },

    header: {
      width: '100%',
      height: 70,
      alignItems: 'center',
      justifyContent: 'center',
      position: 'absolute',
      top: 0,
      backgroundColor: 'white'
    },

    sv: {
      flex: 1,
      minWidth: '100%',
      marginTop: 80,
      flexWrap: 'wrap'
    },

    fv: {
      width: '47%',
      height: 200,
      backgroundColor: 'white',
      marginBottom: 50,
    },
    
    thumbnail: {
      width: '100%',
      height: 150,
      borderRadius: 10
    }
})