import { StyleSheet, Text, View } from "react-native";
import React from "react";

import { DataTable } from "react-native-paper";

const optionsPerPage = [2, 3, 4];

const CustomTablesHeader = ({data}) => {
  return (
    <DataTable.Header>
        {
            data.slice(0, data?.length - 1).map((e, i) => <DataTable.Title key={i}>{e}</DataTable.Title>)
        }
        <DataTable.Title>Action</DataTable.Title>
    </DataTable.Header>
  );
};

export default CustomTablesHeader;

const styles = StyleSheet.create({});
