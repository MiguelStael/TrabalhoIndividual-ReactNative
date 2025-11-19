import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { styles } from './style';
import CustomButton from '../../components/button';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../routes';

type LoginScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Login'>;

const LoginPage: React.FC = () => {
    const navigation = useNavigation<LoginScreenNavigationProp>();
    const [activeTab, setActiveTab] = useState<'login' | 'signup'>('login');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        if (username && password) {
            navigation.navigate('Home');
        } else {
            Alert.alert("Erro", "Preencha usuário e senha.");
        }
    };

    return (
        <ScrollView style={styles.container} contentContainerStyle={{ flexGrow: 1 }}>
            <Text style={styles.header}>Welcome to KICK</Text>

            <View style={styles.tabContainer}>
                <TouchableOpacity
                    style={[styles.tabButton, activeTab === 'login' && styles.activeTab]}
                    onPress={() => setActiveTab('login')}
                >
                    <Text style={[styles.tabText, activeTab === 'login' && styles.activeTabText]}>
                        Log in
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.tabButton, activeTab === 'signup' && styles.activeTab]}
                    onPress={() => setActiveTab('signup')}
                >
                    <Text style={[styles.tabText, activeTab === 'signup' && styles.activeTabText]}>
                        Sign up
                    </Text>
                </TouchableOpacity>
            </View>

            <TextInput
                style={styles.input}
                placeholder="Username *"
                placeholderTextColor="#888"
                value={username}
                onChangeText={setUsername}
            />
            <TextInput
                style={styles.input}
                placeholder="Password *"
                placeholderTextColor="#888"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
            />

            <TouchableOpacity>
                <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
            </TouchableOpacity>

            <CustomButton title="Log in" onPress={handleLogin} type="primary" />

            <Text style={styles.orText}>Or</Text>

            <CustomButton
                title="Continue with Google"
                onPress={() => Alert.alert('Social Login', 'Google Pressed')}
                type="secondary"
                textStyle={styles.socialButtonText}
            />
            <CustomButton
                title="Continue with Apple"
                onPress={() => Alert.alert('Social Login', 'Apple Pressed')}
                type="secondary"
                textStyle={styles.socialButtonText}
            />

        </ScrollView>
    );
};

export default LoginPage;