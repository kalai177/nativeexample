import react from "react";
import { View, Image } from "react-native";
import { Divider } from "react-native-elements";
import { Text, Button, Input, color } from "@ui-kitten/components";
import * as eva from "@eva-design/eva";
import { EvaIconsPack } from "@ui-kitten/eva-icons";

export default function Paymentend({ navigation }) {
  return (
    <View
      style={{
        backgroundColor: "white",
      }}
    >
      <View
        style={{
          height: "92%",
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image source={require("./assests/tick.jpg")} />
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              fontSize: 24,
              fontWeight: "bold",
              color: "black",
              textAlign: "center",
              marginLeft: 30,
            }}
            numberOfLines={2}
            text
          >
            Payment of Rs 50 is successful
          </Text>

          <Button
            style={{
              borderWidth: 1,
              borderRadius: 25,
              paddingHorizontal: 50,
              marginTop: 20,
              backgroundColor: "white",
            }}
            appearance="outline"
            status="info"
            onPress={() => navigation.navigate("homepage")}
          >
            View details
          </Button>
        </View>
      </View>

      <View
        style={{
          backgroundColor: "white",
          height: "8%",
          width: "100%",
        }}
      >
        <Divider width={2} />

        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              marginTop: 18,
              fontSize: 26,
              fontWeight: "bold",
              textShadowColor: "black",
              color: "dodgerblue",
            }}
          >
            DONE
          </Text>
        </View>
      </View>
    </View>
  );
}
