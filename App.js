import React, { useState } from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
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
        <Text style={[css.whiteTxt, css.headerTxt]}>Food Shopping</Text>
        <TouchableOpacity onPress = {() => setPos(0)}>
              <View style={css.home}>
                  <Image style={css.image} source={require('./assets/homeBtnW.png')} />
              </View>
          </TouchableOpacity>

        {/* <View style={[css.home, css.centered]} title="Home">
            <Button onPress={ () => setPos(0) } title="<" />
          </View> */}
      </View>

      <View style={css.display}>
          {content[2]}
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
    flex: 2.5,
    backgroundColor: '#E0905C',
  },
  image: {
    width: 40,
    height: 43
  },
  headerTxt: {
    width: 140,
    position: 'absolute',
    left: '60%',
    top: 60,
    fontSize: 30,
    fontWeight: '800',
    textAlign: 'right'
  },
  home: {
    position: 'absolute',
    top: 87,
    left: 20,
    alignItems: 'flex-start',
    margin: 0,
    paddingLeft: 0,
    width: 60,
    height: 60,
    /* 
    borderRadius: 10,
    borderColor:'#e6ebeb',
    borderWidth: 1,
    shadowColor: '#CCD1D1',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    shadowOpacity: 7,
    elevation: 8,
    backgroundColor: 'white',
    borderRadius: 8, */
  },
  display: {
    flex: 10,
    /* flexDirection: 'column', */
    alignItems: 'center'
  },
  footer: {
    flex: 1.5,
    backgroundColor: '#546E7A',
    flexDirection: 'row'
  },
  button: {
    backgroundColor:'white',
  }
})

export default App

