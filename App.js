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

import Login from "./Login.js";
import { Signup } from "./signup.js";
import Front_page from "./Front_page.js";
import Forgetpass from "./Forgetpass.js";
export default function App() {
  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={eva.light}>
        <Forgetpass />
      </ApplicationProvider>
    </>
  );
}
