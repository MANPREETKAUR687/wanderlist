import PlaceCard from "@/components/PlaceCard";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.header}>
          <Text style={styles.title}>Wanderlist</Text>
          <Text style={styles.tagline}>
            Save the places you want to explore
          </Text>
        </View>

        <Image
          source={{
            uri: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
          }}
          style={styles.image}
        />

        <Text style={styles.sectionTitle}>Places to Visit</Text>

        <PlaceCard
          name="Old Montreal"
          category="Historic"
          notes="Explore the old streets, cafés, and beautiful architecture."
        />

        <PlaceCard
          name="Mount Royal"
          category="Nature"
          notes="Walk to the lookout and enjoy the view of Montreal."
        />

        <PlaceCard
          name="Montreal Museum"
          category="Art"
          notes="Visit the exhibitions and discover local artwork."
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f3f4f6",
  },
  content: {
    padding: 20,
    paddingBottom: 40,
  },
  header: {
    backgroundColor: "#2563eb",
    borderRadius: 16,
    padding: 22,
    marginBottom: 18,
  },
  title: {
    color: "#ffffff",
    fontSize: 32,
    fontWeight: "bold",
  },
  tagline: {
    color: "#dbeafe",
    fontSize: 16,
    marginTop: 6,
  },
  image: {
    width: "100%",
    height: 190,
    borderRadius: 16,
    marginBottom: 22,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#1f2937",
    marginBottom: 14,
  },
});