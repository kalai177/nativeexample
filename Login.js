import React, { useState } from "react";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import * as eva from "@eva-design/eva";
import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from "react-native";
import { Text, Icon, Input, Button } from "@ui-kitten/components";
import { color } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";

const Emailicon = (props) => {
  return <Icon {...props} name="email-outline" />;
};

const googleicon = (props) => {
  return <Icon {...props} name="google-outline" />;
};

export default function Login({ navigation }) {
  const [email, setemail] = useState(" ");
  const [password, setpassword] = useState();
  const [securetext, setsecuretext] = useState(true);

  const eyeicon = (props) => {
    return (
      <TouchableWithoutFeedback onPress={togglesecureentry}>
        <Icon
          {...props}
          name={securetext ? "eye-off-2-outline" : "eye-outline"}
        />
      </TouchableWithoutFeedback>
    );
  };

  const togglesecureentry = () => {
    setsecuretext(!securetext);
  };

  return (
    <View>
      <Text
        style={{
          marginTop: 60,
          marginLeft: 30,
          marginBottom: 70,
          fontSize: 20,
          fontWeight: "bold",
          color: "#2196f3",
        }}
      >
        Log in
      </Text>

      <View>
        <Text style={{ marginLeft: 30, marginBottom: 3 }}>Email</Text>

        <Input
          accessoryLeft={Emailicon}
          placeholder="email"
          style={{
            marginLeft: 20,
            borderWidth: 1,
            marginRight: 10,
            marginBottom: 10,
            borderRadius: 15,
            padding: 10,
          }}
          onChangeText={(text) => setemail(text)}
        ></Input>
      </View>

      <View>
        <Text style={{ marginLeft: 30, marginBottom: 3 }}>Password</Text>
        <Input
          accessoryRight={eyeicon}
          placeholder="password"
          style={{
            marginLeft: 20,
            borderWidth: 1,
            marginRight: 10,
            marginBottom: 10,
            borderRadius: 15,
            padding: 10,
          }}
          secureTextEntry={securetext}
          onChangeText={(text) => setpassword(text)}
        ></Input>
      </View>

      <View>
        <Button
          style={{
            marginLeft: 70,
            marginRight: 50,
            borderRadius: 20,
            marginTop: 60,
            marginBottom: 25,
          }}
          appearance="filled"
          status="info"
          size="medium"
        >
          Log in
        </Button>
      </View>

      <TouchableOpacity
        style={{
          marginBottom: 50,
          alignItems: "center",
        }}
        onPress={() => navigation.navigate("forgetpass")}
      >
        <Text>Forget password?</Text>
      </TouchableOpacity>

      <View
        style={{
          borderBottomColor: "black",
          borderBottomWidth: 1,
        }}
      />

      <View>
        <Button
          accessoryLeft={googleicon}
          status="info"
          appearance="outline"
          style={{
            marginTop: 30,
            marginLeft: 30,
            marginRight: 30,
          }}
          onPress={() => navigation.navigate("homepage")}
        >
          Continue with google
        </Button>
      </View>

      <View
        style={{
          marginTop: 50,
          marginLeft: 70,
          flexDirection: "row",
        }}
      >
        <Text>Don't have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
          <Text style={{ color: "deepskyblue" }}>Create account</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
