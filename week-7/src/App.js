import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { colors } from "./data";
import Dashboard from "./screens/Dashboard";
import Projects from "./screens/Projects";
import Messages from "./screens/Messages";
import ProjectDetails from "./screens/ProjectDetails";

export default function App() {
  // Which screen is showing: "dashboard", "projects", "messages" or "details"
  const [screen, setScreen] = useState("dashboard");
  // The project the user tapped on (shown in the details screen)
  const [selectedProject, setSelectedProject] = useState(null);

  function openProject(project) {
    setSelectedProject(project);
    setScreen("details");
  }

  return (
    <View style={{ flex: 1, backgroundColor: colors.cream }}>
      {screen === "dashboard" && <Dashboard onOpenProject={openProject} />}
      {screen === "projects" && <Projects onOpenProject={openProject} />}
      {screen === "messages" && <Messages />}
      {screen === "details" && (
        <ProjectDetails project={selectedProject} onBack={() => setScreen("projects")} />
      )}

      {/* Bottom tab bar (hidden on the details screen) */}
      {screen !== "details" && (
        <View style={{ flexDirection: "row", backgroundColor: colors.white, paddingBottom: 20 }}>
          <Tab label="Home" icon="🏠" active={screen === "dashboard"} onPress={() => setScreen("dashboard")} />
          <Tab label="Projects" icon="📁" active={screen === "projects"} onPress={() => setScreen("projects")} />
          <Tab label="Messages" icon="💬" active={screen === "messages"} onPress={() => setScreen("messages")} />
        </View>
      )}
    </View>
  );
}

// One button in the bottom tab bar
function Tab({ label, icon, active, onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={{ flex: 1, alignItems: "center", padding: 10 }}>
      <Text style={{ fontSize: 22 }}>{icon}</Text>
      <Text style={{ color: active ? colors.primary : colors.gray, fontWeight: active ? "bold" : "normal" }}>
        {label}
      </Text>
    </TouchableOpacity>
  );
}
