import { Image, Text, View } from "react-native";

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: "#FFF8E8", padding: 20, paddingTop: 60 }}>
      <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
        <Text style={{ fontSize: 28, fontWeight: "bold", color: "#2D175D" }}>Paila</Text>
        <Image
          source={require("./assets/imagemain.jpg")}
          style={{ width: 48, height: 48, borderRadius: 24 }}
        />
      </View>

      <Text style={{ color: "#777", marginTop: 30 }}>Namaste, Saugat Parajuli</Text>
      <Text style={{ fontSize: 30, fontWeight: "bold", color: "#171027", marginBottom: 20 }}>
        Dashboard
      </Text>

      <View style={{ backgroundColor: "#2D175D", padding: 22, borderRadius: 18 }}>
        <Text style={{ color: "white" }}>Total earnings</Text>
        <Text style={{ color: "#FFD45C", fontSize: 30, fontWeight: "bold", marginTop: 5 }}>
          NPR 12,500
        </Text>
        <Text style={{ color: "white", marginTop: 5 }}>3 projects completed</Text>
      </View>

      <Text style={{ fontSize: 20, fontWeight: "bold", marginTop: 25, marginBottom: 10 }}>
        My activity
      </Text>

      <View style={{ flexDirection: "row" }}>
        <View style={{ flex: 1, backgroundColor: "#FFD45C", padding: 15, marginRight: 8, borderRadius: 12 }}>
          <Text style={{ fontSize: 22, fontWeight: "bold" }}>4</Text>
          <Text>Applied</Text>
        </View>
        <View style={{ flex: 1, backgroundColor: "#8BE3C6", padding: 15, marginRight: 8, borderRadius: 12 }}>
          <Text style={{ fontSize: 22, fontWeight: "bold" }}>2</Text>
          <Text>Working</Text>
        </View>
        <View style={{ flex: 1, backgroundColor: "#EF5A46", padding: 15, borderRadius: 12 }}>
          <Text style={{ color: "white", fontSize: 22, fontWeight: "bold" }}>3</Text>
          <Text style={{ color: "white" }}>Done</Text>
        </View>
      </View>

      <Text style={{ fontSize: 20, fontWeight: "bold", marginTop: 25, marginBottom: 10 }}>
        New project
      </Text>

      <View style={{ backgroundColor: "white", padding: 18, borderRadius: 15, borderWidth: 1, borderColor: "#E5DDE8" }}>
        <Text style={{ fontSize: 19, fontWeight: "bold", color: "#171027" }}>
          Social media launch kit
        </Text>
        <Text style={{ color: "#777", marginTop: 5 }}>Himalayan Brew Co. · Kathmandu</Text>
        <Text style={{ color: "#EF5A46", fontSize: 20, fontWeight: "bold", marginTop: 20 }}>
          NPR 8,000
        </Text>
      </View>
    </View>
  );
}
