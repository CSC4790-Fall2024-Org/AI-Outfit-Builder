import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, StyleSheet, RefreshControl } from 'react-native';
import { getStorage, ref, listAll, getDownloadURL } from 'firebase/storage';
import { storage } from './configuration';  

const Wardrobe = () => {
  const [imageUrls, setImageUrls] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [refreshing, setRefreshing] = useState<boolean>(false);

  const fetchImages = async () => {
    setLoading(true);
    try {
      const storageRef = ref(storage, 'clothing/'); 
      const result = await listAll(storageRef);
      
      const urls = await Promise.all(
        result.items.map(itemRef => getDownloadURL(itemRef))
      );

      setImageUrls(urls);
    } catch (error) {
      console.error('Error fetching images:', error);
    } finally {
      setLoading(false);
    }
  };

 
  const handleRefresh = async () => {
    setRefreshing(true);
    await fetchImages();  
    setRefreshing(false);
  };

  
  useEffect(() => {
    fetchImages();
  }, []);

  return (
    <View style={styles.container}>
      {loading ? (
        <Text>Loading images...</Text>
      ) : (
        <FlatList
          data={imageUrls}
          keyExtractor={(url, index) => index.toString()}
          renderItem={({ item }) => (
            <Image source={{ uri: item }} style={styles.image} />
          )}
          
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
          }
          numColumns={2}  
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#cceeff',
  },
  image: {
    width: '48%',  
    height: 200,
    marginBottom: 10,
    marginHorizontal: 5,  
    borderRadius: 10,
  },
});

export default Wardrobe;

