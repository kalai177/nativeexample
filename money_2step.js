import react, { useState } from "react";
import { View, Image, TouchableOpacity } from "react-native";
import { Text, Card } from "@ui-kitten/components";
import { Icon } from "react-native-elements";
import Iconfeather from "react-native-vector-icons/Feather";
import Iconfontaws from "react-native-vector-icons/FontAwesome";

export default function Moneyfirststep({ navigation }) {
  const [amount, setamount] = useState(0);
  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate("moneyfirststep")}>
        <Icon
          name="play-skip-back"
          type="ionicon"
          style={{
            marginLeft: 18,
            marginTop: 40,
            flexDirection: "row",
          }}
        ></Icon>
      </TouchableOpacity>

      <Text
        style={{
          marginTop: 70,
          marginLeft: 22,
          fontSize: 18,
          fontWeight: "bold",
        }}
      >
        Select a Saved Bank Account
      </Text>

      <Card
        style={{
          marginLeft: 20,
          marginRight: 20,
          marginTop: 30,
        }}
      >
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <Image source={require("./assests/sbi.png")} />
          <View
            style={{
              flexDirection: "column",
              marginLeft: 16,
            }}
          >
            <Text style={{ fontWeight: "bold" }}>Abhi Agarwal</Text>
            <Text style={{ fontSize: 10 }}>A/C No xxxx3229</Text>
          </View>

          <View
            style={{
              marginLeft: 110,
            }}
          >
            <Iconfeather name="more-vertical" size={32} color="royalblue" />
          </View>
        </View>
      </Card>
      <Card
        style={{
          marginLeft: 20,
          marginRight: 20,
          marginTop: 30,
        }}
      >
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <Iconfontaws name="bank" size={27} color="#00aced" />
          <Text
            style={{
              marginLeft: 20,
              fontWeight: "bold",
            }}
          >
            Add Bank details
          </Text>
        </View>
      </Card>
    </View>
  );
}
