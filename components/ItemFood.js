import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

const ItemFood = props => {
    return(
        <View style={css.container}>
            <TouchableOpacity onPress={() => props.removeItem(props.id)}>
                <View>
                    <Text style={css.itemText} >{props.element}</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const css = StyleSheet.create({
    container: {
        width: 120,
       backgroundColor: 'orange',
       margin: 12,
       padding: 12,
    },
    itemText: {
        color: '#546E7A',
        fontSize: 20,
        
    },
})

export default ItemFood