import React, {useState} from 'react'
import { Button, TextInput, View, StyleSheet } from 'react-native'

const Input = props => {
    const [value, setValue] = useState('')
    const addItem = () => {
        props.addItem(value)
        setValue('')
    }
    return(
        <View>
            <TextInput autoCapitalize={false} autoCorrect={false} multiline={true} style={css.input} placeholder="gimme items man" value={value} onChangeText={txt => setValue(txt)} />
            <Button title='add item' onPress={addItem} />
        </View>
    )
}

const css = StyleSheet.create({
    input: {
        height: 50,
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