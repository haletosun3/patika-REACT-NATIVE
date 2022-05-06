import { StyleSheet, Text, View , ScrollView, FlatList, SafeAreaView} from 'react-native'
import React from 'react'
import news_data from './Data/news_data.json'
import NewsCard from './NewsCard'

 //using flatlist
const News = () => {
  return (
      <SafeAreaView style={styles.container}>
       <View>
        <FlatList
         keyExtractor={(item,index) => item.u_id.toString()}
         data={news_data}
         renderItem={ ({item}) => <NewsCard news={item} /> }/>
    </View>
      </SafeAreaView>
  )
}
const styles=StyleSheet.create({
    container:{ 
      backgroundColor:'white',
      flex:1
    },
  })
export default News

