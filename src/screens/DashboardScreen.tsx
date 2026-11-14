import React from 'react';
import {
    View,
    Text,
    ScrollView,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';

import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';

import Header from '../components/Header';
import ServiceCard from '../components/ServiceCard';
import BookingCard from '../components/BookingCard';

import { COLORS } from '../theme/colors';
import { useApp } from '../context/AppContext';

type TabParamList = {
    Home: undefined;
    Booking: undefined;
    History: undefined;
    Profile: undefined;
    Doctors: undefined;
};

type Props = BottomTabScreenProps<TabParamList, 'Home'>;

export default function DashboardScreen({ navigation }: Props) {
    const { user, bookings } = useApp();

    return (
        <ScrollView
            style={styles.container}
            showsVerticalScrollIndicator={false}
        >
            <Header
                title="SmartClinic"
                subtitle="Pelayanan Kesehatan Terpercaya"
            />

            <View style={styles.welcomeCard}>
                <Text style={styles.greeting}>
                    Halo, {user?.name || 'Pasien'} 👋
                </Text>

                <Text style={styles.welcomeText}>
                    Selamat datang kembali! Jaga kesehatan Anda
                    bersama SmartClinic.
                </Text>

                <Text style={styles.hospital}>🏥</Text>
            </View>

            <View style={styles.sectionHeader}>
                <Text style={styles.sectionTitle}>Layanan Kami</Text>
            </View>

            <View style={styles.services}>
                <ServiceCard
                    title="Booking Dokter"
                    icon="📅"
                    onPress={() => navigation.navigate('Booking')}
                />

                <ServiceCard
                    title="Riwayat Kunjungan"
                    icon="📋"
                    onPress={() => navigation.navigate('History')}
                />

                <ServiceCard
                    title="Daftar Dokter"
                    icon="👨‍⚕️"
                    onPress={() => navigation.navigate('Doctors')}
                />

                <ServiceCard
                    title="Profil Saya"
                    icon="👤"
                    onPress={() => navigation.navigate('Profile')}
                />
            </View>

            <View style={styles.sectionHeader}>
                <Text style={styles.sectionTitle}>
                    Jadwal Pemeriksaan
                </Text>

                <TouchableOpacity
                    onPress={() => navigation.navigate('History')}
                >
                    <Text style={styles.link}>Lihat Semua</Text>
                </TouchableOpacity>
            </View>

            {bookings.slice(0, 2).map((booking) => (
                <BookingCard
                    key={booking.id}
                    booking={booking}
                />
            ))}

            <View style={styles.tips}>
                <Text style={styles.tipsTitle}>💙 Tips Kesehatan</Text>
                <Text style={styles.tipsText}>
                    Jangan lupa menjaga pola makan, minum air putih
                    yang cukup, dan rutin memeriksa kesehatan Anda.
                </Text>
            </View>

            <View style={{ height: 20 }} />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background,
        paddingHorizontal: 20,
    },
    welcomeCard: {
        backgroundColor: COLORS.primary,
        padding: 22,
        borderRadius: 18,
        minHeight: 145,
        justifyContent: 'center',
    },
    greeting: {
        fontSize: 21,
        fontWeight: 'bold',
        color: COLORS.white,
    },
    welcomeText: {
        fontSize: 12,
        color: '#E2F0FF',
        width: '75%',
        lineHeight: 20,
        marginTop: 8,
    },
    hospital: {
        position: 'absolute',
        right: 15,
        bottom: 15,
        fontSize: 48,
    },
    sectionHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 25,
        marginBottom: 14,
    },
    sectionTitle: {
        fontSize: 16,
        color: COLORS.dark,
        fontWeight: 'bold',
    },
    services: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    link: {
        color: COLORS.primary,
        fontSize: 12,
        fontWeight: 'bold',
    },
    tips: {
        backgroundColor: '#EAF4FF',
        padding: 17,
        borderRadius: 14,
        marginTop: 10,
    },
    tipsTitle: {
        color: COLORS.dark,
        fontSize: 14,
        fontWeight: 'bold',
    },
    tipsText: {
        color: COLORS.text,
        fontSize: 12,
        lineHeight: 19,
        marginTop: 8,
    },
});