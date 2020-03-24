import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'

import ItemFood from '../components/ItemFood'
import InputFood from '../components/InputFood'
import { ScrollView } from 'react-native-gesture-handler'

const Fridge = () => {
    const [items, setItems] = useState(['tomato', 'banana', 'ketchup', 'ham', 'milk'])
    const [item, setItem] = useState("")
    const addItem = item => {
        setItems([...items, item])
    }
    const removeItem = id => {setItems( items.filter((element, index) => index != id))}

    return(
        <View style={css.container}>
            
            <View style={css.input}>
                <InputFood value={item} add={addItem} />
            </View>

            <View style={css.items}>
                <ScrollView>
                    {
                        items.map( (element, index) => 
                            <ItemFood removeItem={removeItem} key={index} id={index} element={element} />
                        )
                    }
                </ScrollView>
            </View>



        </View>
    )
}

const css = StyleSheet.create({
    container:{
        /* justifyContent: 'center',
        alignItems: 'center' */
    },
    centered: {
        /* justifyContent: 'center', */
        /* alignItems: 'center', */
    },
    input: {
        marginTop: 3,
        flex: 2,
        backgroundColor: '#ffe8d9',
    },
    items: {
        width: '90%',
        margin: '5%',
        flex: 9,
        flexDirection: 'row'

    }
})

export default Fridge