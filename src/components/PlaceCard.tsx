import { StyleSheet, Text, View } from "react-native";

type PlaceCardProps = {
  name: string;
  category: string;
  notes: string;
};

export default function PlaceCard({
  name,
  category,
  notes,
}: PlaceCardProps) {
  return (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.category}>{category}</Text>
      </View>

      <Text style={styles.notes}>{notes}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 12,
    padding: 16,
    marginBottom: 14,
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#1f2937",
  },
  category: {
    fontSize: 14,
    color: "#2563eb",
  },
  notes: {
    fontSize: 15,
    color: "#4b5563",
    marginTop: 10,
  },
});