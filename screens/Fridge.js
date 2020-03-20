import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Fridge = () => {
    return(
        <View style={css.container}>
            <Text>Fridge</Text>
        </View>
    )
}

const css = StyleSheet.create({
    container:{
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default Fridge