import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'

import ItemFood from '../components/ItemFood'
import InputFood from '../components/InputFood'
import { ScrollView } from 'react-native-gesture-handler'

const Fridge = () => {
    const [items, setItems] = useState(['tomato', 'banana', 'dogfood', 'ketchup', 'ham', 'milk'])
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

            <View style={css.itemContainer}>
                <ScrollView >
                    <View style={css.items}>
                    {
                        items.map( (element, index) => 
                            <ItemFood style={css.item} removeItem={removeItem} key={index} id={index} element={element} />
                        )
                    }
                    </View>
                </ScrollView>
            </View>

        </View>
    )
}

const css = StyleSheet.create({
    container: {
        maxWidth: '100%',
    },
    input: {
        marginTop: 3,
        flex: 2,
        backgroundColor: '#ffe8d9',
    },
    itemContainer: {
        flex: 9
    },
    items: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding: 20,
        justifyContent: 'space-between',
    },
    item: {
        width: 100,
        backgroundColor: 'orange',

    }

})

export default Fridge