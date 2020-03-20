import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Freezer = () => {
    return(
        <View style={css.container}>
            <Text>Freezer</Text>
        </View>
    )
}

const css = StyleSheet.create({
    container:{
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default Freezer