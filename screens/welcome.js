import { StatusBar } from 'expo-status-bar';
import react, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button, TouchableOpacity, ImageBackground} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Welcome() {
  const navigator = useNavigation();

 return(
   <ImageBackground style={styles.view} source={require('../assets/welb.jpg')}>
    <StatusBar style='inverted' />
    <View style={styles.logo}>
        <Text style={{fontSize: 50, fontWeight: '800', color: 'rgb(8,0,45)'}}>WEL</Text>
        <Text style={{fontSize: 50, fontWeight: '800', color: 'gainsboro'}}>COME!</Text>
        <Text style={{fontSize: 12, color: 'rgb(8,0,45)', width: '70%', textAlign: 'center'}}>have a nice shopping experience on our food delivery app</Text>
        </View>
  
  <TouchableOpacity style={styles.cb} onPressOut={navigator.navigate('home')} >
    <Text style={{color: 'white'}}>CONTINUE</Text>
  </TouchableOpacity>

  </ImageBackground>
 )


}


const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    
  },

  cb: {
    position: 'absolute',
    bottom: 50,
    width: '90%',
    height: 60,
    backgroundColor: 'rgb(8,0,45)',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    color: 'gainsboro'
  },

  info:{
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center'    
  },
  bnext:{
    width: '50%',
    height: 50,

  },
  logo: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    position: 'absolute',
    top: 100
  }
});

