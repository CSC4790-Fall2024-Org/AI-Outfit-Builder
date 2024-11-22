import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Smart Stylist!</Text>
      <Text style={styles.subtitle}>Your virtual closet at your fingertips.</Text>
      <Image source={require('../assets/smartStylistLogo.jpg')} style={styles.image} />
      <Text style={styles.instructions}>
        Plan Outfits, Save Time, Dress Your Best!{'\n'}
        Welcome to SmartStylist, your virtual fashion assistant.{'\n\n'}
        • Step 1: Snap pictures of your clothes and upload them to your virtual closet.{'\n'}
        • Step 2: Add a fun description to each item: “My lucky interview blazer" or a more simple description: “Green Sweater"{'\n'}
        • Step 3: Mix, match, and save outfits for any occasion—no more morning outfit panic!{'\n\n'}
        Start creating your dream wardrobe now!
</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#cceeff", 
    padding: 20,
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#333", 
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: "#555",
    marginBottom: 30,
  },
  instructions: {
    fontSize: 18,
    color: "#666",
    textAlign: "center",
    paddingHorizontal: 20,
    marginTop: 10,
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


