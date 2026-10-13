import { ScrollView, StyleSheet, Text, View } from "react-native";
import { colors, messages } from "../data";
import Header from "./Header";

export default function Messages() {
  return (
    <View style={{ flex: 1 }}>
      <Header title="Messages" />

      <ScrollView>
        {messages.map((m) => (
          <View key={m.id} style={styles.row}>
            {/* Round avatar with the first letter of the name */}
            <View style={styles.avatar}>
              <Text style={{ color: colors.white, fontWeight: "bold" }}>{m.name[0]}</Text>
            </View>

            <View style={{ flex: 1 }}>
              <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                <Text style={styles.name}>{m.name}</Text>
                <Text style={{ color: colors.gray, fontSize: 12 }}>{m.time}</Text>
              </View>
              <Text style={{ color: colors.gray }} numberOfLines={1}>
                {m.text}
              </Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.white,
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#EEE",
  },
  avatar: {
    width: 45,
    height: 45,
    borderRadius: 25,
    backgroundColor: colors.primary,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    color: colors.text,
  },
});
