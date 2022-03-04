import react, { useState } from "react";
import { View } from "react-native";
import * as eva from "@eva-design/eva";
import { Input, Text, Icon, Button } from "@ui-kitten/components";
import { EvaIconsPack } from "@ui-kitten/eva-icons";

const Emailicon = (props) => {
  return <Icon {...props} name="email-outline" />;
};

export default function Forgetpass() {
  const [email, setemail] = useState(" ");

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
          Forget password?
        </Text>
      </View>
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          marginTop: 200,
          marginLeft: 20,
        }}
      >
        <Text
          style={{
            fontSize: 16,
          }}
        >
          you can recieve the verification link to your email for resetting the
          password
        </Text>
      </View>

      <View>
        <Text
          style={{
            marginTop: 30,
            marginLeft: 40,
            marginBottom: 5,
          }}
        >
          Email
        </Text>

        <Input
          accessoryLeft={Emailicon}
          placeholder="Email"
          onChangeText={(text) => setemail(text)}
          style={{
            marginLeft: 20,
            borderWidth: 1,
            marginRight: 10,

            marginBottom: 10,
            borderRadius: 15,
            padding: 10,
          }}
        />
        <Button
          style={{
            marginBottom: 30,
            borderRadius: 20,
            alignItems: "center",
            justifyContent: "center",
            marginRight: 65,
            marginLeft: 65,
          }}
          status="info"
          appearance="filled"
        >
          Send
        </Button>
      </View>

      <View
        style={{
          marginTop: 45,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text>back to Login</Text>
      </View>
    </View>
  );
}
