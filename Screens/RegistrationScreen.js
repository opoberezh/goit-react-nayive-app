import React from "react";
import { StyleSheet, Text, View } from "react-native";

 const RegistrationScreen = () => {
return (
    <View style={styles.container}>
        <Text>Registration</Text>
        <TextInput style={styles.input} placeholder="Name"/>
        <TextInput style={styles.input} placeholder="Email"/>
        <TextInput style={styles.input} placeholder="Password"/>
        <Button title="To Register"/>
    </View>
);
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        justifyContent: "center",
        alignItems: "center",
    },

    input: {
    borderWidth: 1,
    borderColor: "orange",
    borderRadius: 5,
    padding: 10,
    margine: "auto",
    }
})

export default RegistrationScreen;