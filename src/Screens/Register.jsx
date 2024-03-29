import React from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity, Image, StatusBar } from 'react-native';

const Register = () => {
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="#000" />
            <Image
                source={require("../../assets/images/background.png")}
                style={styles.backgroundImage}
            />
            {/* Lights */}
            <View style={styles.lightsContainer}>
                <Image
                    source={require("../../assets/images/Hanging-Light-PNG-Transparent-Image.png")}
                    style={[styles.lightImage, { height: 400, width: 200 }]}
                />
                <Image
                    source={require("../../assets/images/Hanging-Light-PNG-Transparent-Image.png")}
                    style={[styles.lightImage, { height: 250, width: 100 }]}
                />
            </View>

            <View style={styles.contentContainer}>
                {/* Title */}
                <View style={styles.titleContainer}>
                    <Text style={styles.titleText}>Register</Text>
                </View>

                {/* Form */}
                <View style={styles.formContainer}>
                    <View style={styles.inputContainer}>
                        <TextInput
                            placeholder="Username"
                            style={styles.input}
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <TextInput
                            placeholder="Email"
                            style={styles.input}
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <TextInput
                            placeholder="Password"
                            secureTextEntry
                            style={styles.input}
                        />
                    </View>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Register</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    backgroundImage: {
        width: '100%',
        height: '100%',
        position: 'absolute',
    },
    lightsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        position: 'absolute',
        width: '100%',
        top: -90,
    },
    lightImage: {
        resizeMode: 'contain',
    },
    contentContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingBottom: 50,
    },
    titleContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    titleText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 36,
        fontStyle: 'italic',
    },
    formContainer: {
        width: '100%',
        paddingHorizontal: 20,
    },
    inputContainer: {
        backgroundColor: 'rgba(0,0,0,0.1)',
        padding: 10,
        borderRadius: 10,
        marginBottom: 10,
    },
    input: {
        color: 'black',
    },
    button: {
        backgroundColor: '#1DA9EF',
        padding: 15,
        borderRadius: 10,
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

export default Register;
