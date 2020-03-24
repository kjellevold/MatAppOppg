import React, { useState } from  'react'
import { View, StyleSheet, ScrollView } from 'react-native'
import Item from '../components/Item'
import Input from '../components/Input'

const Shop = () => {

  const [items, setItems] = useState(['pizzastuff', 'pitahaya', 'dogfood', 'orange'])
  
  const [item, setItem] = useState("")

  const addItem = item => {
    setItems([...items, item])
  }

  const removeItem = id => {setItems( items.filter((element, index) => index != id))}

  return(
      <View style={css.container}>
          
          <View style={css.input}>
              <Input value={item} addItem={addItem} />
          </View>
          
          <View style={css.items}>
              <ScrollView>
                  {
                      items.map( (element, index) =>
                          <Item removeItem={removeItem} key={index} id={index} element={element} />
                      )
                  }
              </ScrollView>
          </View>
          
      </View>
  )

}

const css = StyleSheet.create({
    container:{
        height: '100%',
        width: '100%',  
      },
      centered: {
        justifyContent: 'center',
        alignItems: 'center',
      },
      input: {
        marginTop: 3,
        flex: 2,
        backgroundColor: '#ffe8d9',
      },
      items: {
        flexDirection: 'column',
        margin: '5%',
        flex: 9,
      }
})

export default Shop