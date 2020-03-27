import React, { useState } from 'react'
import { Button, TextInput, View, StyleSheet } from 'react-native'

const InputFood = props => {
    const [value, setValue] = useState('')
    const addItem = () => {
        props.add(value)
        setValue('')
    }

    return(
        <View>
            <TextInput style={css.input} placeholder="in you frigde..." value={value} onChangeText={txt => setValue(txt)} />
            <Button title='add item' onPress={addItem} />
        </View>
    )
}

const css = StyleSheet.create({
    input: {
        height: 50,
        width: '100%',
        borderColor: 'white',
        borderBottomWidth: 1,
        marginBottom: 6,
        paddingTop: '3%',
        padding: '3%',
        textAlign:'center'
    },
})

export default InputFood