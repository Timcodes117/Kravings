// import { Alert, StyleSheet, Text, View } from 'react-native'
// import React from 'react'
// import {
//     AdMobBanner,
//     AdMobInterstitial,
//     PublisherBanner,
//     AdMobRewarded,
//     setTestDeviceIDAsync,
//   } from 'expo-ads-admob';
// import { useEffect } from 'react';

// const Interstitial = async() =>{
//     await AdMobInterstitial.setAdUnitID('ca-app-pub-9976753474067424/5961976066'); // Test ID, Replace with your-admob-unit-id
//     try{
//     await AdMobInterstitial.requestAdAsync({ servePersonalizedAds: true});
//     await AdMobInterstitial.showAdAsync();
//     finish();
//     }catch(e){
//         Alert.alert('err: ', e)
//     }
// }

// const finish = ()=>{
//         Alert.alert('Done', 'worked perfectly. you will now be redirected to a new screen.')
// }
// export default function Adload() {
//     useEffect(()=>{
//         Interstitial();
//         finish();
//     },[])
    
//   return (
//     <>
//     <Text>adload</Text>
//     </>
//   )
// }

// const styles = StyleSheet.create({})