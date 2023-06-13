import React from 'react'
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Button, Searchbar } from 'react-native-paper';

const CustomSearchBar = () => {
  const [searchQuery, setSearchQuery] = React.useState('');
  
  const onChangeSearch = query => setSearchQuery(query);
  
  return (
      <View style={{margin: 12}}>
          <Searchbar
              placeholder="Search"
              onChangeText={onChangeSearch}
              value={searchQuery}
          />
      </View>
  )
}

export default CustomSearchBar;

const styles = StyleSheet.create({});