import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Alert,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
} from 'react-native';

import { NativeStackScreenProps } from '@react-navigation/native-stack';

import CustomButton from '../components/CustomButton';
import CustomInput from '../components/CustomInput';
import { COLORS } from '../theme/colors';
import { useApp } from '../context/AppContext';

type RootStackParamList = {
    Login: undefined;
    PatientTabs: undefined;
    Admin: undefined;
};

type Props = NativeStackScreenProps<
    RootStackParamList,
    'Login'
>;

export default function LoginScreen({ navigation }: Props) {
    const [email, setEmail] = useState('nurul@gmail.com');
    const [password, setPassword] = useState('123456');

    const { setUser } = useApp();

    const handleLogin = () => {
        if (!email.trim() || !password.trim()) {
            Alert.alert('Peringatan', 'Isi email dan password!');
            return;
        }

        if (email.toLowerCase() === 'admin@smartclinic.com') {
            setUser({
                name: 'Administrator',
                email,
                role: 'admin',
            });

            navigation.replace('Admin');
        } else {
            setUser({
                name: 'Nurul Salsabila',
                email,
                role: 'patient',
            });

            navigation.replace('PatientTabs');
        }
    };

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        >
            <ScrollView
                contentContainerStyle={styles.content}
                keyboardShouldPersistTaps="handled"
            >
                <View style={styles.logo}>
                    <Text style={styles.logoIcon}>✚</Text>
                    <Text style={styles.logoTitle}>SmartClinic</Text>
                    <Text style={styles.logoSubtitle}>
                        Sistem Informasi Manajemen Klinik
                    </Text>
                </View>

                <View style={styles.form}>
                    <Text style={styles.heading}>Selamat Datang!</Text>
                    <Text style={styles.description}>
                        Silakan masuk ke akun Anda
                    </Text>

                    <CustomInput
                        label="Email"
                        placeholder="Masukkan email"
                        value={email}
                        onChangeText={setEmail}
                        keyboardType="email-address"
                        autoCapitalize="none"
                    />

                    <CustomInput
                        label="Password"
                        placeholder="Masukkan password"
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry
                    />

                    <CustomButton
                        title="Login"
                        onPress={handleLogin}
                        style={{ marginTop: 15 }}
                    />

                    <Text style={styles.demoTitle}>AKUN DEMO</Text>

                    <Text style={styles.demoText}>
                        Pasien: nurul@gmail.com
                    </Text>
                    <Text style={styles.demoText}>
                        Admin: admin@smartclinic.com
                    </Text>
                    <Text style={styles.demoText}>
                        Password: bebas diisi
                    </Text>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
    },
    content: {
        flexGrow: 1,
        justifyContent: 'center',
        padding: 25,
    },
    logo: {
        alignItems: 'center',
        marginBottom: 45,
    },
    logoIcon: {
        fontSize: 65,
        color: COLORS.primary,
        fontWeight: 'bold',
    },
    logoTitle: {
        fontSize: 30,
        fontWeight: 'bold',
        color: COLORS.primary,
    },
    logoSubtitle: {
        color: COLORS.muted,
        fontSize: 12,
        marginTop: 5,
    },
    form: {
        width: '100%',
    },
    heading: {
        color: COLORS.dark,
        fontSize: 24,
        fontWeight: 'bold',
    },
    description: {
        color: COLORS.muted,
        fontSize: 13,
        marginTop: 5,
        marginBottom: 25,
    },
    demoTitle: {
        color: COLORS.primary,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 25,
        fontSize: 12,
    },
    demoText: {
        color: COLORS.muted,
        textAlign: 'center',
        fontSize: 12,
        marginTop: 5,
    },
});