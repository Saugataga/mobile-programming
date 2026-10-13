import { useState } from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { colors } from "../data";

export default function ProjectDetails({ project, onBack }) {
  const [applied, setApplied] = useState(false);

  return (
    <View style={{ flex: 1 }}>
      {/* Header with back button */}
      <View style={{ backgroundColor: colors.primary, padding: 20, paddingTop: 50 }}>
        <TouchableOpacity onPress={onBack}>
          <Text style={{ color: colors.white, fontSize: 16 }}>← Back to Projects</Text>
        </TouchableOpacity>
        <Text style={{ color: colors.white, fontSize: 24, fontWeight: "bold", marginTop: 10 }}>
          Project Details
        </Text>
      </View>

      <ScrollView style={{ padding: 20 }}>
        {/* Big picture */}
        <View style={styles.banner}>
          <Text style={{ fontSize: 70 }}>{project.icon}</Text>
        </View>

        <Text style={styles.tag}>{project.business}</Text>
        <Text style={styles.title}>{project.title}</Text>
        <Text style={{ color: colors.text, marginTop: 5 }}>
          📍 {project.place}   💰 Budget: Rs. {project.budget}
        </Text>

        <Text style={styles.sectionTitle}>About</Text>
        <Text style={{ color: colors.gray, lineHeight: 20 }}>{project.about}</Text>

        <Text style={styles.sectionTitle}>Requirements</Text>
        {project.requirements.map((r) => (
          <Text key={r} style={{ color: colors.text, marginBottom: 6 }}>
            ☑️ {r}
          </Text>
        ))}

        <TouchableOpacity
          style={[styles.button, applied && { backgroundColor: colors.support }]}
          onPress={() => setApplied(true)}
        >
          <Text style={{ color: applied ? colors.text : colors.white, fontSize: 18, fontWeight: "bold" }}>
            {applied ? "Applied ✓" : "Apply Now →"}
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  banner: {
    backgroundColor: colors.secondary,
    borderRadius: 15,
    height: 150,
    justifyContent: "center",
    alignItems: "center",
  },
  tag: {
    backgroundColor: colors.support,
    alignSelf: "flex-start",
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 10,
    marginTop: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: colors.text,
    marginTop: 8,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.text,
    marginTop: 20,
    marginBottom: 8,
  },
  button: {
    backgroundColor: colors.accent,
    padding: 15,
    borderRadius: 25,
    alignItems: "center",
    marginTop: 25,
    marginBottom: 40,
  },
});
