import React from 'react';
import { View, StyleSheet, FlatList, TouchableOpacity, Text } from 'react-native';
import ProductCard from './ProductCard';

const ProductList = ({ products, navigation }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => <ProductCard product={item} navigation={navigation} />}
        numColumns={2}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  productCard: {
    flex: 1,
    margin: 5,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    alignItems: 'center',
  },
});

export default ProductList;
