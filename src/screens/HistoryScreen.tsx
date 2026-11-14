import React from 'react';
import {
    View,
    Text,
    ScrollView,
    StyleSheet,
} from 'react-native';

import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';

import Header from '../components/Header';
import BookingCard from '../components/BookingCard';
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

type Props = BottomTabScreenProps<TabParamList, 'History'>;

export default function HistoryScreen({ navigation }: Props) {
    const { bookings } = useApp();

    return (
        <ScrollView style={styles.container}>
            <Header
                title="Riwayat Kunjungan"
                subtitle="Informasi jadwal pemeriksaan Anda"
            />

            <View style={styles.summary}>
                <Text style={styles.number}>{bookings.length}</Text>
                <Text style={styles.summaryText}>
                    Total Booking Pemeriksaan
                </Text>
            </View>

            <Text style={styles.sectionTitle}>
                Daftar Riwayat
            </Text>

            {bookings.length === 0 ? (
                <View style={styles.empty}>
                    <Text style={{ fontSize: 45 }}>📋</Text>
                    <Text style={styles.emptyTitle}>
                        Belum Ada Riwayat
                    </Text>
                    <Text style={styles.emptyText}>
                        Anda belum melakukan booking pemeriksaan.
                    </Text>
                </View>
            ) : (
                bookings.map((booking) => (
                    <BookingCard
                        key={booking.id}
                        booking={booking}
                    />
                ))
            )}

            <CustomButton
                title="Booking Pemeriksaan"
                onPress={() => navigation.navigate('Booking')}
            />

            <View style={{ height: 25 }} />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background,
        paddingHorizontal: 20,
    },
    summary: {
        backgroundColor: COLORS.primary,
        padding: 20,
        borderRadius: 15,
        alignItems: 'center',
    },
    number: {
        color: COLORS.white,
        fontSize: 30,
        fontWeight: 'bold',
    },
    summaryText: {
        color: COLORS.white,
        fontSize: 12,
        marginTop: 5,
    },
    sectionTitle: {
        fontSize: 16,
        color: COLORS.dark,
        fontWeight: 'bold',
        marginTop: 25,
        marginBottom: 15,
    },
    empty: {
        backgroundColor: COLORS.white,
        padding: 30,
        alignItems: 'center',
        borderRadius: 15,
    },
    emptyTitle: {
        color: COLORS.dark,
        fontSize: 15,
        fontWeight: 'bold',
        marginTop: 12,
    },
    emptyText: {
        color: COLORS.muted,
        fontSize: 12,
        marginTop: 6,
        textAlign: 'center',
    },
});