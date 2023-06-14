import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { CustomAddModal, CustomSearchBar, CustomTable } from '../components'
import { Divider, Button, Portal, Modal, TextInput, Dialog } from 'react-native-paper'

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { color } from 'react-native-reanimated';

const Skills = () => {

    const [visible, setVisible] = React.useState(false);
    const [text, setText] = React.useState("");
    const [isEdit, setIsEdit] = React.useState(false);


    const showModal = () => setVisible(true);
    const hideModal = () => {
        setVisible(false);
        setText("");
        setIsEdit(false);
    };
    const containerStyle = {backgroundColor: 'white', padding: 20, width: 400, alignSelf:"center", borderRadius: 5 };

  return (
    <View>
        <CustomSearchBar />
        <Divider />
        <View style={{marginHorizontal: 15, marginTop: 10}}>
            <Button style={{borderRadius: 5, borderColor: 'black'}} labelStyle={{color: 'white'}}
                icon='plus' buttonColor="black" rippleColor='gray' mode="outlined" onPress={showModal}>
                 Add New Skill
            </Button>
        </View>
        <CustomTable />

        <CustomAddModal title='Skill' visible={visible} onDismiss={hideModal} value={text} onChangeText={text => setText(text)} onSave={() => {}} update={isEdit} />

    </View>
  )
}

export default Skills

const styles = StyleSheet.create({})