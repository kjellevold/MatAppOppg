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
        height: 60,
        width: 115,
        marginTop: 5,
        marginBottom: 8,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        borderColor:'#e6ebeb',
        borderWidth: 1,
        shadowColor: '#CCD1D1',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 5,
        shadowOpacity: 7,
        elevation: 8,
        backgroundColor: 'white',
        borderRadius: 8
    },
    itemText: {
        color: '#546E7A',
        fontSize: 16,
        
    },
})

export default ItemFood