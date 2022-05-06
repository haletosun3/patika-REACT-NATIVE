import { StyleSheet, Text, View ,Image} from 'react-native'
import React from 'react'

const SongCard = (props) => {
  return (
    <View style={styles.container}>
        <Image style={styles.img} source={{uri:props.song.imageUrl}}/>
      <View style={styles.inner_Cont}>
        <Text style={styles.title}>{props.song.title}</Text>
        <View style={styles.contentCont}>
        <View style={styles.info_cont}>
            <Text>{props.song.artist}</Text>
            <Text style={styles.year}>{props.song.year}</Text>
        </View>
       { 
       props.song.isSoldOut && ( 
       <View style={styles.sold_out}>
        <Text style={styles.sold_outTitle}>Tükendi</Text>
        </View>
        )}
       </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:10,
        flexDirection:'row'
    },
    img:{
        width:100,
        height:100,
        borderRadius:50
    },
    inner_Cont:{
        flex:1,
        padding:10,
        justifyContent:'center'
    },
    title:{
        fontWeight:'600',
        fontSize:20
    },
    contentCont:{
       flexDirection:'row',
 
    },
    info_cont:{
        flex:1,
        flexDirection:'row',
     
    },
    year:{
        fontSize:11,
        marginLeft:15,
        color:'gray',
        fontWeight:'600'
    },
    sold_out:{
        borderWidth:1,
        borderColor:'red',
        padding:4,
        borderRadius:6,
       
    },
    sold_outTitle:{
        color:'red',
        fontSize:12
    }
})
export default SongCard