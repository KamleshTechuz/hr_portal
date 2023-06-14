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
            //   style={{backgroundColor: 'rgba(0,0,55,0.08)'}}
              style={styles.search}
          />
      </View>
  )
}

export default CustomSearchBar;

const styles = StyleSheet.create({
    search: {
        backgroundColor: 'white', borderRadius: 5
    }
});