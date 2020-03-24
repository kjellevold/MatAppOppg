import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

const Item = props => {
    return(
        <TouchableOpacity onPress={() => props.removeItem(props.id)}>
            <View style={styles.item}>
                <Text style={styles.itemText}>{props.element}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    item: {
        height: 60,
        width: '100%',
        marginTop: 8,
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
        fontSize: 18,
    },
})


export default Item