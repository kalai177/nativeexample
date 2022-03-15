import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, View, SafeAreaView } from "react-native";
import * as eva from "@eva-design/eva";
import {
  ApplicationProvider,
  Layout,
  Text,
  IconRegistry,
  Icon,
  Input,
  Button,
} from "@ui-kitten/components";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import { color } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";
import { TouchableWithoutFeedback } from "@ui-kitten/components/devsupport";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "./Login.js";
import { Signup } from "./signup.js";
import Front_page from "./Front_page.js";
import Forgetpass from "./Forgetpass.js";
import Resetpassword from "./resetpassword.js";
import Bankdetails from "./bankdetails.js";
import Paymentend from "./payment_gate_way_end.js";
import Moneyfirststep from "./money_1step.js";
import Moneysecondstep from "./money_2step.js";
import Moneythirdstep from "./money_3step.js";
import Fitxwallet from "./Fitxwallet.js";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <ApplicationProvider {...eva} theme={eva.light}>
        <IconRegistry icons={EvaIconsPack} />
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="fitxwallet" component={Fitxwallet} />
            <Stack.Screen name="moneythirdstep" component={Moneythirdstep} />
            <Stack.Screen name="moneysecondstep" component={Moneysecondstep} />
            <Stack.Screen name="moneyfirststep" component={Moneyfirststep} />
            <Stack.Screen name="Paymentdone" component={Paymentend} />
            <Stack.Screen name="bankdetails" component={Bankdetails} />
            <Stack.Screen name="Signup" component={Signup} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="homepage" component={Front_page} />
            <Stack.Screen name="forgetpass" component={Forgetpass} />
            <Stack.Screen name="resetpass" component={Resetpassword} />
          </Stack.Navigator>
        </NavigationContainer>
      </ApplicationProvider>
    </>
  );
}
