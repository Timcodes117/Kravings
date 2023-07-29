import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MapView, {Marker, Circle, Callout} from 'react-native-maps'
import { Dimensions } from 'react-native';


export default function Map() {
  return (
    <View style={styles.container}>
      <MapView 
      mapType='terrain'
      minZoomLevel={8}
      removeClippedSubviews
      showsMyLocationButton={true}
      initialRegion={{
      latitude: 6.52243919590852,
      longitude: 3.311828582821019, //6.52243919590852, 3.311828582821019
      latitudeDelta: 1.1922,
      longitudeDelta: 1.1421,
    }}
    style={styles.map} >

    <Marker draggable coordinate={{ latitude : 6.52243919590852 , longitude : 3.311828582821019 }}     >
    <Callout><Text>you are here</Text></Callout>
    </Marker>
    <Circle center={{ latitude : 6.52243919590852 , longitude : 3.311828582821019 }} radius={3500} strokeColor={'red'}/>
    </MapView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});