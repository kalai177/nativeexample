import react from "react";
import { View, Image } from "react-native";
export default function Front_page({ navigation }) {
  return (
    <View backgroundColor="white">
      <View
        style={{
          marginTop: 270,
        }}
      >
        <Image
          style={{
            height: "28%",
          }}
          source={require("./assests/fitx_log0.jpg")}
        />
        <View
          style={{
            marginTop: 125,
          }}
        >
          <Image
            style={{
              height: "70%",
              width: "98%",
            }}
            source={require("./assests/push_up.png")}
          />
        </View>
      </View>
    </View>
  );
}
