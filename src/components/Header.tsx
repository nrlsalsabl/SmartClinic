import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS } from '../theme/colors';

type Props = {
    title: string;
    subtitle?: string;
};

export default function Header({ title, subtitle }: Props) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            {subtitle && (
                <Text style={styles.subtitle}>{subtitle}</Text>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 20,
        paddingBottom: 20,
    },
    title: {
        fontSize: 23,
        fontWeight: 'bold',
        color: COLORS.dark,
    },
    subtitle: {
        fontSize: 13,
        color: COLORS.muted,
        marginTop: 5,
    },
});