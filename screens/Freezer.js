import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native'

import ItemFreezer from '../components/ItemFreezer'
import InputFreezer from '../components/InputFreezer'
import { ScrollView } from 'react-native-gesture-handler'

const Freezer = () => {
    const [items, setItems] = useState(['fishsticks', 'smoothie', 'vom', 'salmon'])
    const [item, setItem] = useState("")
    const addItem = item => {
        setItems([...items, item])
    }
    const removeItem = id => {setItems( items.filter((element, index) => index != id))}

    return(
        <View style={css.container}>
            
            <View style={css.input}>
                <InputFreezer value={item} add={addItem} />
            </View>

            <View style={css.itemContainer}>
                <ScrollView >
                    <View style={css.items}>
                    {
                        items.map( (element, index) => 
                            <ItemFreezer style={css.item} removeItem={removeItem} key={index} id={index} element={element} />
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


export default Freezer