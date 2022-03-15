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
import Iconmci from "react-native-vector-icons/MaterialCommunityIcons";
import Iconfontaws from "react-native-vector-icons/FontAwesome";
import Iconentypo from "react-native-vector-icons/Entypo";

const Ruppeicon = () => {
  return <Iconmci name="currency-inr" size={28} />;
};

export default function Fitxwallet({ navigation }) {
  const [amount, setamount] = useState(0);
  return (
    <View style={{ backgroundColor: "white" }}>
      <View
        style={{
          flexDirection: "row",
          marginTop: 50,
        }}
      >
        <TouchableOpacity onPress={() => navigation.navigate("homepage")}>
          <Icon
            name="play-skip-back"
            type="ionicon"
            style={{
              marginLeft: 18,
              marginTop: 40,
              flexDirection: "row",
            }}
          />
        </TouchableOpacity>

        <Text
          style={{
            marginLeft: 70,
            fontWeight: "bold",
            fontSize: 21,
            color: "black",
          }}
        >
          Add bank details
        </Text>
      </View>

      <Card
        style={{
          marginLeft: 20,
          marginRight: 20,
          marginTop: 30,
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <Text style={{ fontSize: 14 }}> Fitxbalance</Text>
          <Text
            style={{
              marginLeft: 90,
              fontSize: 24,
              fontWeight: "bold",
              color: "#00aced",
            }}
          >
            {" "}
            Rs 5990
          </Text>
        </View>
        <Divider style={{ marginTop: 10 }} />
        <Text style={{ marginTop: 5, fontSize: 15, fontWeight: "bold" }}>
          Add money
        </Text>
        <Input
          placeholder="Enter amount"
          accessoryLeft={Ruppeicon}
          onChangeText={(text) => setamount(text)}
        ></Input>
        <Text style={{ fontSize: 12, marginTop: 5 }}>Recommanded</Text>
        <View flexDirection="row" style={{ marginTop: 3 }}>
          <Card style={{ marginRight: 3 }}>
            <Text style={{ fontSize: 14, color: "#00aced" }}>Rs 100</Text>
          </Card>
          <Card style={{ marginRight: 3 }}>
            <Text style={{ fontSize: 14, color: "#00aced" }}>Rs 500</Text>
          </Card>
          <Card>
            <Text style={{ fontSize: 14, color: "#00aced" }}>Rs 1000</Text>
          </Card>
        </View>

        <Button
          style={{
            borderWidth: 1,
            borderRadius: 25,
            marginTop: 30,
            marginLeft: 40,
            marginRight: 40,
          }}
          status="info"
          onPress={() => navigation.navigate("homepage")}
        >
          Add to wallet
        </Button>
      </Card>

      <Text
        style={{
          fontSize: 14,
          fontWeight: "bold",
          marginTop: 18,
          marginLeft: 20,
          textDecorationLine: "underline",
        }}
      >
        Use your wallet to
      </Text>

      <Card
        style={{
          marginLeft: 20,
          marginRight: 20,
          marginTop: 5,
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

      <Card
        style={{
          marginLeft: 20,
          marginRight: 20,
          marginTop: 5,
        }}
      >
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <Iconentypo name="wallet" size={27} color="#00aced" />
          <Text
            style={{
              marginLeft: 20,
              fontWeight: "bold",
            }}
          >
            Make a payment
          </Text>
        </View>
      </Card>
      <Image
        style={{
          marginLeft: 100,
          alignItems: "center",
          width: 170,
          height: 170,
          resizeMode: "contain",
        }}
        source={require("./assests/wallet.jpg")}
      />
    </View>
  );
}
