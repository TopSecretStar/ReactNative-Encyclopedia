import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const ProductCard = ({ navigation, product }) => {
    let imageUrl;

    switch (product.image) {
        case "/products/miller-lite.png":
            imageUrl = require('../../products/miller-lite.png');
            break;
        case "/products/corona.jpg":
            imageUrl = require('../../products/corona.jpg');
            break;
        case "/products/lagunitas.jpg":
            imageUrl = require('../../products/lagunitas.jpg');
            break;
        default:
            imageUrl = require('../../products/modelo-especial.jpeg');
    }


    return (
        <TouchableOpacity onPress={() => navigation.navigate('ProductDetail', { product: product })} style={styles.card}>
            <Image source={imageUrl} style={styles.image} />
            <Text>{product.brand}</Text>
            <Text>${product.price}</Text>
            <View style={styles.button}>
                <Text>+</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    card: {
        flex: 1,
        margin: 5,
        padding: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        alignItems: 'center',
    },
    image: {
        width: 100,
        height: 100,
        resizeMode: 'contain'
    },
    button: {
        position: 'absolute',
        bottom: 10,
        right: 10,
        padding: 10,
    }
});

export default ProductCard;