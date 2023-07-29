import { StyleSheet, Text, View,} from 'react-native'
import React, { useState } from 'react'

export default function Notifications() {
  const [isNotify, setIsNotify]= useState(false)
  return (
    <View>
      <Text style={{textAlign: 'center'}}>
          {isNotify ? null : 'no notifications here'}
        </Text>
    </View>
  )
}

const styles = StyleSheet.create({})