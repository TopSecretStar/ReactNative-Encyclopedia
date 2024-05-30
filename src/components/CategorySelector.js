import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Image } from 'react-native';

const categories = [
    { id: 1, name: 'All' },
    { id: 2, name: 'Beer', image: require('../../products/icons/Beer.png') },
    { id: 3, name: 'Wine', image: require('../../products/icons/Wine-glass.png') },
  ];

const CategorySelector = ({ selectedCategory, setSelectedCategory }) => {
    const [selectedId,setSelectedId] = useState(1);

    return (
        <View style={styles.container}>
            {categories.map((category) => (
                <TouchableOpacity
                key={category.id}
                style={[
                  styles.categoryItem,
                  selectedId === category.id && styles.selectedCategoryItem,
                ]}
                onPress={() => {setSelectedId(category.id); setSelectedCategory(category.name)}}
              >
                {category.image && <Image source={category.image} style={styles.categoryImage} />}
                <Text style={styles.categoryText}>{category.name}</Text>
              </TouchableOpacity>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 20,
      gap: 10,
    },
    categoryItem: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: 8,
      paddingHorizontal: 10,
      width: 'auto',
      justifyContent: 'center',
      borderRadius: 10,
      borderWidth: 1,
      borderColor: '#ccc',
    },
    selectedCategoryItem: {
      width: '40%',
      backgroundColor: 'yellow',
    },
    categoryImage: {
      width: 20,
      height: 20,
      marginRight: 8,
    },
    categoryText: {
      fontSize: 16,
      fontWeight: 'bold',
    },
  });

export default CategorySelector;
