import React, { useState } from 'react';
import {  TouchableOpacity, View, Text, StyleSheet } from 'react-native';

const CounterPortion = () => {
    const[counter, setCounter] = useState(0);

    return (

      <View style={styles.totalDis}>
        <Text style={styles.counterDis}>{counter}</Text>

        <View style={styles.buttonsView}>
            <TouchableOpacity
                style={styles.buttonStyle}
                onPress={ () => {
                    setCounter(counter + 10);
                }}>
                <Text style={styles.textButton}>+10</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.buttonStyle}
                onPress={ () => {
                    setCounter(counter-10);
                }}>
                <Text style={styles.textButton}>-10</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.buttonStyle}
                onPress={ () => {
                    setCounter(counter - counter);
                }}>
                <Text style={styles.textButton}>Reset</Text>
            </TouchableOpacity>
        </View>

      </View>
    );
}

const styles = StyleSheet.create({
    totalDis: {
        marginVertical: 200,
        //borderColor: "red",
        //borderWidth: 20,
        padding: 40,
        alignSelf: "center"
    },
    counterDis: {
        fontSize: 100,
        //justifyContent: "center",
        textAlign: "center",
        marginBottom: 40
    },
    buttonsView: {
        alignSelf: "center"
    },
    buttonStyle: {
        width: 90,
        height: 40,
        backgroundColor: "black",
        alignItems: "center",
        marginBottom: 25,
        //borderColor: "black",
        //borderWidth: 20,
    },
    textButton: {
        color: "white",
        fontSize: 30,
        fontWeight: 900
    }
})

export default CounterPortion;
