import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

const Item = props => {
    console.log(props.element)
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
        backgroundColor: '#53A9DF',
        marginTop: 8,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    itemText: {
        color: 'white',
        fontSize: 16,
    },
})


export default Item