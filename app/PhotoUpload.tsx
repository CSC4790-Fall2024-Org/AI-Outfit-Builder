  import React, { useState } from 'react';
  import { StyleSheet, Text, View, Image, Pressable, TextInput } from 'react-native';
  import * as ImagePicker from 'expo-image-picker';
  import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
  import { initializeApp } from 'firebase/app';
  import { firebaseConfig } from './configuration';
  
  const app = initializeApp(firebaseConfig);
  const storage = getStorage(app);
  
  export default function PhotoUpload() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [uploading, setUploading] = useState<boolean>(false);
    const [description, setDescription] = useState<string>('');
  
      const pickImage = async () => {
          const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
  
          if (permissionResult.granted === false) {
              alert("Permission to access camera roll is required!");
              return;
          }
  
          const result = await ImagePicker.launchImageLibraryAsync({
              mediaTypes: ImagePicker.MediaTypeOptions.Images,
              allowsEditing: true,
              aspect: [4, 3],
              quality: 1,
          });
  
          if (!result.canceled && result.assets && result.assets.length > 0) {
            const imageUri = result.assets[0].uri;
            setSelectedImage(imageUri);
        } else {
            alert("No image selected or action canceled.");
        }
      };
  
      const uploadImageToFirebase = async (uri: string) => {
        try {
            setUploading(true);
  
            const response = await fetch(uri);
            const blob = await response.blob();
  
            const filename = uri.split('/').pop() || `image-${Date.now()}`;
            const storageRef = ref(storage, `clothing/${filename}`);
  
            // Add description to upload metadata (optional)
            const metadata = {
                customMetadata: {
                    description: description,
                },
            };
  
            await uploadBytes(storageRef, blob, metadata);
  
            const downloadURL = await getDownloadURL(storageRef);
            console.log("File available at:", downloadURL);
            alert('Image uploaded successfully!');
        } catch (error) {
            console.error("Error uploading image:", error);
            alert('Failed to upload image.');
        } finally {
            setUploading(false);
        }
    };
  
    return (
        <View style={styles.container}>
            <Text style={styles.title}>This is your virtual closet!</Text>
            <Text style={styles.subtitle}>Upload photos of your clothing and categorize them based on your own personal preference!</Text>
            <TextInput
                style={styles.descriptionInput}
                placeholder="Enter a description of your clothing item"
                onChangeText={setDescription}
                value={description}
            />
            <Pressable style={styles.button} onPress={pickImage} disabled={uploading}>
                <Text style={styles.buttonText}>{uploading ? 'Uploading...' : 'Upload Photo'}</Text>
            </Pressable>
            {selectedImage && <Image source={{ uri: selectedImage }} style={styles.image} />}
        </View>
    );
  }
  
  const styles = StyleSheet.create({
      container: {
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#f0f8ff", 
          padding: 20,
      },
      image: {
          width: 200,
          height: 200,
          marginTop: 20,
          borderRadius: 10,
      },
      title: {
          fontSize: 28,
          fontWeight: "bold",
          color: "#333",
          marginBottom: 10,
      },
      subtitle: {
          fontSize: 16,
          color: "#555", 
          marginBottom: 30,
      },
      button: {
          backgroundColor: "#0047AB", 
          paddingVertical: 10,
          paddingHorizontal: 20,
          borderRadius: 25,
      },
      buttonText: {
          color: "#fff",
          fontSize: 16,
          fontWeight: "600",
      },
      descriptionInput: {
        borderWidth: 1,
        borderColor: 'gray',
        padding: 10,
        marginBottom: 10,
    },

  });
  
