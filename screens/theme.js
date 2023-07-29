import { View, Text, StyleSheet, Dimensions } from 'react-native'
import React, { useState } from 'react'
export default StyleSheet.create({
    container: {
        flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'white',
      },
      header: {
        width: '100%',
        height: 170,
        alignItems: 'flex-start',
        justifyContent: 'center',
        flexDirection: 'column',
        position: 'absolute',
        top: 0,
        backgroundColor: null,
        zIndex: 100,
        borderBottomRightRadius: 50,
        borderBottomLeftRadius: 20
      },

      userCard: {
       minWidth: '90%',
        height: 200,
        // backgroundColor: '#FCC201', // #00FF00 green hex color code
        alignSelf: 'center',
        borderRadius: 20,
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        marginTop: 10
      },

      overview: {
        width: '100%',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 10
      },

      fakeSearch: {
        height: 45,
        width: '90%',
        display: 'flex',
        alignSelf: 'center',
        backgroundColor: 'whitesmoke',
        borderRadius: 100,
        marginTop: 30,
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'row'
      },
  
      sv: {
        minWidth: '100%',
        marginTop: 80,
        
      },
  
      fv: {
        width: Dimensions.get('window').width / 2 - (10) ,
        maxWidth: 300,
        height: Dimensions.get('window').width / 2  - (5),
        backgroundColor: 'white',
        marginBottom: 50,
        margin: 3
      },
      
      thumbnail: {
        width: '100%',
        height: 150,
        borderRadius: 10
      },
      ballon: {
        width: 10,
        height: 10,
        backgroundColor: 'red',
        position: 'absolute',
        right: -3,
        borderRadius: 100
      },

      headerIconsLeft: {
        color: 'rgb(8,0,45)', 
        position: 'absolute', 
        left: 10,
        height: 30,
        width: 30,
        backgroundColor: 'black',
        borderRadius: 100
      },

      headerBellIcon: {
        color: 'rgb(8,0,45)', 
        position: 'absolute', 
        right: 10,
        top: -5
      },

      headerSearchIcon: {
        color: 'rgb(8,0,45)', 
        position: 'absolute', 
        right: 40
      },

      headerSection: {
        color: 'rgb(8,0,45)', 
        fontSize: 20
      },

      navmenu: {
        width: '85%', 
        height: 70, 
        alignItems: 'center', 
        justifyContent: 'space-evenly',
        position:'absolute', 
        backgroundColor: 'ghostwhite',
        bottom: 10, 
        borderRadius: 100,
        flexDirection: 'row',
      },

      globalColor: {
        color: 'rgb(8,0,45)'
      },

      banner: {
        position: 'absolute',
        top: 75,
        zIndex: 90
      }

})





// export default StyleSheet.create({
//     container: {
//         flex: 1,  
//           alignItems: 'center',
//           justifyContent: 'center',
//           backgroundColor: 'rgb(8,0,45)' //rgb(31, 0, 171)
//       },
//       header: {
//         width: '100%',  
//         height: 70,
//         alignItems: 'center',
//         justifyContent: 'center',
//         flexDirection: 'row',
//         position: 'absolute',
//         top: 0,
//         backgroundColor: 'rgb(3, 0, 17)',
//         zIndex: 100
//       },
  
//       sv: {
//         flex: 1,  
//         minWidth: '100%',
//         marginTop: 80,
//       },
  
//       fv: {
//         width: '100%',  
//         height: 360,
//         backgroundColor: '#0b0042',
//         marginTop: 20
//       },
  
//       thumbnail: {
//         width: '100%',  
//         height: 280
//       },
//       ballon: {
//         width: 10,  
//         height: 10,
//         backgroundColor: 'red',
//         position: 'absolute',
//         right: -3,
//         borderRadius: 100
//       },

//       headerIconsLeft: {
//         color: 'whitesmoke',   
//         position: 'absolute', 
//         left: 10
//       },

//       headerBellIcon: {
//         color: 'rgb(31, 0, 171)',   
//         position: 'absolute', 
//         right: 10
//       },

//       gI:{
//         color: 'rgb(31, 0, 171)'  
//       },

//       headerSearchIcon: {
//         color: 'rgb(31, 0, 171)',   
//         position: 'absolute', 
//         right: 40
//       },

//       headerSection: {
//         color: 'rgb(31, 0, 171)',   
//         fontSize: 20
//       },

//       navmenu: {
//         width: '85%',   
//         height: 70, 
//         alignItems: 'center', 
//         justifyContent: 'space-evenly',
//         position:'absolute', 
//         bottom: 10, 
//         borderRadius: 100,
//         flexDirection: 'row',
//         backgroundColor: 'white'
//       },

//       globalColor: {
//         color: 'rgb(8,0,45)'  
//       },

//       banner: {
//         position: 'absolute',  
//         top: 75,
//         width: '100%',
//         zIndex: 90
//       }

// })


//original theme below
