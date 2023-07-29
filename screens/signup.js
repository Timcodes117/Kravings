import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { Children, useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button, SafeAreaView, Alert, Platform, ImageBackground} from 'react-native';
import { TouchableOpacity} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome'
import {faAngleLeft, faBackward, faLessThan} from '@fortawesome/free-solid-svg-icons'
import AsyncStorage from '@react-native-async-storage/async-storage'
import {useFonts} from 'expo-font'
import { KeyboardAvoidingView } from 'react-native';
import Home from './Home';
const Signup = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [Cmail, setCmail] = useState('')
  const [date, setDate] = useState('')
  const [password, setPassword] = useState('')
  const [Cpassword, setCPassword] = useState('')
  const [current, setCurrent] = useState('name');
  const [bg, setbg]= useState('red')
  const [fontsLoaded] = useFonts({'Exo': require('../assets/fonts/exo.otf')});

  const feilds = ['photo','name', 'email', 'confirmEmail', 'password', 'confirmPassword', 'finish'];

    function handlePress(){
      setCurrent(current + 1)
      
      if(feilds[current] === 'home'){
        setbg('rgb(0, 136, 184)')
      }
    }
  
  const navigator = useNavigation();


  
  return (
    <SafeAreaView style={[{backgroundColor: bg, width: '100%', flex: 1,  alignItems: 'center', justifyContent: 'center'}]}> 
          <StatusBar style="light"  backgroundColor={null} />
          {/* header */}
          <SafeAreaView style={styles.header}> 
          <View style={{width: '100%', alignItems: 'center', justifyContent: 'center'}}>
            <TouchableOpacity style={{position: 'absolute', left: 20,}}><FontAwesomeIcon icon={faAngleLeft} size={30} style={{color: 'white'}}/></TouchableOpacity> 
            <Text style={{color: 'white', fontSize: 20,fontWeight: '500', height: 30, }} >SignUp</Text>
          </View>
          </SafeAreaView>

          {/* name scrren */}
          {
            current === 'name' ? <>
            
          <SafeAreaView style={styles.bottomFeild}>
          <View style={{marginTop: '50%', alignItems: 'center',}}>
            <View style={{marginBottom: 100}}></View>
                <Text style={{color: 'white', width: '90%', fontSize: 30, fontFamily: 'Exo', flexWrap: 'wrap', height: 50, backgroundColor: bg}}>What is your name?</Text>
            <Image source={require('../assets/name.png')} style={{width: 200, height: 210}} resizeMode={'contain'}/>
              <View style={{marginBottom: 10}}></View>
          </View>

          <View style={{width: '60%', marginBottom: 20, flexDirection: 'row',justifyContent: 'space-evenly'}}>
            <View style={{width: 25, height: 3, backgroundColor: 'white', borderRadius: 50,  }}></View>
            <View style={{width: 25, height: 3, opacity: 0.5, backgroundColor: 'white', borderRadius: 100, }}></View>
            <View style={{width: 25, height: 3, opacity: 0.5, backgroundColor: 'white', borderRadius: 100, }}></View>
            <View style={{width: 25, height: 3, opacity: 0.5, backgroundColor: 'white', borderRadius: 100, }}></View>
            <View style={{width: 25, height: 3, opacity: 0.5, backgroundColor: 'white', borderRadius: 100, }}></View>
            <View style={{width: 25, height: 3, opacity: 0.5, backgroundColor: 'white', borderRadius: 100, }}></View>
          </View>
              <View style={{marginBottom: 25}}></View>
            <View style={styles.InputFeild}>
              <TextInput style={{width: '90%', height: '100%', fontSize: 12}} 
                placeholder={'type your firstname'} 
                onChangeText={text => setFirstName(text)} value={firstName} />
                </View>           
            <View style={{marginBottom: 25}}></View>

            <TouchableOpacity style={styles.nbutton}>
              <Text style={{color: 'white', fontSize: 10}}>next</Text>
            </TouchableOpacity>
            <View style={{marginBottom: 5}}></View>
          </SafeAreaView>
</>: null
}
          {/* email screen */}
          {
            current === 'email' ? <>
            
            <Image source={require('../assets/name.png')} style={{width: 200, height: 210}} resizeMode={'contain'}/>
          <SafeAreaView style={styles.bottomFeild}>
          <View style={{marginTop: '50%', alignItems: 'center',}}>
            <View style={{marginBottom: 100}}></View>
                <Text style={{color: 'white', width: '90%', fontSize: 30, fontFamily: 'Exo', flexWrap: 'wrap', height: 50, backgroundColor: bg}}>What is your name?</Text>
              <View style={{marginBottom: 10}}></View>
          </View>

          <View style={{width: '60%', marginBottom: 20, flexDirection: 'row',justifyContent: 'space-evenly'}}>
            <View style={{width: 25, height: 3, backgroundColor: 'white', borderRadius: 50,  }}></View>
            <View style={{width: 25, height: 3, opacity: 0.5, backgroundColor: 'white', borderRadius: 100, }}></View>
            <View style={{width: 25, height: 3, opacity: 0.5, backgroundColor: 'white', borderRadius: 100, }}></View>
            <View style={{width: 25, height: 3, opacity: 0.5, backgroundColor: 'white', borderRadius: 100, }}></View>
            <View style={{width: 25, height: 3, opacity: 0.5, backgroundColor: 'white', borderRadius: 100, }}></View>
            <View style={{width: 25, height: 3, opacity: 0.5, backgroundColor: 'white', borderRadius: 100, }}></View>
          </View>
              <View style={{marginBottom: 25}}></View>
            <View style={styles.InputFeild}>
              <TextInput style={{width: '90%', height: '100%', fontSize: 12}} 
                placeholder={'type your firstname'} 
                onChangeText={text => setFirstName(text)} value={firstName} />
                </View>           
            <View style={{marginBottom: 25}}></View>

            <TouchableOpacity style={styles.nbutton}>
              <Text style={{color: 'white', fontSize: 10}}>next</Text>
            </TouchableOpacity>
            <View style={{marginBottom: 5}}></View>
          </SafeAreaView>
</>: null
}
          {/* address screen */}
          {
            current === 'address' ? <>
            
            <Image source={require('../assets/name.png')} style={{width: 200, height: 210}} resizeMode={'contain'}/>
          <SafeAreaView style={styles.bottomFeild}>
          <View style={{marginTop: '50%', alignItems: 'center',}}>
            <View style={{marginBottom: 100}}></View>
                <Text style={{color: 'white', width: '90%', fontSize: 30, fontFamily: 'Exo', flexWrap: 'wrap', height: 50, backgroundColor: bg}}>What is your name?</Text>
              <View style={{marginBottom: 10}}></View>
          </View>

          <View style={{width: '60%', marginBottom: 20, flexDirection: 'row',justifyContent: 'space-evenly'}}>
            <View style={{width: 25, height: 3, backgroundColor: 'white', borderRadius: 50,  }}></View>
            <View style={{width: 25, height: 3, opacity: 0.5, backgroundColor: 'white', borderRadius: 100, }}></View>
            <View style={{width: 25, height: 3, opacity: 0.5, backgroundColor: 'white', borderRadius: 100, }}></View>
            <View style={{width: 25, height: 3, opacity: 0.5, backgroundColor: 'white', borderRadius: 100, }}></View>
            <View style={{width: 25, height: 3, opacity: 0.5, backgroundColor: 'white', borderRadius: 100, }}></View>
            <View style={{width: 25, height: 3, opacity: 0.5, backgroundColor: 'white', borderRadius: 100, }}></View>
          </View>
              <View style={{marginBottom: 25}}></View>
            <View style={styles.InputFeild}>
              <TextInput style={{width: '90%', height: '100%', fontSize: 12}} 
                placeholder={'type your firstname'} 
                onChangeText={text => setFirstName(text)} value={firstName} />
                </View>           
            <View style={{marginBottom: 25}}></View>

            <TouchableOpacity style={styles.nbutton}>
              <Text style={{color: 'white', fontSize: 10}}>next</Text>
            </TouchableOpacity>
            <View style={{marginBottom: 5}}></View>
          </SafeAreaView>
</>: null
}
          {/* phone screen */}
          {
            current === 'phone' ? <>
            
            <Image source={require('../assets/name.png')} style={{width: 200, height: 210}} resizeMode={'contain'}/>
          <SafeAreaView style={styles.bottomFeild}>
          <View style={{marginTop: '50%', alignItems: 'center',}}>
            <View style={{marginBottom: 100}}></View>
                <Text style={{color: 'white', width: '90%', fontSize: 30, fontFamily: 'Exo', flexWrap: 'wrap', height: 50, backgroundColor: bg}}>What is your name?</Text>
              <View style={{marginBottom: 10}}></View>
          </View>

          <View style={{width: '60%', marginBottom: 20, flexDirection: 'row',justifyContent: 'space-evenly'}}>
            <View style={{width: 25, height: 3, backgroundColor: 'white', borderRadius: 50,  }}></View>
            <View style={{width: 25, height: 3, opacity: 0.5, backgroundColor: 'white', borderRadius: 100, }}></View>
            <View style={{width: 25, height: 3, opacity: 0.5, backgroundColor: 'white', borderRadius: 100, }}></View>
            <View style={{width: 25, height: 3, opacity: 0.5, backgroundColor: 'white', borderRadius: 100, }}></View>
            <View style={{width: 25, height: 3, opacity: 0.5, backgroundColor: 'white', borderRadius: 100, }}></View>
            <View style={{width: 25, height: 3, opacity: 0.5, backgroundColor: 'white', borderRadius: 100, }}></View>
          </View>
              <View style={{marginBottom: 25}}></View>
            <View style={styles.InputFeild}>
              <TextInput style={{width: '90%', height: '100%', fontSize: 12}} 
                placeholder={'type your firstname'} 
                onChangeText={text => setFirstName(text)} value={firstName} />
                </View>           
            <View style={{marginBottom: 25}}></View>

            <TouchableOpacity style={styles.nbutton}>
              <Text style={{color: 'white', fontSize: 10}}>next</Text>
            </TouchableOpacity>
            <View style={{marginBottom: 5}}></View>
          </SafeAreaView>
</>: null
}
          {/* confirm phone sms scrren */}
          {
            current === 'sms' ? <>
            
            <Image source={require('../assets/name.png')} style={{width: 200, height: 210}} resizeMode={'contain'}/>
          <SafeAreaView style={styles.bottomFeild}>
          <View style={{marginTop: '50%', alignItems: 'center',}}>
            <View style={{marginBottom: 100}}></View>
                <Text style={{color: 'white', width: '90%', fontSize: 30, fontFamily: 'Exo', flexWrap: 'wrap', height: 50, backgroundColor: bg}}>What is your name?</Text>
              <View style={{marginBottom: 10}}></View>
          </View>

          <View style={{width: '60%', marginBottom: 20, flexDirection: 'row',justifyContent: 'space-evenly'}}>
            <View style={{width: 25, height: 3, backgroundColor: 'white', borderRadius: 50,  }}></View>
            <View style={{width: 25, height: 3, opacity: 0.5, backgroundColor: 'white', borderRadius: 100, }}></View>
            <View style={{width: 25, height: 3, opacity: 0.5, backgroundColor: 'white', borderRadius: 100, }}></View>
            <View style={{width: 25, height: 3, opacity: 0.5, backgroundColor: 'white', borderRadius: 100, }}></View>
            <View style={{width: 25, height: 3, opacity: 0.5, backgroundColor: 'white', borderRadius: 100, }}></View>
            <View style={{width: 25, height: 3, opacity: 0.5, backgroundColor: 'white', borderRadius: 100, }}></View>
          </View>
              <View style={{marginBottom: 25}}></View>
            <View style={styles.InputFeild}>
              <TextInput style={{width: '90%', height: '100%', fontSize: 12}} 
                placeholder={'type your firstname'} 
                onChangeText={text => setFirstName(text)} value={firstName} />
                </View>           
            <View style={{marginBottom: 25}}></View>

            <TouchableOpacity style={styles.nbutton}>
              <Text style={{color: 'white', fontSize: 10}}>next</Text>
            </TouchableOpacity>
            <View style={{marginBottom: 5}}></View>
          </SafeAreaView>
</>: null
}
          {/* password scrren */}
          {
            current === 'password' ? <>
            
            <Image source={require('../assets/name.png')} style={{width: 200, height: 210}} resizeMode={'contain'}/>
          <SafeAreaView style={styles.bottomFeild}>
          <View style={{marginTop: '50%', alignItems: 'center',}}>
            <View style={{marginBottom: 100}}></View>
                <Text style={{color: 'white', width: '90%', fontSize: 30, fontFamily: 'Exo', flexWrap: 'wrap', height: 50, backgroundColor: bg}}>What is your name?</Text>
              <View style={{marginBottom: 10}}></View>
          </View>

          <View style={{width: '60%', marginBottom: 20, flexDirection: 'row',justifyContent: 'space-evenly'}}>
            <View style={{width: 25, height: 3, backgroundColor: 'white', borderRadius: 50,  }}></View>
            <View style={{width: 25, height: 3, opacity: 0.5, backgroundColor: 'white', borderRadius: 100, }}></View>
            <View style={{width: 25, height: 3, opacity: 0.5, backgroundColor: 'white', borderRadius: 100, }}></View>
            <View style={{width: 25, height: 3, opacity: 0.5, backgroundColor: 'white', borderRadius: 100, }}></View>
            <View style={{width: 25, height: 3, opacity: 0.5, backgroundColor: 'white', borderRadius: 100, }}></View>
            <View style={{width: 25, height: 3, opacity: 0.5, backgroundColor: 'white', borderRadius: 100, }}></View>
          </View>
              <View style={{marginBottom: 25}}></View>
            <View style={styles.InputFeild}>
              <TextInput style={{width: '90%', height: '100%', fontSize: 12}} 
                placeholder={'type your firstname'} 
                onChangeText={text => setFirstName(text)} value={firstName} />
                </View>           
            <View style={{marginBottom: 25}}></View>

            <TouchableOpacity style={styles.nbutton}>
              <Text style={{color: 'white', fontSize: 10}}>next</Text>
            </TouchableOpacity>
            <View style={{marginBottom: 5}}></View>
          </SafeAreaView>
</>: null
}
          {/* confirm password*/}
          {
            current === 'cpassword' ? <>
            
            <Image source={require('../assets/name.png')} style={{width: 200, height: 210}} resizeMode={'contain'}/>
          <SafeAreaView style={styles.bottomFeild}>
          <View style={{marginTop: '50%', alignItems: 'center',}}>
            <View style={{marginBottom: 100}}></View>
                <Text style={{color: 'white', width: '90%', fontSize: 30, fontFamily: 'Exo', flexWrap: 'wrap', height: 50, backgroundColor: bg}}>What is your name?</Text>
              <View style={{marginBottom: 10}}></View>
          </View>

          <View style={{width: '60%', marginBottom: 20, flexDirection: 'row',justifyContent: 'space-evenly'}}>
            <View style={{width: 25, height: 3, backgroundColor: 'white', borderRadius: 50,  }}></View>
            <View style={{width: 25, height: 3, opacity: 0.5, backgroundColor: 'white', borderRadius: 100, }}></View>
            <View style={{width: 25, height: 3, opacity: 0.5, backgroundColor: 'white', borderRadius: 100, }}></View>
            <View style={{width: 25, height: 3, opacity: 0.5, backgroundColor: 'white', borderRadius: 100, }}></View>
            <View style={{width: 25, height: 3, opacity: 0.5, backgroundColor: 'white', borderRadius: 100, }}></View>
            <View style={{width: 25, height: 3, opacity: 0.5, backgroundColor: 'white', borderRadius: 100, }}></View>
          </View>
              <View style={{marginBottom: 25}}></View>
            <View style={styles.InputFeild}>
              <TextInput style={{width: '90%', height: '100%', fontSize: 12}} 
                placeholder={'type your firstname'} 
                onChangeText={text => setFirstName(text)} value={firstName} />
                </View>           
            <View style={{marginBottom: 25}}></View>

            <TouchableOpacity style={styles.nbutton}>
              <Text style={{color: 'white', fontSize: 10}}>next</Text>
            </TouchableOpacity>
            <View style={{marginBottom: 5}}></View>
          </SafeAreaView>
</>: null
}
          {/* profile picture scrren */}
          {
            current === 'profile' ? <>
            
            <Image source={require('../assets/name.png')} style={{width: 200, height: 210}} resizeMode={'contain'}/>
          <SafeAreaView style={styles.bottomFeild}>
          <View style={{marginTop: '50%', alignItems: 'center',}}>
            <View style={{marginBottom: 100}}></View>
                <Text style={{color: 'white', width: '90%', fontSize: 30, fontFamily: 'Exo', flexWrap: 'wrap', height: 50, backgroundColor: bg}}>What is your name?</Text>
              <View style={{marginBottom: 10}}></View>
          </View>

          <View style={{width: '60%', marginBottom: 20, flexDirection: 'row',justifyContent: 'space-evenly'}}>
            <View style={{width: 25, height: 3, backgroundColor: 'white', borderRadius: 50,  }}></View>
            <View style={{width: 25, height: 3, opacity: 0.5, backgroundColor: 'white', borderRadius: 100, }}></View>
            <View style={{width: 25, height: 3, opacity: 0.5, backgroundColor: 'white', borderRadius: 100, }}></View>
            <View style={{width: 25, height: 3, opacity: 0.5, backgroundColor: 'white', borderRadius: 100, }}></View>
            <View style={{width: 25, height: 3, opacity: 0.5, backgroundColor: 'white', borderRadius: 100, }}></View>
            <View style={{width: 25, height: 3, opacity: 0.5, backgroundColor: 'white', borderRadius: 100, }}></View>
          </View>
              <View style={{marginBottom: 25}}></View>
            <View style={styles.InputFeild}>
              <TextInput style={{width: '90%', height: '100%', fontSize: 12}} 
                placeholder={'type your firstname'} 
                onChangeText={text => setFirstName(text)} value={firstName} />
                </View>           
            <View style={{marginBottom: 25}}></View>

            <TouchableOpacity style={styles.nbutton}>
              <Text style={{color: 'white', fontSize: 10}}>next</Text>
            </TouchableOpacity>
            <View style={{marginBottom: 5}}></View>
          </SafeAreaView>
</>: null
}
          {/* finish scrren */}
          {
            current === 'finish' ? <>
            
            <Image source={require('../assets/name.png')} style={{width: 200, height: 210}} resizeMode={'contain'}/>
          <SafeAreaView style={styles.bottomFeild}>
          <View style={{marginTop: '50%', alignItems: 'center',}}>
            <View style={{marginBottom: 100}}></View>
                <Text style={{color: 'white', width: '90%', fontSize: 30, fontFamily: 'Exo', flexWrap: 'wrap', height: 50, backgroundColor: bg}}>What is your name?</Text>
              <View style={{marginBottom: 10}}></View>
          </View>

          <View style={{width: '60%', marginBottom: 20, flexDirection: 'row',justifyContent: 'space-evenly'}}>
            <View style={{width: 25, height: 3, backgroundColor: 'white', borderRadius: 50,  }}></View>
            <View style={{width: 25, height: 3, opacity: 0.5, backgroundColor: 'white', borderRadius: 100, }}></View>
            <View style={{width: 25, height: 3, opacity: 0.5, backgroundColor: 'white', borderRadius: 100, }}></View>
            <View style={{width: 25, height: 3, opacity: 0.5, backgroundColor: 'white', borderRadius: 100, }}></View>
            <View style={{width: 25, height: 3, opacity: 0.5, backgroundColor: 'white', borderRadius: 100, }}></View>
            <View style={{width: 25, height: 3, opacity: 0.5, backgroundColor: 'white', borderRadius: 100, }}></View>
          </View>
              <View style={{marginBottom: 25}}></View>
            <View style={styles.InputFeild}>
              <TextInput style={{width: '90%', height: '100%', fontSize: 12}} 
                placeholder={'type your firstname'} 
                onChangeText={text => setFirstName(text)} value={firstName} />
                </View>           
            <View style={{marginBottom: 25}}></View>

            <TouchableOpacity style={styles.nbutton}>
              <Text style={{color: 'white', fontSize: 10}}>next</Text>
            </TouchableOpacity>
            <View style={{marginBottom: 5}}></View>
          </SafeAreaView>
</>: null
}
</SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: null,
    alignItems: 'center',
    justifyContent: 'center', 
  },
  
  nbutton: {
    width: 100,
    height: 50,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center', 
    borderRadius: 50,
    alignSelf: 'flex-end',
    marginRight: 25
  },

  InputFeild: {
    width: '90%',
    height: 60,
    backgroundColor: 'whitesmoke',
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center', 
  },

  header: {
    width: '100%',
    minHeight: 20,
    position: 'absolute',
    top: 50,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 100
  },
  
  bottomFeild: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    minHeight: 150,
    alignItems: 'center',
    justifyContent: 'center', 
  },

  warnings:{
    flex: 1,
    width: '90%',
    height: 50,
    backgroundColor: null,
    color: null,
    position: 'absolute',
    bottom: 10,
    alignSelf: 'center',
    borderRadius: 20,
    textAlign: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'red'
  },

  error:{
    alignSelf: 'center',
    textAlign: 'center',
    textAlignVertical: 'center',
    color: 'red',
    fontSize: 12,
    
  },
  floatingButton:{
    position: 'absolute',
    backgroundColor: null,
    justifyContent: 'flex-start',
    marginLeft: 10,
    top: 30,
    zIndex: 100,
  },
  floatingButtonText:{
    backgroundColor: null,
    color: 'rgb(8,0,45)',
    fontSize: 25,
    fontWeight: '800'
  },
});
export default Signup;