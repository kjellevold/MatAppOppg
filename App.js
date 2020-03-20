import React, { useState } from 'react'
import { View, Text, Button, TextInut, StyleSheet, TouchableOpacity } from 'react-native'
import { setProvidesAudioData } from 'expo/build/AR'
import Shop from './screens/Shop.js'
import Fridge from './screens/Fridge.js'
import Freezer from './screens/Freezer.js'

const content = [ <Shop />, <Fridge />, <Freezer />]

const App = () => {

  const [pos, setPos] = useState(0)

  return(
    <View style={css.container}>
      <View style={[css.header, css.centered]}>
        <Text style={css.whiteTxt}>Header</Text>
        
      </View>


      <View style={css.display}>
        <Text> { content[pos]} </Text>
        {/* <View style={css.shop} onPress={ () => setProvidesAudioData(0) } title="side1" >
          <Text>Shop</Text>
        </View>
        <View style={css.refrigerator}>
          <Text>Refrigerator</Text>
        </View>
        <View style={css.frozen}>
          <Text>Freezer</Text>
        </View>
        <View style={css.dry}>
          <Text>Dry goods</Text>
        </View> */}
      </View>

      <View style={[css.footer, css.centered]}>
        <Button onPress={ () => setPos(0) } title="Shop"><View style={css.button}></View></Button>
        <Button onPress={ () => setPos(1) } title="Fridge"><View style={css.button}></View></Button>
        <Button onPress={ () => setPos(2) } title="Freezer"><View style={css.button}></View></Button>
      </View>

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
    backgroundColor: '#546E7A',
    
  },
  display: {
    flex: 9,
    flexDirection: 'column',
    alignItems: 'center'
  },
  shop: {
    width: '90%',
    height: '20%',
    justifyContent: 'center',
    backgroundColor: '#CCD1D1',
    marginTop: 15,
    marginLeft: 10,
    marginRight: 10,
    alignItems: 'center',
    borderRadius: 8,
    borderColor:'#CCD1D1',
    borderWidth: 1,
    padding: 5
  },
  refrigerator: {
    width: '90%',
    height: '20%',
    justifyContent: 'center',
    backgroundColor: '#CCD1D1',
    marginTop: 15,
    marginLeft: 10,
    marginRight: 10,
    alignItems: 'center',
    borderRadius: 8,
    borderColor:'#CCD1D1',
    borderWidth: 1,
    padding: 5
  },
  frozen: {
    width: '90%',
    height: '20%',
    justifyContent: 'center',
    backgroundColor: '#CCD1D1',
    marginTop: 15,
    marginLeft: 10,
    marginRight: 10,
    alignItems: 'center',
    borderRadius: 8,
    borderColor:'#CCD1D1',
    borderWidth: 1,
    padding: 5
  },
  dry: {
    width: '90%',
    height: '20%',
    justifyContent: 'center',
    backgroundColor: '#CCD1D1',
    marginTop: 15,
    marginLeft: 10,
    marginRight: 10,
    alignItems: 'center',
    borderRadius: 8,
    borderColor:'#CCD1D1',
    borderWidth: 1,
    padding: 5
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

