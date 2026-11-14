import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';

import { Doctor } from '../types';
import { COLORS } from '../theme/colors';

type Props = {
    doctor: Doctor;
    onPress?: () => void;
    selected?: boolean;
};

export default function DoctorCard({
    doctor,
    onPress,
    selected = false,
}: Props) {
    return (
        <TouchableOpacity
            activeOpacity={0.8}
            onPress={onPress}
            style={[
                styles.card,
                selected && styles.selected,
            ]}
        >
            <View style={styles.avatar}>
                <Text style={{ fontSize: 30 }}>{doctor.avatar}</Text>
            </View>

            <View style={styles.info}>
                <Text style={styles.name}>{doctor.name}</Text>
                <Text style={styles.specialty}>
                    {doctor.specialty}
                </Text>
                <Text style={styles.schedule}>
                    🕒 {doctor.schedule}
                </Text>
                <Text style={styles.rating}>
                    ⭐ {doctor.rating} • {doctor.experience}
                </Text>
            </View>

            {selected && (
                <Text style={styles.check}>✓</Text>
            )}
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        backgroundColor: COLORS.white,
        padding: 14,
        borderRadius: 15,
        marginBottom: 12,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: COLORS.border,
    },
    selected: {
        borderColor: COLORS.primary,
        borderWidth: 2,
    },
    avatar: {
        width: 60,
        height: 60,
        borderRadius: 14,
        backgroundColor: COLORS.secondary,
        alignItems: 'center',
        justifyContent: 'center',
    },
    info: {
        flex: 1,
        marginLeft: 12,
    },
    name: {
        fontWeight: 'bold',
        color: COLORS.dark,
        fontSize: 14,
    },
    specialty: {
        color: COLORS.muted,
        fontSize: 12,
        marginTop: 4,
    },
    schedule: {
        color: COLORS.primary,
        fontSize: 11,
        marginTop: 5,
    },
    rating: {
        color: COLORS.text,
        fontSize: 10,
        marginTop: 4,
    },
    check: {
        color: COLORS.primary,
        fontSize: 22,
        fontWeight: 'bold',
    },
});