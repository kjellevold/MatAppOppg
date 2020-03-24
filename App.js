import React, { useState } from 'react'
import { View, Text, Button, TextInut, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import Home from './screens/Home.js'
import Shop from './screens/Shop.js'
import Fridge from './screens/Fridge.js'
import Freezer from './screens/Freezer.js'

const content = [ <Home key='0' />, <Shop key='1' />, <Fridge key='2' />, <Freezer key='3' /> ]

const App = () => { 

  const [pos, setPos] = useState(1)

  return(
    <View style={css.container}>

      <View style={css.header}>
        <Text style={[css.whiteTxt, css.centered]}>Header</Text>
        <View style={css.home} title="Home">
            <Button onPress={ () => setPos(0) } title="<" />
          </View>
      </View>

    
      <View style={css.display}>
          {content[pos]}
      </View>


      <View style={[css.footer, css.centered]}></View>
    </View>
  )
}

const css = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%'
  },
  centered: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  whiteTxt: {
    color: 'white'
  },
  header: {
    flex: 2,
    backgroundColor: '#EDBB99',
  },
  home: {
    position: 'absolute',
    top: 70,
    left: 20,
    alignItems: 'flex-start',
    paddingTop: 30,
    width: '10%',
    height: '30%',
    borderRadius: 10,
    borderColor:'#e6ebeb',
    borderWidth: 1,
    shadowColor: '#CCD1D1',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    shadowOpacity: 7,
    elevation: 8,
    backgroundColor: 'white',
    borderRadius: 8
  },
  display: {
    flex: 9,
    flexDirection: 'column',
    alignItems: 'center'
  },
  footer: {
    flex: 1,
    backgroundColor: '#546E7A',
    flexDirection: 'row'
  },
  button: {
    backgroundColor:'white',
  }
})

export default App

