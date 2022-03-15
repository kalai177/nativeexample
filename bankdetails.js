import react, { useState } from "react";
import { View, TouchableOpacity } from "react-native";
import { Text, Button, Input } from "@ui-kitten/components";

import { Icon } from "react-native-elements";
import Iconfa from "react-native-vector-icons/FontAwesome";

const Personicon = () => {
  return <Icon name="person-circle-outline" color="#00aced" type="ionicon" />;
};

const Peopleicon = () => {
  return <Icon name="people-circle-outline" color="#00aced" type="ionicon" />;
};
const Bankicon = () => {
  return <Iconfa name="bank" size={17} color="#00aced" />;
};
export default function Bankdetails({ navigation }) {
  const [name, setname] = useState("");
  const [accnum, setaccnum] = useState(0);
  const [reaccnum, setreaccnum] = useState(0);
  const [ifsc, setifsc] = useState(0);
  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          marginTop: 50,
        }}
      >
        <Icon name="play-skip-back" type="ionicon" style={{ marginLeft: 15 }} />

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

      <View style={{ marginTop: 58, marginLeft: 40 }}>
        <Text
          style={{
            fontSize: 18,
          }}
        >
          Holder's Name
        </Text>

        <Input
          style={{
            borderWidth: 1,
            borderRadius: 15,
            marginTop: 5,
            marginRight: 20,
            marginBottom: 15,
          }}
          placeholder="name"
          accessoryLeft={Personicon}
          onChangeText={(text) => setname(text)}
        ></Input>

        <Text
          style={{
            fontSize: 18,
            marginTop: 5,
          }}
        >
          Account number
        </Text>

        <Input
          style={{
            borderWidth: 1,
            borderRadius: 15,
            marginTop: 3,
            marginRight: 20,
            marginBottom: 15,
          }}
          placeholder="account number"
          accessoryLeft={Peopleicon}
          onChangeText={(text) => setaccnum(text)}
        ></Input>

        <Text
          style={{
            fontSize: 18,
          }}
        >
          Confirm account number
        </Text>

        <Input
          style={{
            borderWidth: 1,
            borderRadius: 15,
            marginTop: 3,
            marginRight: 20,
            marginBottom: 15,
          }}
          placeholder="account number"
          accessoryLeft={Personicon}
          onChangeText={(text) => setreaccnum(text)}
        ></Input>

        <Text
          style={{
            fontSize: 18,
          }}
        >
          Holder's Name
        </Text>

        <Input
          style={{
            borderWidth: 1,
            borderRadius: 15,
            marginTop: 3,
            marginRight: 20,
            marginBottom: 15,
          }}
          placeholder="IFSC Code"
          accessoryLeft={Bankicon}
          onChangeText={(text) => setifsc(text)}
        ></Input>
      </View>

      <View
        style={{
          alignItems: "center",
          marginTop: 33,
        }}
      >
        <Button
          style={{
            borderWidth: 1,
            borderRadius: 25,
            paddingHorizontal: 50,
          }}
          status="info"
          onPress={() => navigation.navigate("homepage")}
        >
          SAVE
        </Button>
      </View>
    </View>
  );
}
