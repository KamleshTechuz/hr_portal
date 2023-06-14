import { StyleSheet, Text, View, useWindowDimensions } from "react-native";
import React from "react";

import { Button, DataTable, Dialog, Divider, IconButton, Menu, Modal, Paragraph, Portal } from "react-native-paper";
import CustomDeleteAlert from "../CustomDeleteAlert";

const CustomTableRows = ({ data }) => {
    const [visible, setVisible] = React.useState(null); // State to track the visible menu
    const [visibleD, setVisibleD] = React.useState(null); // State to track the visible menu

    const handleLongPress = (index) => {
      setVisible(index);
    };
  
    const handleDismiss = () => {
      setVisible(null);
    };
  
    const handleEdit = () => {
      // Handle edit option here
      handleDismiss();
      showDialog();
    };
  
    const handleDelete = () => {
      // Handle delete option here
      handleDismiss();
      showDialog();
    };

    const showDialog = () => setVisibleD(true);

    const hideDialog = () => setVisibleD(false);

  return (
    <>
    <View
        style={{
          paddingTop: 0,
          flexDirection: 'row',
          justifyContent: 'center',
          backgroundColor: 'white'
        }}>
      </View>
      {
        data.map((row, i) => (
            <DataTable.Row key={i} onPress={() => {console.log('Row pressed')}} onLongPress={() => handleLongPress(i)}>
                {
                    Object.entries(row).map(([key, value]) => <DataTable.Cell key={key}>{value}</DataTable.Cell>)
                }

              <Menu
                contentStyle={{backgroundColor: 'white'}}
                visible={visible === i}
                onDismiss={handleDismiss}
                anchor={<View style={{ width: 1, height: 1 }} />}
              >
                <Menu.Item style={{backgroundColor: 'white'}} onPress={handleEdit} title="Edit" />
                <Menu.Item style={{backgroundColor: 'white'}} onPress={handleDelete} title="Delete" />
              </Menu>
            </DataTable.Row>
        ))
      }
        <CustomDeleteAlert onYes={() => {}} onNo={() => {}} visible={visibleD} hideDialog={hideDialog} />
    </>
  );
};

export default CustomTableRows;

const styles = StyleSheet.create({});
