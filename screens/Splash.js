// import { StatusBar } from 'expo-status-bar';
// import { useState, useEffect } from 'react';
// import { StyleSheet, Text, View, Image} from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import {auth, db} from './firebaseConfig'
// import {} from '@reac'

// const Splash = ({userId}) =>  {
//   const [user, userState] = useState(true)
//   const navigator = useNavigation();
//   const [foods, setFoods] = useState([]) 

//   useEffect(() => {
//     const subscriber = db()
//       .collection('Users')
//       .doc(userId)
//       .onSnapshot(documentSnapshot => {
//         console.log('User data: ', documentSnapshot.data());
//       });

//     // Stop listening for updates when no longer required
//     return () => subscriber();
//   }, [userId]);
        
//         // if(user){
//   //   setTimeout(() => {
//   //     navigator.replace("login")
//   //   }, 5000);

//   return (
//     <View style={styles.container}>
//       {
//         foods.map(({id, data: {foods}}) => (
//           <Text key={id}>1{foods}</Text>
//   )
// )
//       }
//     </View>
//   );
// }
    


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
    
//   },
 
  
// });


// export default Splash