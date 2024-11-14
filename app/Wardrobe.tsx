import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FlatList, Pressable, Button } from 'react-native';

export default function Wardrobe() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>This is your AI stylist!</Text>
        <Text style={styles.subtitle}>Tell your AI stylist what outfit you are looking for today!</Text>
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
      width: 100,
      height: 100,
      marginBottom: 20,
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
      backgroundColor: "#ff6347", 
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