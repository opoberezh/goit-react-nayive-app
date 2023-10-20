import React from "react";
import { Button } from "react-native";
import { StyleSheet, View, Text, TextInput } from "react-native";

const LoginScreen = () => {
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Entering</Text>
            <TextInput style={styles.input} placeholder="Name"/>
            <TextInput style={styles.input} placeholder="Password"/>
            <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Log In</Text>
        </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'rgba(255, 255, 255, 1)',
        marginTop: 263,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        width: 375,
    },

    input: {
        borderWidth: 1,
        borderColor: "#E8E8E8",
        backgroundColor: "#F6F6F6",
        color: "#BDBDBD",
        borderRadius: 5,
        padding: 10,
        marginBottom: 16,
        width: 343,
    },

    button: {
        backgroundColor: "orange",
        alignItems: "center",
        marginTop: 27,
        marginBottom: 16,
        borderRadius: 50,
        padding: 10,
        width: 343,
        height: 50,
    },

    buttonText: {
        color: "white",
        fontSize: 16,
        fontWeight: 400,
    },

    text: {
        fontSize: 24,
        marginBottom: 20,
        fontWeight: 'bold',

    },
});

export default LoginScreen;