import react, { useState } from "react";
import { View } from "react-native";
import { Text, Button, Input, color, Card } from "@ui-kitten/components";
import { Icon } from "react-native-elements";
import { backgroundColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";
import Iconmci from "react-native-vector-icons/MaterialCommunityIcons";
import { TouchableOpacity } from "react-native-gesture-handler";

const Ruppeicon = () => {
  return <Iconmci name="currency-inr" size={28} />;
};
export default function Moneyfirststep({ navigation }) {
  const [amount, setamount] = useState(0);
  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate("fitxwallet")}>
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
          marginTop: 70,
          marginLeft: 22,
          fontSize: 18,
          fontWeight: "bold",
        }}
      >
        Send money from wallet to bank
      </Text>

      <Text
        style={{
          marginLeft: 21,
          fontSize: 14,
        }}
      >
        No direct or hidden charges. Send your money to bank for FREE
      </Text>

      <Card
        style={{
          marginLeft: 20,
          marginRight: 20,
          marginTop: 30,
        }}
      >
        <Text
          style={{
            paddingLeft: 5,
            paddingTop: 8,
          }}
        >
          Add amount
        </Text>

        <Input
          placeholder="Enter amount"
          accessoryLeft={Ruppeicon}
          onChangeText={(text) => setamount(text)}
        ></Input>
        <Button
          style={{
            borderWidth: 1,
            borderRadius: 25,
            marginTop: 30,
            marginLeft: 25,
            marginRight: 25,
          }}
          status="info"
          onPress={() => navigation.navigate("homepage")}
        >
          Proceed
        </Button>
      </Card>
    </View>
  );
}
