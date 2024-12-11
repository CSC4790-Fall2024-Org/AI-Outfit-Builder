import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { collection, getDocs } from 'firebase/firestore';
import { db } from './configuration';

interface Outfit {
    id: string;
    name: string;
    images: string[];
  }

const Outfits = ({}) => {
    const [outfits, setOutfits] = useState<Outfit[]>([]);
    const [refreshing, setRefreshing] = useState(false);

   // Fetch saved outfits from Firestore
   const fetchOutfits = async () => {
    try {
      const outfitsRef = collection(db, 'outfits');
      const snapshot = await getDocs(outfitsRef);
      const outfitList: Outfit[] = snapshot.docs.map(doc => ({
        id: doc.id,
        name: doc.data().name, 
        images: doc.data().images, 
      }));
      setOutfits(outfitList); 
    } catch (error) {
      console.error('Error fetching outfits:', error);
    }
  };

  useEffect(() => {
    fetchOutfits();
  }, []);

  const refreshOutfits = async () => {
    setRefreshing(true);
    try {
      await fetchOutfits();
    } catch (error) {
      console.error('Error fetching outfits:', error);
    } finally {
      setRefreshing(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Saved Outfits</Text>
      <FlatList
        data={outfits}
        keyExtractor={(item) => item.id}
        refreshing={refreshing}
        onRefresh={refreshOutfits}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.outfitContainer} onPress={() => console.log(item)}>
            <Text style={styles.outfitName}>{item.name}</Text>
            <FlatList
              data={item.images}
              horizontal
              renderItem={({ item: imageUri }) => (
                <Image source={{ uri: imageUri }} style={styles.image} />
              )}
              keyExtractor={(image, index) => index.toString()}
            />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#cceeff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 50,
  },
  outfitContainer: {
    marginBottom: 15,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  outfitName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
    margin: 5,
    resizeMode: 'cover',
  },
});

export default Outfits;
