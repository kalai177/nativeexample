import React, { useState } from "react";
import { View, TouchableOpacity } from "react-native";
import * as eva from "@eva-design/eva";
import { Text, Icon, Input, Button } from "@ui-kitten/components";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
const lockicon = (props) => {
  return <Icon {...props} name="lock-outline" />;
};

export default function Resetpassword({ navigation }) {
  const [password, setpassword] = useState(" ");
  const [newpass, setnewpass] = useState(" ");

  return (
    <View>
      <View
        style={{
          marginTop: 80,
          marginLeft: 50,
        }}
      >
        <Text
          style={{
            fontSize: 25,
            color: "#2196f3",
            fontWeight: "bold",
          }}
        >
          Reset your password
        </Text>
      </View>
      <View>
        <Text
          style={{
            marginTop: 170,
            marginLeft: 42,
          }}
          fontSize="20"
        >
          At least 8 characters with uppercase and lower case
        </Text>

        <Text style={{ marginTop: 25, marginLeft: 42 }}>New password</Text>
        <Input
          style={{
            marginLeft: 42,
            borderWidth: 1,
            borderRadius: 15,
            marginRight: 20,
            marginTop: 3,
          }}
          placeholder="new password"
          accessoryLeft={lockicon}
          onChangeText={(text) => setpassword(text)}
        ></Input>

        <Text style={{ marginTop: 25, marginLeft: 42 }}>Confirm password</Text>
        <Input
          style={{
            marginLeft: 42,
            borderWidth: 1,
            borderRadius: 15,
            marginRight: 20,
            marginTop: 3,
          }}
          placeholder="confirm  password"
          accessoryLeft={lockicon}
          onChangeText={(text) => setnewpass(text)}
        ></Input>
        <Button
          style={{
            marginTop: 20,
            marginBottom: 30,
            borderRadius: 20,
            alignItems: "center",
            justifyContent: "center",
            marginRight: 65,
            marginLeft: 65,
          }}
          status="info"
          appearance="filled"
          onPress={() => navigation.navigate("Login")}
        >
          Send
        </Button>
      </View>

      <View
        style={{
          marginTop: 45,
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "row",
        }}
      >
        <Text>back to </Text>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text style={{ color: "deepskyblue" }}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
