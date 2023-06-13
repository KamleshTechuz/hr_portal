import { StyleSheet, Text, View } from "react-native";
import React from "react";

import { Button, DataTable, IconButton } from "react-native-paper";

const CustomTableRows = ({ data }) => {
  return (
    <>
      {
        data.map((row, i) => (
            <DataTable.Row key={i} onPress={() => {console.log('pressed a row')}} onLongPress={() => {console.log('long pressed')}}>
                {
                    Object.entries(row).map(([key, value]) => <DataTable.Cell key={key}>{value}</DataTable.Cell>)
                }
                {/* <DataTable.Cell>Kamlesh</DataTable.Cell> */}
                <View style={{flex:1, justifyContent:'center', flexDirection:'row', flexWrap: 'wrap'}}>
                    <IconButton icon="circle-edit-outline" iconColor={'black'} size={20} onPress={() => console.log('Pressed')}/>
                    <IconButton icon="delete" iconColor={'black'} size={20} onPress={() => console.log('Pressed')}/>
                </View>
            </DataTable.Row>
        ))
      }
    </>
  );
};

export default CustomTableRows;

const styles = StyleSheet.create({});
