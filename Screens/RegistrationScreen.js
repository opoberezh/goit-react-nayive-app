import React from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

 const RegistrationScreen = () => {
return (
    <View style={styles.container}>
        <Text style={styles.text}>Registration</Text>
        <TextInput style={styles.input} placeholder="Name"/>
        <TextInput style={styles.input} placeholder="Email"/>
        <TextInput style={styles.input} placeholder="Password"/>
        <Button title="Sing up" style={styles.button}/>
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
    },
    text: {
        fontSize: 24,
        marginBottom: 20,

    },
});

export default RegistrationScreen;