// screens/SignIn.jsx
import React, { useState, useContext } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";

const SignIn = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signIn } = useContext(AuthContext);

  const handleSignIn = async () => {
    try {
      const response = await axios.post(
        "ecom-app-backend.vercel.app/api/auth/signin",
        { email, password }
      );
      const { token } = response.data;
      await signIn(token);
      navigation.navigate("Profile");
    } catch (error) {
      Alert.alert("Error", error.response.data.error);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
      />
      <TouchableOpacity onPress={handleSignIn} style={styles.button}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
        <Text style={styles.link}>Don't have an account? Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 8,
    marginBottom: 16,
  },
  button: {
    backgroundColor: "#007BFF",
    padding: 16,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
  },
  link: {
    color: "#007BFF",
    textAlign: "center",
    marginTop: 16,
  },
});

export default SignIn;
