import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Make sure this import is correct

const SearchBar = () => {
    return (
        <View style={styles.container}>
            <Icon name="search" size={20} color="#000" style={styles.iconStyle} />
            <TextInput
                style={styles.input}
                placeholder="Search burger, pizza, drink or etc..."
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingVertical: 6,
        paddingHorizontal: 10,
        alignItems: 'center',
        backgroundColor: '#FFF', // Adjust color to fit your theme if necessary
        borderRadius: 10,
    },
    input: {
        flex: 1,
        marginLeft: 10,
        height: 40,
    },
    iconStyle: {
        marginRight: 10, // Ensuring some space between icon and text input
    }
});

export default SearchBar;
