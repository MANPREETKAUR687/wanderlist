import PlaceCard from "@/components/PlaceCard";
import { useState } from "react";
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import type { Category, Place } from "../lib/types";

export default function HomeScreen() {
  const [name, setName] = useState("");
  const [notes, setNotes] = useState("");
  const [category, setCategory] = useState("");

  const [places, setPlaces] = useState<Place[]>([
    {
      id: "1",
      name: "Old Montreal",
      category: "city",
      notes: "Explore the old streets and beautiful architecture.",
    },
    {
      id: "2",
      name: "Mount Royal",
      category: "nature",
      notes: "Walk to the lookout and enjoy the view.",
    },
  ]);

  const [nameError, setNameError] = useState("");
  const [notesError, setNotesError] = useState("");
  const [categoryError, setCategoryError] = useState("");

  function addPlace() {
    setNameError("");
    setNotesError("");
    setCategoryError("");

    const cleanName = name.trim();
    const cleanNotes = notes.trim();
    const cleanCategory = category.trim().toLowerCase();

    let valid = true;

    if (!cleanName) {
      setNameError("Name is required.");
      valid = false;
    }

    if (notes.length > 200) {
      setNotesError("Notes cannot exceed 200 characters.");
      valid = false;
    }

    const allowedCategories: Category[] = [
      "city",
      "nature",
      "food",
      "other",
    ];

    if (!allowedCategories.some(c => c === cleanCategory)) {
      setCategoryError("Use city, nature, food or other.");
      valid = false;
    }

    if (!valid) return;

    const newPlace: Place = {
      id: Date.now().toString(),
      name: cleanName,
      category: cleanCategory as Category,
      notes: cleanNotes || undefined,
    };

    setPlaces([...places, newPlace]);

    setName("");
    setNotes("");
    setCategory("");
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>Wanderlist</Text>
        <Text style={styles.tagline}>
          Save the places you want to explore
        </Text>

        <Image
          source={{
            uri: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
          }}
          style={styles.image}
        />

        <Text style={styles.heading}>Add a Place</Text>

        <Text style={styles.label}>Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter place name"
          value={name}
          onChangeText={setName}
        />
        {!!nameError && (
          <Text style={styles.error}>{nameError}</Text>
        )}

        <Text style={styles.label}>Notes (optional)</Text>
        <TextInput
          style={[styles.input, styles.notesInput]}
          placeholder="Enter notes"
          value={notes}
          onChangeText={setNotes}
          multiline
        />
        <Text>{notes.length}/200 characters</Text>
        {!!notesError && (
          <Text style={styles.error}>{notesError}</Text>
        )}

        <Text style={styles.label}>Category</Text>
        <TextInput
          style={styles.input}
          placeholder="city, nature, food or other"
          value={category}
          onChangeText={setCategory}
          autoCapitalize="none"
        />
        {!!categoryError && (
          <Text style={styles.error}>{categoryError}</Text>
        )}

        <Pressable style={styles.button} onPress={addPlace}>
          <Text style={styles.buttonText}>Add Place</Text>
        </Pressable>

        <Text style={styles.heading}>Places to Visit</Text>

        {places.map(place => (
          <PlaceCard
            key={place.id}
            name={place.name}
            category={place.category}
            notes={place.notes}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f7f8",
  },
  content: {
    padding: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#1f2937",
  },
  tagline: {
    fontSize: 16,
    marginBottom: 18,
    color: "#4b5563",
  },
  image: {
    width: "100%",
    height: 170,
    borderRadius: 12,
    marginBottom: 20,
  },
  heading: {
    fontSize: 22,
    fontWeight: "bold",
    marginVertical: 15,
    color: "#1f2937",
  },
  label: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 6,
  },
  input: {
    borderWidth: 1,
    borderColor: "#cccccc",
    backgroundColor: "#ffffff",
    padding: 12,
    borderRadius: 8,
    marginBottom: 8,
  },
  notesInput: {
    height: 85,
    textAlignVertical: "top",
  },
  error: {
    color: "red",
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#2563eb",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 12,
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
  },
});