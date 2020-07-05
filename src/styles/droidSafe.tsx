import { Platform } from "react-native";

const droidSafeArea = {
  flex: 1,
  backgroundColor: "#F2A951",
  paddingTop: Platform.OS === "android" ? 25 : 0,
};

export default droidSafeArea;
