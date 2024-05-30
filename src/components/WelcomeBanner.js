import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const WelcomeBanner = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.textsm}>Hi Mi. Michael.</Text>
            <Text style={styles.text}>Welcome Back!</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    textsm: {
        fontSize: 14,
        color: 'gray',
    },
    text: {
        marginTop: 5,
        fontSize: 20,
    }
});

export default WelcomeBanner;
