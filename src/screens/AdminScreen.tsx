import React, { useState } from 'react';

import {
    View,
    Text,
    ScrollView,
    TextInput,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';

import { NativeStackScreenProps } from '@react-navigation/native-stack';

import Header from '../components/Header';
import CustomButton from '../components/CustomButton';

import { patients } from '../data/patients';
import { COLORS } from '../theme/colors';
import { useApp } from '../context/AppContext';

type RootStackParamList = {
    Login: undefined;
    PatientTabs: undefined;
    Admin: undefined;
};

type Props = NativeStackScreenProps<
    RootStackParamList,
    'Admin'
>;

export default function AdminScreen({ navigation }: Props) {
    const [search, setSearch] = useState('');

    const { bookings, setUser } = useApp();

    const filteredPatients = patients.filter((patient) =>
        patient.name.toLowerCase().includes(search.toLowerCase())
    );

    const handleLogout = () => {
        setUser(null);
        navigation.replace('Login');
    };

    return (
        <ScrollView style={styles.container}>
            <Header
                title="Dashboard Admin"
                subtitle="Manajemen data pasien SmartClinic"
            />

            <View style={styles.welcome}>
                <Text style={styles.welcomeTitle}>
                    Halo, Administrator 👋
                </Text>
                <Text style={styles.welcomeText}>
                    Selamat datang di panel pengelolaan klinik.
                </Text>
            </View>

            <View style={styles.stats}>
                <View style={styles.statCard}>
                    <Text style={styles.statNumber}>
                        {patients.length}
                    </Text>
                    <Text style={styles.statLabel}>
                        Total Pasien
                    </Text>
                </View>

                <View style={styles.statCard}>
                    <Text style={styles.statNumber}>
                        {bookings.length}
                    </Text>
                    <Text style={styles.statLabel}>
                        Total Booking
                    </Text>
                </View>
            </View>

            <Text style={styles.sectionTitle}>
                Data Pasien
            </Text>

            <TextInput
                style={styles.search}
                placeholder="Cari nama pasien..."
                placeholderTextColor={COLORS.muted}
                value={search}
                onChangeText={setSearch}
            />

            <View style={styles.table}>
                <View style={styles.tableHeader}>
                    <Text style={styles.headerText}>Pasien</Text>
                    <Text style={styles.headerText}>Status</Text>
                </View>

                {filteredPatients.map((patient) => (
                    <View style={styles.tableRow} key={patient.id}>
                        <View style={{ flex: 1 }}>
                            <Text style={styles.patientName}>
                                {patient.name}
                            </Text>
                            <Text style={styles.email}>
                                {patient.email}
                            </Text>
                            <Text style={styles.phone}>
                                {patient.phone}
                            </Text>
                        </View>

                        <Text
                            style={[
                                styles.status,
                                {
                                    color:
                                        patient.status === 'Aktif'
                                            ? COLORS.success
                                            : COLORS.danger,
                                },
                            ]}
                        >
                            {patient.status}
                        </Text>
                    </View>
                ))}

                {filteredPatients.length === 0 && (
                    <Text style={styles.empty}>
                        Data pasien tidak ditemukan.
                    </Text>
                )}
            </View>

            <Text style={styles.sectionTitle}>
                Booking Pasien
            </Text>

            {bookings.map((booking) => (
                <View style={styles.bookingCard} key={booking.id}>
                    <Text style={styles.patientName}>
                        {booking.doctorName}
                    </Text>
                    <Text style={styles.email}>
                        {booking.specialty}
                    </Text>
                    <Text style={styles.phone}>
                        {booking.date} • {booking.time}
                    </Text>
                    <Text style={styles.status}>
                        {booking.status}
                    </Text>
                </View>
            ))}

            <CustomButton
                title="Logout Admin"
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
    welcome: {
        backgroundColor: COLORS.primary,
        padding: 20,
        borderRadius: 15,
    },
    welcomeTitle: {
        color: COLORS.white,
        fontSize: 17,
        fontWeight: 'bold',
    },
    welcomeText: {
        color: '#E5F2FF',
        fontSize: 12,
        marginTop: 8,
    },
    stats: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 18,
        gap: 12,
    },
    statCard: {
        backgroundColor: COLORS.white,
        flex: 1,
        padding: 18,
        borderRadius: 14,
        borderWidth: 1,
        borderColor: COLORS.border,
    },
    statNumber: {
        fontSize: 27,
        fontWeight: 'bold',
        color: COLORS.primary,
    },
    statLabel: {
        color: COLORS.muted,
        fontSize: 12,
        marginTop: 5,
    },
    sectionTitle: {
        fontSize: 16,
        color: COLORS.dark,
        fontWeight: 'bold',
        marginTop: 25,
        marginBottom: 13,
    },
    search: {
        backgroundColor: COLORS.white,
        borderWidth: 1,
        borderColor: COLORS.border,
        borderRadius: 11,
        padding: 13,
        fontSize: 13,
        marginBottom: 15,
        color: COLORS.dark,
    },
    table: {
        backgroundColor: COLORS.white,
        borderRadius: 13,
        overflow: 'hidden',
        borderWidth: 1,
        borderColor: COLORS.border,
    },
    tableHeader: {
        backgroundColor: COLORS.secondary,
        padding: 14,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    headerText: {
        fontSize: 12,
        fontWeight: 'bold',
        color: COLORS.dark,
    },
    tableRow: {
        padding: 14,
        borderTopWidth: 1,
        borderColor: COLORS.border,
        flexDirection: 'row',
        alignItems: 'center',
    },
    patientName: {
        fontSize: 13,
        color: COLORS.dark,
        fontWeight: 'bold',
    },
    email: {
        fontSize: 11,
        color: COLORS.muted,
        marginTop: 4,
    },
    phone: {
        fontSize: 11,
        color: COLORS.text,
        marginTop: 4,
    },
    status: {
        fontSize: 11,
        fontWeight: 'bold',
        marginTop: 7,
    },
    empty: {
        textAlign: 'center',
        padding: 20,
        color: COLORS.muted,
    },
    bookingCard: {
        backgroundColor: COLORS.white,
        padding: 15,
        borderRadius: 13,
        marginBottom: 12,
        borderWidth: 1,
        borderColor: COLORS.border,
    },
});