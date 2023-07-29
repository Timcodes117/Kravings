import { faInvision } from '@fortawesome/free-brands-svg-icons';
import { faBox, faCancel, faEnvelope, faEnvelopeOpenText, faEye, faEyeDropper, faEyeLowVision, faEyeSlash, faInbox, faLock, faLockOpen, faMailBulk, faMailForward, faMessage, faNavicon, faVoicemail } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import {AsyncStorage, Dimensions} from 'react-native'
import { StyleSheet, Text, View, Image, TextInput, Button,TouchableOpacity,
   Alert, SafeAreaView,ImageBackground, KeyboardAvoidingView, Platform} from 'react-native';

export default function Login() {

  const [mail, setMail] = useState(null)
  const [password, setPassword] = useState(null)
  const [codeState, setCodeState] = useState(true)
  const navigator = useNavigation();
  const [Validty, setValidty] = useState('') 
  
  //password hide/show function
  function toggleCodeStateHide(){
    setCodeState(false)
  }
  
  function toggleCodeStateTrue() {
    setCodeState(true)
    }

    function checkValidty(){

    }

    

  return(
    <>
    <StatusBar backgroundColor={'black'} style={'light'}/>
      <TouchableOpacity style={styles.floatingButton} onPressOut={()=> navigator.replace("Signup")}>
        <Text style={styles.floatingButtonText}>SignUp</Text>
      </TouchableOpacity>
      <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : 'height'} >
       <Image source={require('../assets/loginArt.png')} resizeMode={'center'} style={{width: '100%', height: 350, }}/>

          <View style={styles.textBoxContainer}>
            <FontAwesomeIcon icon={faEnvelopeOpenText} size={20} style={{color: 'rgb(8,0,45)', marginLeft: 10, marginRight: 10}} />
          <TextInput style={{width: '87%',height: '100%',}} placeholder='email' 
                                              keyboardType={'email-address'}
                                              value={mail}
                                              onChangeText={text => setMail(text)}
                                              autoComplete='off'
                                              autoCapitalize='none'
                                              maxLength={32}
                                              />
                                              </View>

          <View style={styles.textBoxContainer}>
            <FontAwesomeIcon icon={faLock} size={20} style={{color: 'rgb(8,0,45)', marginLeft: 20, marginRight: 20}} />
          <TextInput style={styles.textBoxes} placeholder='password' 
                                              autoComplete='off'
                                              autoCapitalize='none'
                                              secureTextEntry={codeState}
                                              value={password}
                                              onChangeText={text => setPassword(text)}
                                              maxLength={32}/>
          <TouchableOpacity style={{marginRight: 10}} onPressOut={ codeState == true ?  toggleCodeStateHide :  toggleCodeStateTrue}>
               <View>{codeState == true ? <FontAwesomeIcon icon={faEyeSlash} size={20} style={{color: 'rgb(8,0,45)'}} /> 
                                        : <FontAwesomeIcon icon={faEye} size={20} style={{color: 'rgb(8,0,45)'}} />  }</View>
                                              </TouchableOpacity>
                                              </View>   
                                                                             
            <View style={{width: '100%', alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}}>
              {/* <Text style={{color: 'black', textAlign: 'center'}}>...</Text> */}
          <TouchableOpacity style={styles.buttonWithBackground2}>
            <Text style={{color: 'white'}}>signup</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonWithBackground}>
            <Text style={{color: 'white'}}>Login</Text>
          </TouchableOpacity>
            </View>

                    
          {/* <View style={[styles.bottomArea]}>
            <Text >Don't have an account: </Text><TouchableOpacity style={{paddingVertical:10}}onPressOut={()=> navigator.replace("Signup")}><Text style={{color: 'dodgerblue', fontSize: 15, }}>SignUp</Text></TouchableOpacity>
          </View> */}
      
    </KeyboardAvoidingView>
</>
  );
  
}


  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      height: Dimensions.get('window').height,
      backgroundColor: 'white'
      
      
    },
    web: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      maxWidth: 500
      
      
    },
    viewing: {
      flex: 1,
      alignItems: 'center',
      width: '100%',
      backgroundColor: 'white',
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      position: 'absolute',
      bottom: 10,
      
    },

    textBoxContainer:{
      width: '90%',
      maxWidth: 500,
      alignItems: 'center', 
      justifyContent: 'space-evenly',     
      flexDirection: 'row',
      height: 50,
      marginBottom: 20,
      backgroundColor: 'whitesmoke',
      borderRadius: 100
    },

    textBoxes: {
      marginTop: 30,
      width: '85%',
      height: '100%',
      alignSelf: 'flex-end',
    },

    buttonWithBackground: {
      width: '25%',
      height: 50,
      backgroundColor: 'rgb(8,0,45)',
      marginTop: 40,
      borderRadius: 50,
      justifyContent: 'center',
      alignItems: 'center'
    },
    buttonWithBackground2: {
      width: '35%',
      height: 50,
      backgroundColor: 'gainsboro',
      marginTop: 40,
      borderRadius: 50,
      justifyContent: 'center',
      alignItems: 'center', marginRight: 10
    },
    buttonWithoutBackground: {
      width: '50%',
      height: 50,
      backgroundColor: null,
      borderWidth: 2,
      borderColor: 'rgb(8,0,45)',
      borderRadius: 50,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 10
    },

    floatingButton:{
      backgroundColor: null,
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'flex-end',
      marginBottom: 50,
      marginRight: 15,
      marginTop: 20
      
    },
    floatingButtonText:{
      backgroundColor: null,
      color: 'rgb(8,0,45)',
      fontSize: 30,
      fontWeight: '800'
    },
    bottomArea: {
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 10,
      flexDirection: 'row'
    }
  });