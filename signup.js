import React, { useState } from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import * as eva from "@eva-design/eva";
import { Text, Icon, Input, Button } from "@ui-kitten/components";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import { TouchableWithoutFeedback } from "@ui-kitten/components/devsupport";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./Login.js";
const Personoutline = (props) => {
  return <Icon {...props} name="person-outline" />;
};

const Contacticon = (props) => {
  return <Icon {...props} name="smartphone-outline" />;
};
const Emailicon = (props) => {
  return <Icon {...props} name="email-outline" />;
};

const lockicon = (props) => {
  return <Icon {...props} name="lock-outline" />;
};

const googleicon = (props) => {
  return <Icon {...props} name="google-outline" />;
};

function Signup({ navigation }) {
  const [name, setname] = useState("");
  const [num, setnum] = useState();
  const [mail, setmail] = useState(" ");
  const [password, setpassword] = useState(" ");
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
      <View style={styles.header}>
        <Text style={[styles.setfontsize, styles.setcolorblue]}>
          Create new account
        </Text>
      </View>

      <View>
        <Text style={styles.textheading}>Name</Text>

        <Input
          accessoryLeft={Personoutline}
          style={styles.input}
          placeholder="username"
          onChangeText={(text) => setname(text)}
        />
      </View>

      <View>
        <Text style={styles.textheading}>Contact no</Text>
        <Input
          accessoryLeft={Contacticon}
          style={styles.input}
          placeholder="contact no"
          onChangeText={(text) => setnum(text)}
          type="numeric"
        />
      </View>
      <View>
        <Text style={styles.textheading}>email</Text>
        <Input
          accessoryLeft={Emailicon}
          style={styles.input}
          placeholder="email"
          onChangeText={(text) => setmail(text)}
        />
      </View>

      <View>
        <Text style={styles.textheading}>Password</Text>
        <Input
          accessoryRight={eyeicon}
          accessoryLeft={lockicon}
          style={styles.input}
          placeholder="password"
          secureTextEntry={securetext}
          onChangeText={(text) => setpassword(text)}
        />
      </View>
      <View>
        <Text style={styles.conditions}>
          By creating account,you agree to terms of use and Privacy policy
        </Text>
      </View>

      <View>
        <Button
          style={styles.button}
          appearance="filled"
          status="info"
          size="medium"
          onPress={() => navigation.navigate("Login")}
        >
          Create account
        </Button>
      </View>

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
        <Text>Already a user?</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text style={{ color: "deepskyblue" }}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    marginTop: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    marginTop: 45,
    alignItems: "center",
  },
  setfontsize: {
    fontSize: 20,
    fontWeight: "bold",
  },

  setcolorblue: {
    color: "#2196f3",
  },

  textheading: {
    marginTop: 5,
    marginLeft: 30,
  },

  input: {
    borderWidth: 1,
    height: 40,
    marginBottom: 20,
    marginLeft: 20,
    marginRight: 10,
    padding: 10,
    borderRadius: 15,
  },
  conditions: {
    fontSize: 12,
    marginLeft: 30,
  },

  button: {
    marginLeft: 70,
    marginRight: 50,
    borderRadius: 20,
    marginTop: 20,
    marginBottom: 25,
  },
});

export { Signup };
