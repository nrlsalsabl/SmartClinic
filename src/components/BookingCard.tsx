import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { Booking } from '../types';
import { COLORS } from '../theme/colors';

export default function BookingCard({
    booking,
}: {
    booking: Booking;
}) {
    const statusColor =
        booking.status === 'Selesai'
            ? COLORS.success
            : booking.status === 'Dikonfirmasi'
                ? COLORS.primary
                : COLORS.warning;

    return (
        <View style={styles.card}>
            <View style={styles.top}>
                <View style={{ flex: 1 }}>
                    <Text style={styles.name}>
                        {booking.doctorName}
                    </Text>
                    <Text style={styles.specialty}>
                        {booking.specialty}
                    </Text>
                </View>

                <Text style={[
                    styles.status,
                    { color: statusColor },
                ]}>
                    {booking.status}
                </Text>
            </View>

            <View style={styles.divider} />

            <Text style={styles.detail}>
                📅 {booking.date}
            </Text>

            <Text style={styles.detail}>
                🕒 {booking.time}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: COLORS.white,
        padding: 16,
        borderRadius: 14,
        marginBottom: 13,
        borderWidth: 1,
        borderColor: COLORS.border,
    },
    top: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    name: {
        fontSize: 14,
        fontWeight: 'bold',
        color: COLORS.dark,
    },
    specialty: {
        color: COLORS.muted,
        fontSize: 12,
        marginTop: 4,
    },
    status: {
        fontSize: 11,
        fontWeight: 'bold',
    },
    divider: {
        height: 1,
        backgroundColor: COLORS.border,
        marginVertical: 12,
    },
    detail: {
        color: COLORS.text,
        fontSize: 12,
        marginBottom: 7,
    },
});