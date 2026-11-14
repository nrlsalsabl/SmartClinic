import React from 'react';
import {
    TouchableOpacity,
    Text,
    StyleSheet,
} from 'react-native';

import { COLORS } from '../theme/colors';

type Props = {
    title: string;
    icon: string;
    onPress: () => void;
};

export default function ServiceCard({
    title,
    icon,
    onPress,
}: Props) {
    return (
        <TouchableOpacity
            style={styles.card}
            onPress={onPress}
            activeOpacity={0.8}
        >
            <Text style={styles.icon}>{icon}</Text>
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    card: {
        width: '48%',
        backgroundColor: COLORS.white,
        paddingVertical: 23,
        alignItems: 'center',
        borderRadius: 15,
        marginBottom: 12,
        borderWidth: 1,
        borderColor: COLORS.border,
    },
    icon: {
        fontSize: 30,
        marginBottom: 10,
    },
    title: {
        fontSize: 12,
        fontWeight: '600',
        color: COLORS.dark,
    },
});