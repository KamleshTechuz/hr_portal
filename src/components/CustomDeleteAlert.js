import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button, Dialog, Paragraph, Portal } from 'react-native-paper'

const CustomDeleteAlert = ({hideDialog, visible, onYes, onNo}) => {
  return (
    <Portal>
        <Dialog style={{backgroundColor: 'white', borderRadius: 5}} visible={visible} onDismiss={hideDialog}>
            <Dialog.Title>Alert</Dialog.Title>
            <Dialog.Content>
            <Paragraph>Are you sure about to delete this skill?</Paragraph>
            </Dialog.Content>
            <Dialog.Actions>
            <Button style={{borderRadius: 5}} labelStyle={{color: 'black'}} mode="outlined" onPress={hideDialog}>No, Cancel</Button>
            <Button style={{borderRadius: 5, borderColor: 'black'}} labelStyle={{color: 'white'}} buttonColor="black" mode="outlined" onPress={hideDialog}>Yes, Delete</Button>
            </Dialog.Actions>
        </Dialog>
    </Portal>
  )
}

export default CustomDeleteAlert

const styles = StyleSheet.create({})