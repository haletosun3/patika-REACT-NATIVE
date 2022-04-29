import { StyleSheet, Text, View , Image, Dimensions} from 'react-native'
import React from 'react'

const NewsCard = ({news}) => {
  return (
    
    <View style={styles.container}>
    <Image style={styles.img} source={{uri: news.imageUrl}} />
    <View style={styles.innerContainer}>
    </View>
      <Text style={styles.title}>{news.title}</Text>
      <Text style={styles.desc}>{news.description}</Text>
      <Text style={styles.author}>{news.author}</Text>
    </View>
    
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#F2F2F2',
        margin:15,
        borderRadius:10
    },
    innerContainer:{
        padding:8
    },
    img:{
        height:Dimensions.get('window').height / 4,
        borderTopLeftRadius:5,
        borderTopRightRadius:5
    },
    title:{
        fontFamily:'Times New Roman',
        fontWeight:'bold',
        fontSize:20
    },
    desc:{
        fontFamily:'Times New Roman',
        marginTop:4,
        fontSize:16
    },
    author:{
        fontFamily:'Helvetica',
        textAlign:'right',
        fontWeight:'700'
    }
})

export default NewsCard
