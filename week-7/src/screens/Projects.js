import { useState } from "react";
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { colors, projects } from "../data";
import Header from "./Header";

const categories = ["All", "Design", "Development", "Writing", "Marketing"];

export default function Projects({ onOpenProject }) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  // Keep only the projects that match the chosen category and the search text
  const filtered = projects.filter(
    (p) =>
      (category === "All" || p.category === category) &&
      p.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <View style={{ flex: 1 }}>
      <Header title="Projects" />

      <View style={{ padding: 20, paddingBottom: 0 }}>
        <TextInput
          style={styles.search}
          placeholder="🔍 Search projects..."
          value={search}
          onChangeText={setSearch}
        />

        {/* Category buttons */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginTop: 12 }}>
          {categories.map((c) => (
            <TouchableOpacity
              key={c}
              onPress={() => setCategory(c)}
              style={[styles.chip, category === c && { backgroundColor: colors.primary }]}
            >
              <Text style={{ color: category === c ? colors.white : colors.text }}>{c}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Project list */}
      <ScrollView style={{ padding: 20 }}>
        {filtered.map((p) => (
          <TouchableOpacity key={p.id} style={styles.card} onPress={() => onOpenProject(p)}>
            <Text style={styles.icon}>{p.icon}</Text>
            <View style={{ flex: 1 }}>
              <Text style={styles.title}>{p.title}</Text>
              <Text style={{ color: colors.gray }}>
                {p.category} · {p.place}
              </Text>
              <Text style={{ color: colors.accent, fontWeight: "bold", marginTop: 4 }}>
                Budget: Rs. {p.budget}
              </Text>
            </View>
            <Text style={{ fontSize: 20, color: colors.gray }}>›</Text>
          </TouchableOpacity>
        ))}

        {filtered.length === 0 && <Text style={{ textAlign: "center" }}>No projects found.</Text>}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  search: {
    backgroundColor: colors.white,
    padding: 12,
    borderRadius: 25,
  },
  chip: {
    backgroundColor: colors.white,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    marginRight: 8,
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.white,
    padding: 15,
    borderRadius: 15,
    marginBottom: 12,
  },
  icon: {
    fontSize: 32,
    backgroundColor: colors.cream,
    padding: 10,
    borderRadius: 12,
    marginRight: 12,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: colors.text,
  },
});
