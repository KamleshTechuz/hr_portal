import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button, Modal, Portal, TextInput } from 'react-native-paper'

const CustomAddModal = ({title, visible, onDismiss, value, onChangeText, onSave, update = false}) => {
  return (
    <Portal>
        <Modal visible={visible} onDismiss={onDismiss} contentContainerStyle={styles.containerStyle}>
            <Text>{update ? `Edit ${title.toLowerCase()} name here to update...` : `Type ${title.toLowerCase()} name here to add...`} </Text>
            <TextInput style={styles.inputText} mode='outlined' label={`${title} Name`} value={value} onChangeText={onChangeText}
                underlineColor='transparent' activeOutlineColor={styles.inputTextActive.color}
            />
            <View style={{gap: 15}}>
                <Button rippleColor={styles.btnRipple.color} onPress={onSave} style={styles.saveBtn} labelStyle={styles.saveBtnLabel} buttonColor="black" mode="outlined" >{update ? 'Update' : 'Save'}</Button>
                <Button rippleColor={styles.btnRipple.color} onPress={onDismiss} style={styles.cancleBtn} labelStyle={styles.cancleBtnLabel} mode="outlined" >Cancel</Button>
            </View>
        </Modal>
    </Portal>
  )
}

export default CustomAddModal

const styles = StyleSheet.create({
    containerStyle: {
        backgroundColor: 'white', padding: 20, width: 400, alignSelf:"center", borderRadius: 5
    },
    inputText: {
        marginVertical: 30, backgroundColor: 'white'
    },
    inputTextActive: {
        color: 'black'
    },
    saveBtn: {
        borderRadius: 5, borderColor: 'black'
    },
    saveBtnLabel: {
        color: 'white'
    },
    cancleBtn: {
        borderRadius: 5
    },
    cancleBtnLabel: {
        color: 'black'
    }, 
    btnRipple: {
        color: 'gray'
    }
})