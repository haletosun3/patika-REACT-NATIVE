import { View, TextInput , StyleSheet} from 'react-native'
import React from 'react'

const SearchBar = (props) => {

  return (
    <View style={styles.container}>
      <TextInput placeholder='Search..' onChangeText={props.onSearch} />
    </View>
  )
}
const styles = StyleSheet.create({
container:{
    backgroundColor:'#f5f5f5',
    padding:8,
    margin:5,
    borderRadius:5
}
})
export default SearchBar