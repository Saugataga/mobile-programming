import { Text, View } from "react-native";
import { colors } from "../data";

// Purple header used on the top of each main screen
export default function Header({ label, title }) {
  return (
    <View style={{ backgroundColor: colors.primary, padding: 20, paddingTop: 50 }}>
      <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
        <Text style={{ color: colors.white, fontSize: 26, fontWeight: "bold" }}>Paila</Text>
        <Text style={{ fontSize: 28 }}>👤</Text>
      </View>
      {label && <Text style={{ color: colors.white, marginTop: 10 }}>{label}</Text>}
      <Text style={{ color: colors.white, fontSize: 24, fontWeight: "bold", marginTop: 5 }}>{title}</Text>
    </View>
  );
}
