import React from 'react'
import { View, Text, StyleSheet, Pressable } from 'react-native'


const CustomButton = () => {
  return (
    <Pressable style={styles.container}>
      <Text style={styles.text}>Button</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
    container: {
backgroundColor: "#0078e6",

width:'100%',

padding: 15,
marginVertical: 5,

alignItems:'center',
borderRadius: 5,

    },
    text: {
fontWeight:'bold',
color: 'white',
    },
});
  
export default CustomButton;