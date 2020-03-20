import React, { useState } from  'react'
import { View, Text, Button, TextInput, StyleSheet, ScrollView } from 'react-native'
import Item from '../components/Item'
import Input from '../components/Input'

const Shop = () => {
  const [items, setItems] = useState(['feed dog', 'buy food'])
  
  const addItem = item => {
    setItems([...items, item])
  }

  const removeItem = id => {setItems( items.filter((element, index) => index != id))}


  return(
      <View style={css.container}>
          
          <View style={css.input}>
              <Input addItem={addItem} />
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
      header: {
        flex: 2,
        backgroundColor: 'pink',
      },
      headerText: { 
        marginTop: 30,
        color: 'white',
        fontSize: 24,
      },
      input: {
        marginTop: 3,
        flex: 2,
        backgroundColor: '#eee',
      },
      items: {
        margin: '5%',
        flex: 9,
        backgroundColor: 'white',
      },
      footer: {
        flex: 1,
        backgroundColor: 'pink',
      },
      footerText: {
        color: 'white',
      },
})

export default Shop