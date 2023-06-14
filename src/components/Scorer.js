import { StyleSheet, Text, View, useWindowDimensions } from 'react-native'
import React from 'react'
import { Caption, Card, IconButton, Title } from 'react-native-paper'

const Scorer = () => {
    const { width } = useWindowDimensions();
  return (
    <Card style={{backgroundColor: 'white', height: 100, width: width / 2.3, margin: 10}}>
        <Card.Content style={{justifyContent:'space-between', flexDirection:'row'}}>
            <IconButton style={{margin: 0}} icon="circle-edit-outline" iconColor={'black'} size={40} />
            <View style={{padding: 0}}>
                <View style={{ width: '90%'}}>
                  <Text style={{ flexWrap: 'wrap'}}>Total number of Openings</Text>
                </View>
              <Text style={{margin: 5, fontSize: 24, fontWeight: 'bold'}}>12</Text>
            </View>
        </Card.Content>
    </Card>
  )
}

export default Scorer

const styles = StyleSheet.create({})