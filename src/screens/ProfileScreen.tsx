import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    Alert,
} from 'react-native';

import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';

import Header from '../components/Header';
import CustomButton from '../components/CustomButton';

import { COLORS } from '../theme/colors';
import { useApp } from '../context/AppContext';

type TabParamList = {
    Home: undefined;
    Booking: undefined;
    History: undefined;
    Profile: undefined;
    Doctors: undefined;
};

type Props = BottomTabScreenProps<TabParamList, 'Profile'>;

export default function ProfileScreen({ navigation }: Props) {
    const { user, setUser } = useApp();

    const handleLogout = () => {
        Alert.alert(
            'Logout',
            'Apakah Anda yakin ingin keluar?',
            [
                { text: 'Batal', style: 'cancel' },
                {
                    text: 'Keluar',
                    style: 'destructive',
                    onPress: () => {
                        setUser(null);
                        navigation.getParent()?.reset({
                            index: 0,
                            routes: [{ name: 'Login' as never }],
                        });
                    },
                },
            ]
        );
    };

    return (
        <ScrollView style={styles.container}>
            <Header
                title="Profil Saya"
                subtitle="Informasi akun pasien"
            />

            <View style={styles.profileHeader}>
                <Text style={styles.avatar}>👤</Text>
                <Text style={styles.name}>{user?.name}</Text>
                <Text style={styles.role}>Pasien SmartClinic</Text>
            </View>

            <View style={styles.card}>
                <Text style={styles.sectionTitle}>
                    Informasi Pribadi
                </Text>

                <Text style={styles.label}>Nama Lengkap</Text>
                <Text style={styles.value}>{user?.name}</Text>

                <View style={styles.divider} />

                <Text style={styles.label}>Email</Text>
                <Text style={styles.value}>{user?.email}</Text>

                <View style={styles.divider} />

                <Text style={styles.label}>Nomor Telepon</Text>
                <Text style={styles.value}>081234567890</Text>

                <View style={styles.divider} />

                <Text style={styles.label}>Alamat</Text>
                <Text style={styles.value}>Jakarta, Indonesia</Text>
            </View>

            <CustomButton
                title="Logout"
                outline
                onPress={handleLogout}
            />

            <View style={{ height: 30 }} />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background,
        paddingHorizontal: 20,
    },
    profileHeader: {
        backgroundColor: COLORS.white,
        padding: 25,
        alignItems: 'center',
        borderRadius: 15,
    },
    avatar: {
        fontSize: 65,
    },
    name: {
        fontSize: 19,
        color: COLORS.dark,
        fontWeight: 'bold',
        marginTop: 10,
    },
    role: {
        fontSize: 12,
        color: COLORS.muted,
        marginTop: 5,
    },
    card: {
        backgroundColor: COLORS.white,
        padding: 18,
        borderRadius: 15,
        marginTop: 18,
    },
    sectionTitle: {
        color: COLORS.dark,
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 12,
    },
    label: {
        color: COLORS.muted,
        fontSize: 12,
        marginTop: 12,
    },
    value: {
        color: COLORS.dark,
        fontSize: 14,
        fontWeight: '600',
        marginTop: 5,
    },
    divider: {
        height: 1,
        backgroundColor: COLORS.border,
        marginTop: 12,
    },
});