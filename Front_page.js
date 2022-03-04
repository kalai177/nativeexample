import react from "react";
import { View, Image } from "react-native";
import { Avatar } from "@ui-kitten/components";
export default function Front_page() {
  return (
    <View>
      <View
        style={{
          marginTop: 270,
        }}
      >
        <Image source={require("./assests/fitx_log0.jpg")} />
        <View style={{ marginTop: 15 }}>
          <Image source={require("./assests/push_up.png")} />
        </View>
      </View>
    </View>
  );
}
