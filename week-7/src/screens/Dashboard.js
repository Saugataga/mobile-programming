import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { colors, projects } from "../data";
import Header from "./Header";

export default function Dashboard({ onOpenProject }) {
  const newProject = projects[0];

  return (
    <View style={{ flex: 1 }}>
      <Header label="Namaste, Saugat" title="Dashboard" />

      <ScrollView style={{ padding: 20 }}>
        {/* Welcome card */}
        <View style={[styles.card, { flexDirection: "row", alignItems: "center" }]}>
          <View style={{ flex: 1 }}>
            <Text style={styles.heading}>Hey Saugat! 👋</Text>
            <Text style={{ color: colors.gray, marginTop: 5 }}>Ready to take on your next project?</Text>
          </View>
          <Text style={{ fontSize: 50 }}>🧑‍💻</Text>
        </View>

        {/* My activity: three small boxes */}
        <Text style={styles.sectionTitle}>My activity</Text>
        <View style={{ flexDirection: "row" }}>
          <View style={[styles.box, { backgroundColor: colors.secondary }]}>
            <Text style={styles.number}>3</Text>
            <Text>Applied</Text>
          </View>
          <View style={[styles.box, { backgroundColor: "#FBD3CB" }]}>
            <Text style={styles.number}>1</Text>
            <Text>Ongoing</Text>
          </View>
          <View style={[styles.box, { backgroundColor: colors.support, marginRight: 0 }]}>
            <Text style={styles.number}>2</Text>
            <Text>Completed</Text>
          </View>
        </View>

        {/* Newest project */}
        <Text style={styles.sectionTitle}>New Project</Text>
        <View style={styles.card}>
          <Text style={styles.heading}>
            {newProject.icon} {newProject.title}
          </Text>
          <Text style={{ color: colors.gray, marginTop: 5 }}>
            {newProject.business} · Rs. {newProject.budget}
          </Text>
          <TouchableOpacity style={styles.button} onPress={() => onOpenProject(newProject)}>
            <Text style={{ color: colors.white, fontWeight: "bold" }}>View Details →</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    padding: 18,
    borderRadius: 15,
  },
  heading: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.text,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.text,
    marginTop: 25,
    marginBottom: 10,
  },
  box: {
    flex: 1,
    padding: 15,
    borderRadius: 12,
    marginRight: 8,
  },
  number: {
    fontSize: 24,
    fontWeight: "bold",
  },
  button: {
    backgroundColor: colors.accent,
    padding: 10,
    borderRadius: 20,
    alignSelf: "flex-start",
    marginTop: 15,
  },
});
