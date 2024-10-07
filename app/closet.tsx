  import React, { useState } from 'react';
  import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
  import * as ImagePicker from 'expo-image-picker';
  
  export default function Closet() {
      const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
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

          console.log(result);
  
          if (!result.canceled && result.assets && result.assets.length > 0) {
              const imageUri = result.assets[0].uri;
              setSelectedImage(imageUri); 
          } else {
              alert("No image selected or action canceled.");
          }
      };
  
      return (
          <View style={styles.container}>
              <Text style={styles.title}>This is your virtual closet!</Text>
              <Text style={styles.subtitle}>Upload photos of your clothing into your closet and categorize them based on your own personal preference!</Text>
  
              <Pressable style={styles.button} onPress={pickImage}>
                  <Text style={styles.buttonText}>Upload Photo</Text>
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
  });
  
