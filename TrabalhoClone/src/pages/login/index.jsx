import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from './style';

export default function Login({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.logo}>KICK</Text>

            <View style={styles.box}>
                <Text style={styles.label}>Username</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Your username"
                    placeholderTextColor="#7a7a7a"
                />

                <Text style={styles.label}>Password</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Your password"
                    placeholderTextColor="#7a7a7a"
                    secureTextEntry
                />

                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
                    <Text style={styles.buttonText}>LOG IN</Text>
                </TouchableOpacity>
            </View>

            <Text style={styles.signUpText}>Don't have an account? <Text style={styles.signUp}>Sign up</Text></Text>
        </View>
    );
}
