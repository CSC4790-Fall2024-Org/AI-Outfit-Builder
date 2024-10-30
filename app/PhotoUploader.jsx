import React, { useState } from 'react';
import { Button, View, Text, Image, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { ref as databaseRef, update } from "firebase/database";
import { ref as storageRef, uploadBytes, getDownloadURL } from "firebase/storage";
import { database, storage } from './configuration';  // Import the initialized Firebase services

const PhotoUploader = () => {
  const [photoUri, setPhotoUri] = useState(null);
  const [photoUrl, setPhotoUrl] = useState(null);

  // Function to pick an image from the gallery
  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.cancelled) {
      setPhotoUri(result.uri);
    }
  };

  // Function to upload a photo to Firebase Storage
  const uploadPhoto = async (photoUri, itemId) => {
    const photoRef = storageRef(storage, `photos/${itemId}`);
    const response = await fetch(photoUri);
    const blob = await response.blob();

    await uploadBytes(photoRef, blob);
    const url = await getDownloadURL(photoRef);
    return url;
  };

  // Function to save the photo URL to Firebase Realtime Database
  const savePhotoUrlToDatabase = async (itemId, photoUri) => {
    try {
      const photoUrl = await uploadPhoto(photoUri, itemId);
      const dbRef = databaseRef(database, '/');  // Root path, or adjust as needed

      await update(dbRef, {
        [`${itemId}_photoUrl`]: photoUrl,
      });

      setPhotoUrl(photoUrl);
      Alert.alert("Success", "Photo URL saved successfully!");
    } catch (error) {
      Alert.alert("Error", "Error saving photo URL: " + error.message);
    }
  };

  // Function triggered by button to handle the upload and database update
  const handleUpload = () => {
    const itemId = "item1";  // Replace with a dynamic ID if needed
    if (photoUri) {
      savePhotoUrlToDatabase(itemId, photoUri);
    } else {
      Alert.alert("Error", "Please select a photo first");
    }
  };

  return (
    <View style={{ alignItems: 'center', marginTop: 50 }}>
      <Button title="Pick an Image" onPress={pickImage} />
      
      {photoUri && (
        <Image source={{ uri: photoUri }} style={{ width: 200, height: 200, marginVertical: 20 }} />
      )}
      
      <Button title="Upload and Save Photo URL" onPress={handleUpload} />

      {photoUrl && (
        <View style={{ marginTop: 20 }}>
          <Text>Photo URL:</Text>
          <Text selectable>{photoUrl}</Text>
        </View>
      )}
    </View>
  );
};

export default PhotoUploader;
