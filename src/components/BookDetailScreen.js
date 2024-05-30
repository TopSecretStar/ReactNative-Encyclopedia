import React, {useState, useEffect, useRef} from 'react';
import {View, Text, ActivityIndicator, StyleSheet} from 'react-native';
import {WebView} from 'react-native-webview';

const BookDetail = ({route, navigation}) => {
  const {book, title} = route.params;
  const [finalUrl, setFinalUrl] = useState('');
  const [loading, setLoading] = useState(true);
  const webviewRef = useRef(null);

  console.log(book.title, '------');

  useEffect(() => {
    navigation.setOptions({title});

    const resolveFinalUrl = () => {
      setLoading(true);
      try {
        const initialUrl = book.formats['text/html'];
        const bookId = initialUrl.match(/\/(\d+)\.html/)[1];
        const derivedFinalUrl = `https://www.gutenberg.org/cache/epub/${bookId}/pg${bookId}-images.html`;

        setFinalUrl(derivedFinalUrl);
      } catch (error) {
        console.error('Error resolving URL:', error);
      }
      setLoading(false);
    };

    resolveFinalUrl();
  }, [book, navigation, title]);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {finalUrl ? (
        <WebView
          ref={webviewRef}
          source={{uri: finalUrl}}
          startInLoadingState={true}
          renderLoading={() => (
            <ActivityIndicator size="large" color="#0000ff" />
          )}
        />
      ) : (
        <Text style={styles.errorText}>Failed to load content</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  webview: {
    flex: 1,
    width: '100%',
  },
  errorText: {
    flex: 1,
    textAlign: 'center',
    fontSize: 18,
    color: 'red',
    marginTop: 20,
  },
});

export default BookDetail;
