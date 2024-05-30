import React from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Header = () => {
    const avatarUrl = require('../../products/icons/avatar.jpg');
    return (
        <View style={styles.header}>
            <TouchableOpacity>
                <Text style={styles.menuText}>☰</Text>
            </TouchableOpacity>
            <View style={styles.avatarContainer}>
                <Image source={avatarUrl} style={styles.avatar} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20,
    },
    menuText: {
        fontSize: 36,
    },
    avatarContainer: {
        width: 36,
        height: 36,
        borderRadius: '50%',
        overflow: 'hidden',
    },
    avatar: {
        width: 36,
        height: 36,
        resizeMode: 'cover',
        borderRadius: '50%'
    }
});

export default Header;
