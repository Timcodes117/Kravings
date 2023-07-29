import { StyleSheet, Text, View, Linking, TouchableOpacity, TextInput, Alert } from 'react-native'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faChain, faChartLine, faDollar, faFingerprint, faGear, faHistory, faLandmark, faLock, faMapMarked, faMobile, faMobileAndroid, faSearch, faUser, faWarning } from '@fortawesome/free-solid-svg-icons'
import { faPaypal, faReact } from '@fortawesome/free-brands-svg-icons'
import { useState } from 'react'
import styles from './SettingTheme'
import AsyncStorage from '@react-native-async-storage/async-storage'
import * as MailComposer from 'expo-mail-composer';

export default function Settings() {
  const [appLock, setAppLock] = useState(false)

  const togal = () => setAppLock(pos => !pos);
  const storeData = async () => {
    try {
      await AsyncStorage.setItem('@Name', 'tim')
      Alert.alert('saved')
    }catch(err){
      Alert.alert(err)
    }
  }

  const getData = async () => {
    try {
      let value = await AsyncStorage.getItem('@Name')
      if(value !== null){
        Alert.alert('value', toString(value))

      }
    }catch(err){
      Alert.alert(err)
    }
  }

  const sendFeedback = () => {
    MailComposer.composeAsync({
      recipients: ["timcodes117@gmail.com"],
      subject: "issue with Kravings app",
      body: ''
    }).catch(() =>
      Alert.alert("Unable To Send Feedback", undefined, [
        {
          text: "Copy feedback email",
          onPress: () => Clipboard.setString("unleaded@reiner.design")
        },
        {
          text: "OK"
        }
      ])
    );
  };

  return (
    <View style={{flex: 1, alignItems: 'center', backgroundColor: 'ghostwhite'}}>
      <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', width: '90%',
                    backgroundColor: 'white', height: 50, borderRadius: 100, marginBottom: 20, marginTop: 20
    }}>
        <FontAwesomeIcon icon={faSearch} size={20} style={{marginLeft: 10, marginRight: 12, color: 'gray',}}/>
        <TextInput placeholder='search for settings'
        style={{width: '80%', height: '100%'}}
        ></TextInput>
      </View>

      <TouchableOpacity onPress={Linking.openSettings} style={styles.list}>
        <FontAwesomeIcon icon={faMobileAndroid} size={30} style={styles.sI}/><Text style={styles.sI}>Open app device settings</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={storeData} style={styles.list}>
        <FontAwesomeIcon icon={faUser} size={30} style={styles.sI}/><Text style={styles.sI}>My account</Text>
      </TouchableOpacity>

      <TouchableOpacity onPressOut={togal} style={styles.list}>
        <FontAwesomeIcon icon={faFingerprint} size={30} style={styles.sI}/><Text style={styles.sI}>Set app lock</Text>
        <View style={{position: 'absolute', right: 20, fontSize: 12, flexDirection: 'row', alignItems: 'center'}}> 
        { 
          appLock ?  <Text>ON</Text>
          :  <Text>OFF</Text>
        }
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={getData} style={styles.list}>
        <FontAwesomeIcon icon={faMapMarked} size={30} style={styles.sI}/><Text style={styles.sI}>Location</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={Linking.openSettings} style={styles.list}>
        <FontAwesomeIcon icon={faChartLine} size={30} style={styles.sI}/><Text style={styles.sI}>statistics</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={Linking.openSettings} style={styles.list}>
        <FontAwesomeIcon icon={faDollar} size={30} style={styles.sI}/><Text style={styles.sI}>Payments</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={Linking.openSettings} style={styles.list}>
        <FontAwesomeIcon icon={faHistory} size={30} style={styles.sI}/><Text style={styles.sI}>History</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={sendFeedback} style={styles.list}>
        <FontAwesomeIcon icon={faWarning} size={30} style={styles.sI}/><Text style={styles.sI}>Report an issue</Text>
      </TouchableOpacity>
      
      {/* credits */}
      <View style={{borderBottomWidth: 0.5, marginTop: 50, width: '70%', borderColor: 'gray', marginBottom: 20}}/>
      <Text style={{color: 'gray'}}>© 2022</Text>
      <Text style={{color: 'gray'}}>Kraving's inc.</Text>
      <Text style={{color: 'gainsboro', marginBottom: 200, fontSize: 10}}>V1.0.0</Text>
    </View>

  )
}
