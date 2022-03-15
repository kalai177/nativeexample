import react, { useState } from "react";
import { View, Image, TouchableOpacity } from "react-native";
import {
  Text,
  Button,
  Input,
  color,
  Card,
  Divider,
} from "@ui-kitten/components";
import { Icon } from "react-native-elements";

export default function Moneythirdstep({ navigation }) {
  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate("moneysecondstep")}>
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
        Sending Money from Wallet to
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
          <View style={{ flexDirection: "column" }}>
            <Text style={{ fontWeight: "bold" }}>Abhi Agarwal</Text>
            <Text style={{ fontSize: 12 }}>State Bank of India</Text>
            <Text style={{ fontSize: 12 }}>A/C No xxxx3229</Text>
          </View>

          <Image
            style={{
              marginTop: 9,
              marginLeft: 120,
            }}
            source={require("./assests/sbi.png")}
          ></Image>
        </View>
        <Divider style={{ marginTop: 14 }} />
        <View style={{ flexDirection: "row", marginTop: 15 }}>
          <Text style={{ fontSize: 14, fontWeight: "bold" }}>
            Amount to be send
          </Text>
          <Text style={{ marginLeft: 103, fontWeight: "bold" }}>Rs 50</Text>
        </View>
      </Card>

      <Button
        style={{
          borderWidth: 1,
          borderRadius: 25,
          marginTop: 30,
          marginLeft: 75,
          marginRight: 75,
        }}
        status="info"
        onPress={() => navigation.navigate("Paymentdone")}
      >
        Proceed
      </Button>
    </View>
  );
}
