import React, { useState } from 'react'
import { View, ScrollView, StyleSheet, Image, TouchableOpacity, Text } from 'react-native'


const Home = (props) => {

    return(
        <View style={[css.container, css.display, css.centered]}>
            <ScrollView>
                <TouchableOpacity onPress = {() => props.setAppPos(1)}>
                    <View style={css.box}>
                        <Image style={css.image} source={require('../assets/shop.png')}  />
                        <Text style={css.txt}>Shop list</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress = {() => props.setAppPos(2)}>
                    <View style={css.box}>
                        <Image style={css.image} source={require('../assets/frigde.png')}  />
                        <Text style={css.txt}>Fridge</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress = {() => props.setAppPos(3)}>
                    <View style={css.box}>
                        <Image style={css.image} source={require('../assets/freezer.png')}  />
                        <Text style={css.txt}>Freezer</Text>
                    </View>
                </TouchableOpacity>
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
        /* flexDirection: 'column', */
        alignItems: 'center'
    },
    txt: {
        width: 120,
        color: '#546E7A',
        fontSize: 20,
        fontWeight: '400',
        paddingLeft: 20
    },
    image: {
        width: 60,
        height: 70,
        paddingRight: 10
    },
    box: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15,
        marginBottom: 1,
        marginLeft: 50,
        marginRight: 50,
        paddingTop: 40,
        paddingBottom: 40,
        paddingLeft: 40,
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
