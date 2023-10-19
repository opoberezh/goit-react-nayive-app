import React from "react";
import { Button } from "react-native";
import { StyleSheet, View, Text, TextInput } from "react-native";

const LoginScreen = () => {
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Entering</Text>
            <TextInput placeholder="Name"/>
            <TextInput placeholder="Password"/>
            <Button title="Log in" />
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
    marginButtom: 20,
    },

    button: {
        backgroundColor: "orange",
        color: "white",
        borderRadius: 50,
        padding: 10,
        minWidth: 300,
        marginTop: 10,
    },
    text: {
        fontSize: 24,
        marginBottom: 20,

    },
});

export default LoginScreen;