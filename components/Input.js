import React, {useState} from 'react'
import { Button, TextInput, View, StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

const Input = props => {
    const [value, setValue] = useState('')
    const addItem = () => {
        console.log('adding item ', value)
        props.addItem(value)
        setValue('')
    }
    return(
        <View>
            <TextInput style={css.input} placeholder="Add a item..." value={value} onChangeText={txt => setValue(txt)} />
            <Button title='add item' onPress={addItem} />
        </View>
    )
}

const css = StyleSheet.create({
    input: {
        height: 100,
        minWidth: '100%',
        borderColor: 'white',
        borderBottomWidth: 1,
        marginBottom: 6,
        paddingTop: '3%',
        padding: '3%',
        textAlign:'center'
    },
})

export default Input