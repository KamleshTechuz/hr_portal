import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Scorer } from '../components'

const Dashboard = () => {
  return (
    <View style={{flex: 1}}>
        <View style={{flex: 0.3}}>
            <View style={{
                flex:1, justifyContent:'space-around', flexDirection:'row',  flexWrap: 'wrap'
            }}>
                {
                    [1, 2, 3, 4].map((e) => <Scorer />)
                }
            </View>
        </View>
      <Text>Dashboard</Text>
    </View>
  )
}

export default Dashboard

const styles = StyleSheet.create({})