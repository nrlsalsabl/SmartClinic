import React from 'react';
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    TextInputProps,
} from 'react-native';

import { COLORS } from '../theme/colors';

type Props = TextInputProps & {
    label: string;
};

export default function CustomInput({
    label,
    ...props
}: Props) {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>

            <TextInput
                style={styles.input}
                placeholderTextColor={COLORS.muted}
                {...props}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 15,
    },
    label: {
        color: COLORS.dark,
        fontWeight: '600',
        fontSize: 13,
        marginBottom: 8,
    },
    input: {
        backgroundColor: '#F7F9FC',
        borderWidth: 1,
        borderColor: COLORS.border,
        padding: 14,
        borderRadius: 11,
        fontSize: 14,
        color: COLORS.dark,
    },
});