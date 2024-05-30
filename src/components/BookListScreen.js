import React, {useState, useEffect} from 'react';
import {
  Text,
  StyleSheet,
  TextInput,
  View,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
  Image,
} from 'react-native';

const BookListScreen = ({navigation}) => {
  const [books, setBooks] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    setBooks([]);
    setPage(1);
    setHasMore(true);
    fetchBooks();
  }, [searchQuery]);

  const fetchBooks = async () => {
    if (loading || !hasMore) {
      return;
    }
    setLoading(true);
    const response = await fetch(
      `https://gutendex.com/books/?search=${searchQuery}&page=${page}`,
    );
    const data = await response.json();
    setBooks(prevBooks => [...prevBooks, ...data.results]);
    setPage(prevPage => prevPage + 1);
    setHasMore(data.next !== null);
    setLoading(false);
  };

  const renderItem = ({item}) => (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('BookDetail', {book: item, title: item.title})
      }>
      <View style={styles.bookItem}>
        <Image
          source={{uri: item.formats['image/jpeg']}}
          style={styles.bookImage}
        />
        <View style={styles.bookInfo}>
          <Text style={styles.bookTitle}>{item.title}</Text>
          <Text style={styles.bookAuthor}>
            {item.authors.map(author => author.name).join(', ')}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  const renderFooter = () => {
    return loading ? <ActivityIndicator size="large" color="#0000ff" /> : null;
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchBar}
        placeholder="Search"
        value={searchQuery}
        onChangeText={text => {
          setSearchQuery(text);
          setBooks([]);
          setPage(1);
          setHasMore(true);
        }}
      />
      <FlatList
        data={books}
        renderItem={renderItem}
        keyExtractor={(item, index) => `${item.id}-${index}`}
        contentContainerStyle={styles.listContent}
        onEndReached={fetchBooks}
        onEndReachedThreshold={0.5}
        ListFooterComponent={renderFooter}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  searchBar: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  listContent: {
    paddingBottom: 20,
  },
  bookItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  bookImage: {
    width: 50,
    height: 75,
    marginRight: 10,
  },
  bookInfo: {
    flex: 1,
  },
  bookTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  bookAuthor: {
    fontSize: 16,
    color: '#555',
  },
  storeButton: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
  },
  storeButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default BookListScreen;
