import React, { useState } from 'react'
import { View, ScrollView, StyleSheet, Button } from 'react-native'

import Shop from './Shop'
import Fridge from './Fridge.js'
import Freezer from './Freezer.js'

const content = [ <Shop key='0' />, <Fridge key='1' />, <Freezer key='2' /> ]

const Home = () => {
    const [pos, setPos] = useState(0)
    return(
        <View style={[css.container, css.display, css.centered]}>
            
      <ScrollView>
          <View style={css.box}>
            <Button onPress={ () => setPos(0) } title="Shop" />
          </View>

          <View style={css.box}>
            <Button onPress={ () => setPos(1) } title="Fridge" />
          </View>

          <View style={css.box}>
            <Button onPress={ () => setPos(2) } title="Freezer" />
          </View>
      </ScrollView>
        </View>
    )
}

const css = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        /* backgroundColor: '#D35400' */
    },
    centered: {
        justifyContent: 'center',
        alignItems: 'center',
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
    box: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 1,
        marginLeft: 50,
        marginRight: 50,
        paddingTop: 60,
        paddingBottom: 60,
        paddingLeft: 100,
        paddingRight: 100,
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
    footer: {
        flex: 1,
        backgroundColor: '#546E7A',
        flexDirection: 'row'
    },
    button: {
        backgroundColor:'white',
    }
})

export default Home
