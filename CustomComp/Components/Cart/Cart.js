import { View, Text , TouchableOpacity, StyleSheet, SafeAreaView} from 'react-native'
import React from 'react'

const Cart = (props) => {
  return (
    <SafeAreaView style={styles.container}>
    <View style={styles.cart_cont}>
        <View style={styles.cart_body}> 
          <Text style={styles.cart_title}>{props.title}</Text>
          <Text style={styles.cart_text}>{props.text}</Text>
        </View>
        <TouchableOpacity style={styles.btn_container}>
            <Text style={styles.btn_title}>I liked</Text>
         </TouchableOpacity>
    </View>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    cart_cont:{
        backgroundColor:'#C4DDFF',
        margin:10, 
        borderWidth:1,
        borderColor:'#001D6E',
        borderRadius:10,
        
    },
    cart_body:{
        padding:10,
        margin:18
    },
    cart_title:{
        fontSize:28,
        fontWeight:'600',
        margin:9,
        marginBottom:3
    },
    cart_text:{
        fontSize:18,
        margin:9,
        marginTop:3
    },
    btn_container:{
        backgroundColor:'#7FB5FF',
        padding:20,
        alignItems:'center',
        borderBottomLeftRadius:10,
        borderBottomRightRadius:10
        
    },
    btn_title:{
        fontWeight:'500',
        fontSize:18,
        color:'#001D6E'
    }
})

export default Cart